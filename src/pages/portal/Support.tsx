import { Mail, HelpCircle, BookOpen, LifeBuoy, Wrench, GraduationCap } from 'lucide-react';

export default function PortalSupport() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <LifeBuoy className="h-6 w-6 text-primary" />
          Support
        </h1>
        <p className="text-muted-foreground mt-1">Get help with the training or this platform.</p>
      </div>

      <div className="space-y-4">
        <div className="bg-card border rounded-lg p-6 space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-semibold">Training questions</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            For questions about session content, booking or your progress, contact your training administrator.
          </p>
          <p className="text-sm font-medium">hello@neurodiversityglobal.com</p>
        </div>

        <div className="bg-card border rounded-lg p-6 space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Wrench className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-semibold">Technical issues</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            If you are having trouble logging in, accessing content, or downloading certificates, please contact support.
          </p>
          <p className="text-sm font-medium">hello@neurodiversityglobal.com</p>
        </div>

        <div className="bg-card border rounded-lg p-6 space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-semibold">Coaching support</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            One-to-one coaching will be available in a future training stage. Details will be shared here once available.
          </p>
        </div>
      </div>
    </div>
  );
}
