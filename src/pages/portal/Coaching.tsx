import { usePortalAuth } from '@/contexts/PortalAuthContext';
import { HeartHandshake } from 'lucide-react';

export default function PortalCoaching() {
  const { user } = usePortalAuth();
  if (!user) return null;

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        <HeartHandshake className="h-6 w-6 text-primary" />
        Coaching
      </h1>
      <p className="text-muted-foreground">Coaching is being rebuilt with live data. Check back soon.</p>
    </div>
  );
}
