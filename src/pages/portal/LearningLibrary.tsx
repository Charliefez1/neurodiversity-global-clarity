import { BookOpen } from 'lucide-react';

export default function PortalLearningLibrary() {
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        <BookOpen className="h-6 w-6 text-primary" />
        Learning library
      </h1>
      <p className="text-muted-foreground">Learning library is being rebuilt with live data. Check back soon.</p>
    </div>
  );
}
