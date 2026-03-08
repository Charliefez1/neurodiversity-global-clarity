import { CalendarPlus } from 'lucide-react';

export default function PortalBookSession() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <CalendarPlus className="h-6 w-6 text-primary" />
          Book a session
        </h1>
        <p className="text-muted-foreground mt-1">Session booking is being rebuilt. Check back soon.</p>
      </div>
    </div>
  );
}
