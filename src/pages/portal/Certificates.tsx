import { usePortalAuth } from '@/contexts/PortalAuthContext';
import { Award } from 'lucide-react';

export default function PortalCertificates() {
  const { user } = usePortalAuth();
  if (!user) return null;

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        <Award className="h-6 w-6 text-primary" />
        Certificates
      </h1>
      <p className="text-muted-foreground">Certificates are being rebuilt with live data. Check back soon.</p>
    </div>
  );
}
