import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { usePortalAuth } from '@/contexts/PortalAuthContext';
import ndgLogo from '@/assets/portal/ndg-logo.png';
import {
  LayoutDashboard, CalendarPlus, CalendarCheck, BookOpen,
  MessageCircle, Award, HelpCircle, Settings, LogOut, Users,
  FileText, BarChart3, ChevronRight, FolderOpen, HeartHandshake, Brain,
  CalendarDays, Home, Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const participantNav = [
  { to: '/portal/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/portal/book-session', label: 'Book a session', icon: CalendarPlus },
  { to: '/portal/programme-calendar', label: 'Calendar', icon: CalendarDays },
  { to: '/portal/my-bookings', label: 'My bookings', icon: CalendarCheck },
  { to: '/portal/learning-library', label: 'Learning library', icon: BookOpen },
  { to: '/portal/ask-ai', label: 'Ask NDG AI', icon: MessageCircle },
  { to: '/portal/certificates', label: 'Certificates', icon: Award },
  { to: '/portal/resources', label: 'Resources', icon: FolderOpen },
  { to: '/portal/coaching', label: 'Coaching', icon: HeartHandshake },
  { to: '/portal/cognassist', label: 'Cognassist', icon: Brain },
  { to: '/portal/support', label: 'Support', icon: HelpCircle },
];

const adminNav = [
  { to: '/portal/admin', label: 'Admin dashboard', icon: LayoutDashboard },
  { to: '/portal/admin/sessions', label: 'Session manager', icon: CalendarPlus },
  { to: '/portal/admin/attendance', label: 'Attendance', icon: Users },
  { to: '/portal/admin/content', label: 'Content manager', icon: FileText },
  { to: '/portal/admin/coaching', label: 'Coaching admin', icon: HeartHandshake },
  { to: '/portal/admin/cognassist', label: 'Cognassist admin', icon: Brain },
  { to: '/portal/admin/reporting', label: 'Reporting', icon: BarChart3 },
];

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const { user, isAdmin, logout, toggleAdmin, client } = usePortalAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const nav = isAdmin ? adminNav : participantNav;
  const homePath = isAdmin ? '/portal/admin' : '/portal/dashboard';
  const isHome = location.pathname === homePath;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        {/* Top bar */}
        <header className="bg-card border-b px-4 md:px-6 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-1.5 -ml-1 rounded-md hover:bg-secondary"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            {client?.logo_url ? (
              <img src={client.logo_url} alt={client.name} className="h-8 md:h-10 object-contain" />
            ) : (
              <img src={ndgLogo} alt="Neurodiversity Global" className="h-10 md:h-12 object-contain" />
            )}
            <div className="hidden sm:block h-8 w-px bg-border" />
            <span className="hidden lg:block text-sm font-bold text-foreground">
              {client?.name
                ? `${client.name} Neurodiversity Manager Training in partnership with Neurodiversity Global Ltd`
                : 'Neurodiversity Global Education — Client Portal'}
            </span>
            <span className="hidden sm:block lg:hidden text-sm font-bold text-foreground">
              {client?.name || 'NDG'} Neurodiversity Training
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <span className={`text-xs font-semibold px-2 md:px-3 py-1 rounded-full ${
              isAdmin
                ? 'bg-destructive/10 text-destructive border border-destructive/20'
                : 'bg-primary/10 text-primary border border-primary/20'
            }`}>
              {isAdmin ? 'Admin' : 'Participant'}
            </span>
            <Button variant="outline" size="sm" onClick={toggleAdmin} className="text-xs hidden sm:inline-flex">
              {isAdmin ? 'Participant view' : 'Admin view'}
            </Button>
          </div>
        </header>

        <div className="flex flex-1">
          {/* Desktop Sidebar */}
          <aside className="w-64 bg-card border-r hidden md:flex flex-col shrink-0">
            <div className="p-4 border-b">
              <p className="text-sm font-medium truncate">{user?.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
            </div>
            <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto">
              {nav.map(item => {
                const active = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${
                      active
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="p-2 border-t space-y-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={toggleAdmin}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:bg-secondary w-full"
                  >
                    <Settings className="h-4 w-4" />
                    {isAdmin ? 'Participant view' : 'Admin view'}
                    <ChevronRight className="h-3 w-3 ml-auto" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-[220px]">
                  <p className="text-xs">This system is in test mode. All profiles have full access to both participant and admin areas.</p>
                </TooltipContent>
              </Tooltip>
              <button
                onClick={() => { logout(); navigate('/portal/login'); }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:bg-secondary w-full"
              >
                <LogOut className="h-4 w-4" />
                Log out
              </button>
            </div>
          </aside>

          {/* Mobile Sheet Nav */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetContent side="left" className="w-72 p-0">
              <SheetHeader className="p-4 border-b">
                <SheetTitle className="text-left">
                  <p className="text-sm font-medium truncate">{user?.name}</p>
                  <p className="text-xs text-muted-foreground truncate font-normal">{user?.email}</p>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto max-h-[calc(100vh-180px)]">
                {nav.map(item => {
                  const active = location.pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${
                        active
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-secondary'
                      }`}
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="p-2 border-t space-y-1">
                <button
                  onClick={() => { toggleAdmin(); setMobileOpen(false); }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:bg-secondary w-full"
                >
                  <Settings className="h-4 w-4" />
                  {isAdmin ? 'Participant view' : 'Admin view'}
                </button>
                <button
                  onClick={() => { logout(); navigate('/portal/login'); setMobileOpen(false); }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:bg-secondary w-full"
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Main content */}
          <main className="flex-1 p-4 md:p-6 lg:p-8 pb-6 md:pb-8 overflow-auto">
            {!isHome && (() => {
              const currentNavItem = nav.find(item => item.to === location.pathname);
              const homeLabel = isAdmin ? 'Admin' : 'Dashboard';
              return (
                <nav className="flex items-center gap-1.5 text-sm mb-5">
                  <Link
                    to={homePath}
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Home className="h-3.5 w-3.5" />
                    {homeLabel}
                  </Link>
                  <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
                  <span className="font-medium text-foreground">
                    {currentNavItem?.label || location.pathname.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                  </span>
                </nav>
              );
            })()}
            {children}
          </main>
        </div>

        {/* Footer */}
        <footer className="bg-[hsl(var(--portal-dark-navy))] py-10 px-6 hidden md:block">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
              <Link to={homePath}>
                <img
                  src={ndgLogo}
                  alt="Neurodiversity Global Education"
                  className="h-[154px] object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-primary-foreground/70">
              {participantNav.map(item => (
                <Link key={item.to} to={item.to} className="hover:text-primary-foreground transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="text-xs text-primary-foreground/50 text-center mt-6">
              © {new Date().getFullYear()} {client?.name ? `${client.name} × ` : ''}Neurodiversity Global Education
            </p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}