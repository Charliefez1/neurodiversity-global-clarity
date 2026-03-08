import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function fromMinutes(mins: number): string {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function dayName(date: Date): string {
  return ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][date.getUTCDay()];
}

function formatDateDDMonthYYYY(date: Date): string {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${d} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

function isoDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

function getISOWeek(date: Date): string {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, "0")}`;
}

interface BusyPeriod { start: string; end: string; }
interface ExistingSession { date: string; start_time: string; end_time: string; is_online: boolean; type: string; status: string; }
interface Slot {
  date: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  period: "Morning" | "Afternoon";
  isOnline: boolean;
  isMultiSessionDay: boolean;
  preMeetWarning: boolean;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      dateFrom,
      dateTo,
      sessionType,
      durationMinutes,
      isOnline = true,
      internationalEnabled = false,
    } = await req.json();

    if (!dateFrom || !dateTo) {
      return new Response(JSON.stringify({ error: "dateFrom and dateTo are required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { data: rules, error: rulesError } = await adminClient
      .from("availability_rules")
      .select("rule_key, rule_value")
      .eq("is_active", true);
    if (rulesError) throw new Error(`Failed to load rules: ${rulesError.message}`);

    const rulesMap: Record<string, any> = {};
    for (const r of rules || []) rulesMap[r.rule_key] = r.rule_value;

    const weekdayRules = rulesMap.weekday_rules || {};
    const bufferRules = rulesMap.buffer_rules || {};
    const bookingRules = rulesMap.booking_rules || {};

    const bufferBefore = bufferRules.online_buffer_before_minutes || 30;
    const bufferAfter = bufferRules.online_buffer_after_minutes || 30;
    const minNoticeHours = bookingRules.min_notice_hours || 24;
    const maxOnlineAfternoonPerWeek = bookingRules.max_online_afternoon_sessions_per_week ?? 1;

    const { data: sessionTypes } = await adminClient
      .from("session_types")
      .select("slug, duration_minutes, capacity, name")
      .eq("is_active", true);

    const typeInfo = (sessionTypes || []).find((t: any) => t.slug === sessionType);
    const duration = durationMinutes || typeInfo?.duration_minutes || 60;

    const calendarRes = await fetch(
      `${supabaseUrl}/functions/v1/google-calendar?action=availability&timeMin=${encodeURIComponent(dateFrom)}&timeMax=${encodeURIComponent(dateTo)}`,
      { method: "GET", headers: { Authorization: `Bearer ${serviceRoleKey}`, "Content-Type": "application/json" } }
    );
    const calendarData = await calendarRes.json();
    if (!calendarRes.ok) throw new Error(`Calendar API error: ${JSON.stringify(calendarData)}`);

    const busyPeriods: BusyPeriod[] = calendarData?.calendars?.primary?.busy || [];

    const startDate = dateFrom.split("T")[0];
    const endDate = dateTo.split("T")[0];
    const { data: existingSessions } = await adminClient
      .from("sessions")
      .select("date, start_time, end_time, is_online, type, status")
      .gte("date", startDate)
      .lte("date", endDate)
      .neq("status", "cancelled");

    const sessions: ExistingSession[] = existingSessions || [];

    const onlineAfternoonByWeek: Record<string, number> = {};
    for (const s of sessions) {
      const sDate = new Date(s.date + "T00:00:00Z");
      const dn = dayName(sDate);
      if (!["wednesday", "thursday", "friday"].includes(dn)) continue;
      if (!s.is_online) continue;
      const startMins = toMinutes(s.start_time);
      if (startMins >= toMinutes("13:30")) {
        const week = getISOWeek(sDate);
        onlineAfternoonByWeek[week] = (onlineAfternoonByWeek[week] || 0) + 1;
      }
    }

    const now = new Date();
    const earliest = new Date(now.getTime() + minNoticeHours * 3600000);
    const rangeStart = new Date(dateFrom);
    const rangeEnd = new Date(dateTo);

    const slots: Slot[] = [];
    const currentDay = new Date(Date.UTC(rangeStart.getUTCFullYear(), rangeStart.getUTCMonth(), rangeStart.getUTCDate()));
    const lastDay = new Date(Date.UTC(rangeEnd.getUTCFullYear(), rangeEnd.getUTCMonth(), rangeEnd.getUTCDate()));

    while (currentDay <= lastDay) {
      const dn = dayName(currentDay);
      const dateStr = isoDate(currentDay);

      if (dn === "saturday" || dn === "sunday") {
        currentDay.setUTCDate(currentDay.getUTCDate() + 1);
        continue;
      }

      const dayRules = weekdayRules[dn];
      if (!dayRules || dayRules === "never") {
        currentDay.setUTCDate(currentDay.getUTCDate() + 1);
        continue;
      }

      if (dayRules.online_only && !isOnline) {
        currentDay.setUTCDate(currentDay.getUTCDate() + 1);
        continue;
      }

      if ((dn === "monday" || dn === "tuesday") && duration >= 180) {
        currentDay.setUTCDate(currentDay.getUTCDate() + 1);
        continue;
      }

      interface Window { start: number; end: number; period: "Morning" | "Afternoon"; }
      const windows: Window[] = [];

      if (dn === "monday" || dn === "tuesday") {
        const windowStart = toMinutes(dayRules.start || "09:00");
        const hardStopSession = toMinutes(dayRules.hard_stop_session || "15:00");
        const hardStopBuffer = toMinutes(dayRules.hard_stop_buffer || "15:30");
        const latestSessionEnd = Math.min(hardStopSession, hardStopBuffer - bufferAfter);
        const latestStart = latestSessionEnd - duration;
        if (latestStart >= windowStart) {
          windows.push({ start: windowStart, end: latestSessionEnd, period: "Morning" });
        }
      } else {
        if (dayRules.morning) {
          windows.push({ start: toMinutes(dayRules.morning.start), end: toMinutes(dayRules.morning.end), period: "Morning" });
        }
        if (dayRules.afternoon) {
          windows.push({ start: toMinutes(dayRules.afternoon.start), end: toMinutes(dayRules.afternoon.end), period: "Afternoon" });
        }
      }

      const endOfDayLimit = internationalEnabled ? toMinutes("22:00") : toMinutes("19:00");
      const isoWeek = getISOWeek(currentDay);

      for (const w of windows) {
        if (w.period === "Afternoon" && isOnline && ["wednesday", "thursday", "friday"].includes(dn)) {
          const usedThisWeek = onlineAfternoonByWeek[isoWeek] || 0;
          if (usedThisWeek >= maxOnlineAfternoonPerWeek) continue;
        }

        const step = 30;
        for (let startMin = w.start; startMin + duration <= w.end; startMin += step) {
          const endMin = startMin + duration;
          const blockStart = startMin - (isOnline ? bufferBefore : 0);
          const blockEnd = endMin + (isOnline ? bufferAfter : 0);

          if (dn === "monday" || dn === "tuesday") {
            const hardStopBuffer = toMinutes(dayRules.hard_stop_buffer || "15:30");
            if (blockEnd > hardStopBuffer) continue;
            const hardStopSession = toMinutes(dayRules.hard_stop_session || "15:00");
            if (endMin > hardStopSession) continue;
          }

          if (blockEnd > endOfDayLimit) continue;

          const slotDateTime = new Date(dateStr + "T" + fromMinutes(startMin) + ":00Z");
          if (slotDateTime <= earliest) continue;

          let calendarConflict = false;
          for (const bp of busyPeriods) {
            const bpStart = new Date(bp.start).getTime();
            const bpEnd = new Date(bp.end).getTime();
            const slotStart = new Date(dateStr + "T" + fromMinutes(blockStart) + ":00Z").getTime();
            const slotEnd = new Date(dateStr + "T" + fromMinutes(blockEnd) + ":00Z").getTime();
            if (slotStart < bpEnd && slotEnd > bpStart) { calendarConflict = true; break; }
          }
          if (calendarConflict) continue;

          let sessionConflict = false;
          for (const es of sessions) {
            if (es.date !== dateStr) continue;
            const esStart = toMinutes(es.start_time);
            const esEnd = toMinutes(es.end_time);
            if (blockStart < esEnd && blockEnd > esStart) { sessionConflict = true; break; }
          }
          if (sessionConflict) continue;

          slots.push({
            date: formatDateDDMonthYYYY(currentDay),
            dayOfWeek: dn.charAt(0).toUpperCase() + dn.slice(1),
            startTime: fromMinutes(startMin),
            endTime: fromMinutes(endMin),
            period: w.period,
            isOnline,
            isMultiSessionDay: false,
            preMeetWarning: false,
          });
        }
      }

      currentDay.setUTCDate(currentDay.getUTCDate() + 1);
    }

    const preMeetDaysBefore = bufferRules.pre_meet_business_days_before || 5;
    const preMeetWindow = bufferRules.pre_meet_total_window_minutes || 60;

    for (const slot of slots) {
      const parts = slot.date.split(" ");
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const monthIdx = months.indexOf(parts[1]);
      const slotDate = new Date(Date.UTC(parseInt(parts[2]), monthIdx, parseInt(parts[0])));

      let preMeetDate = new Date(slotDate);
      let bizDays = 0;
      while (bizDays < preMeetDaysBefore) {
        preMeetDate.setUTCDate(preMeetDate.getUTCDate() - 1);
        const pdn = dayName(preMeetDate);
        if (pdn !== "saturday" && pdn !== "sunday") bizDays++;
      }

      const pmDn = dayName(preMeetDate);
      const pmDateStr = isoDate(preMeetDate);
      const pmDayRules = weekdayRules[pmDn];
      if (!pmDayRules || pmDayRules === "never") { slot.preMeetWarning = true; continue; }

      let pmEnd = toMinutes("17:00");
      if (pmDn === "monday" || pmDn === "tuesday") {
        pmEnd = toMinutes(pmDayRules.hard_stop_premeet || "15:00");
      }

      const pmBusy: { start: number; end: number }[] = [];
      for (const bp of busyPeriods) {
        const bpDate = new Date(bp.start).toISOString().split("T")[0];
        if (bpDate === pmDateStr) {
          const bpStartMin = new Date(bp.start).getUTCHours() * 60 + new Date(bp.start).getUTCMinutes();
          const bpEndMin = new Date(bp.end).getUTCHours() * 60 + new Date(bp.end).getUTCMinutes();
          pmBusy.push({ start: bpStartMin, end: bpEndMin });
        }
      }
      for (const es of sessions) {
        if (es.date === pmDateStr) {
          pmBusy.push({ start: toMinutes(es.start_time), end: toMinutes(es.end_time) });
        }
      }
      pmBusy.sort((a, b) => a.start - b.start);

      const pmStart = toMinutes("09:00");
      let found = false;
      for (let t = pmStart; t + preMeetWindow <= pmEnd; t += 15) {
        let conflict = false;
        for (const b of pmBusy) {
          if (t < b.end && t + preMeetWindow > b.start) { conflict = true; break; }
        }
        if (!conflict) { found = true; break; }
      }
      if (!found) slot.preMeetWarning = true;
    }

    return new Response(JSON.stringify({
      slots,
      totalSlots: slots.length,
      rulesApplied: Object.keys(rulesMap),
      sessionType,
      durationMinutes: duration,
      isOnline,
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("[availability-engine] Error:", error);
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});