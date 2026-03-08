import { FolderOpen } from 'lucide-react';

export default function PortalResources() {
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        <FolderOpen className="h-6 w-6 text-primary" />
        Resources
      </h1>
      <p className="text-muted-foreground">Resources are being rebuilt with live data. Check back soon.</p>
    </div>
  );
}
