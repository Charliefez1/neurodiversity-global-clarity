import { Button } from '@/components/ui/button';
import { Download, FileBarChart, Users, ClipboardCheck, Award, HeartHandshake, Brain, BarChart3 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function PortalReporting() {
  const { toast } = useToast();
  const reports = [
    { id: 'participants', title: 'Participants report', description: 'All enrolled participants and their progress.', icon: Users },
    { id: 'attendance', title: 'Attendance report', description: 'All sessions with participant attendance status.', icon: ClipboardCheck },
    { id: 'completion', title: 'Completion report', description: 'Participant progress across all training stages.', icon: Award },
    { id: 'coaching', title: 'Coaching bookings report', description: 'All coaching sessions and booking details.', icon: HeartHandshake },
    { id: 'cognassist', title: 'Cognassist requests report', description: 'All Cognassist licence requests and statuses.', icon: Brain },
    { id: 'polls', title: 'Poll results summary', description: 'Pre and post session poll results.', icon: BarChart3 },
  ];

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-semibold flex items-center gap-2"><FileBarChart className="h-6 w-6 text-primary" />Reporting</h1>
      <p className="text-muted-foreground">Export training data as CSV files.</p>
      <div className="space-y-4">
        {reports.map(r => (
          <div key={r.id} className="bg-card border rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><r.icon className="h-5 w-5 text-primary" /></div>
              <div><h3 className="font-medium">{r.title}</h3><p className="text-sm text-muted-foreground mt-1">{r.description}</p></div>
            </div>
            <Button variant="outline" className="gap-1" onClick={() => toast({ title: 'Export started', description: `${r.title} CSV is downloading.` })}><Download className="h-4 w-4" /> Export CSV</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
