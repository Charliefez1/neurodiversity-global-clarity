import { Calendar } from 'lucide-react';

export default function PortalProgrammeCalendar() {
  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        <Calendar className="h-6 w-6 text-primary" />
        Programme calendar
      </h1>
      <p className="text-muted-foreground">Calendar is being rebuilt with live data. Check back soon.</p>
    </div>
  );
}
