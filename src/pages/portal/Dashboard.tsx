import { Link } from 'react-router-dom';
import { usePortalAuth } from '@/contexts/PortalAuthContext';
import { CalendarPlus, BookOpen, MessageCircle, Award, HelpCircle, ArrowRight, FolderOpen, HeartHandshake, Brain, Sparkles } from 'lucide-react';

export default function PortalDashboard() {
  const { user } = usePortalAuth();
  if (!user) return null;

  const quickLinks = [
    { to: '/portal/book-session', label: 'Book a session', icon: CalendarPlus, description: 'Browse and book training sessions' },
    { to: '/portal/learning-library', label: 'Learning library', icon: BookOpen, description: 'Access training materials' },
    { to: '/portal/ask-ai', label: 'Ask AI', icon: Sparkles, description: 'Get instant answers' },
    { to: '/portal/certificates', label: 'Certificates', icon: Award, description: 'View your certificates' },
    { to: '/portal/coaching', label: 'Coaching', icon: HeartHandshake, description: 'Book coaching sessions' },
    { to: '/portal/cognassist', label: 'Cognassist', icon: Brain, description: 'Cognitive assessments' },
    { to: '/portal/resources', label: 'Resources', icon: FolderOpen, description: 'Guides and documents' },
    { to: '/portal/support', label: 'Support', icon: HelpCircle, description: 'Get help' },
  ];

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Welcome back, {user.name.split(' ')[0]}</h1>
        <p className="text-muted-foreground mt-1">Your neurodiversity training dashboard.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickLinks.map(link => (
          <Link key={link.to} to={link.to} className="bg-card border rounded-lg p-4 hover:border-primary/40 transition-colors group">
            <link.icon className="h-5 w-5 text-primary mb-2" />
            <h3 className="font-medium text-sm">{link.label}</h3>
            <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
