import { usePortalAuth } from '@/contexts/PortalAuthContext';
import { Brain } from 'lucide-react';
import cognassistHero from '@/assets/portal/cognassist-hero.png';

export default function PortalCognassist() {
  const { user } = usePortalAuth();
  if (!user) return null;

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Cognassist</h1>
        <p className="text-muted-foreground mt-1">Understand how you think. Work more effectively.</p>
      </div>
      <div className="bg-card border rounded-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center gap-4 p-5">
          <img src={cognassistHero} alt="Cognassist" className="w-20 h-20 object-contain shrink-0" />
          <div className="space-y-2 flex-1">
            <h2 className="text-lg font-semibold">About Cognassist</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">Cognassist is a cognitive insight platform that helps individuals and organisations understand how people think, process information and approach their work.</p>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground text-sm">Full Cognassist integration with licence requests will be available once the database migration is complete.</p>
    </div>
  );
}
