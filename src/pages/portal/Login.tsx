import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePortalAuth } from '@/contexts/PortalAuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ndgLogo from '@/assets/portal/ndg-logo.png';
import loginHero from '@/assets/portal/login-hero.png';

export default function PortalLogin() {
  const navigate = useNavigate();
  const { signIn, signUp, devLogin } = usePortalAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (mode === 'signup') {
      if (!name.trim() || !email.trim() || !password.trim()) { setError('Please fill in all fields.'); return; }
      if (password.length < 6) { setError('Password must be at least 6 characters.'); return; }
      const { error: err } = await signUp(email, password, name);
      if (err) { setError(err); return; }
      setSuccess('Account created! Check your email to confirm, then sign in.');
      setMode('signin');
    } else {
      if (!email.trim() || !password.trim()) { setError('Please enter your email and password.'); return; }
      const { error: err } = await signIn(email, password);
      if (err) { setError(err); return; }
      navigate('/portal/dashboard');
    }
  };

  const handleDevLogin = () => { devLogin(); navigate('/portal/dashboard'); };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: `url(${loginHero})` }}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex items-center justify-center px-4 md:px-6 py-4">
        <img src={ndgLogo} alt="Neurodiversity Global" className="h-16 object-contain drop-shadow-lg" />
      </div>
      <div className="flex-1 flex items-center justify-center relative z-10 px-6">
        <div className="w-full max-w-md">
          <div className="backdrop-blur-md bg-black/15 border border-white/15 rounded-xl p-8 shadow-2xl text-white">
            <h2 className="text-lg font-semibold mb-1">{mode === 'signin' ? 'Log in to Client Portal' : 'Create account'}</h2>
            <p className="text-sm text-white/70 mb-5">
              {mode === 'signin' ? 'Use your organisation email to access the training.' : 'Register with your organisation email to get started.'}
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              {mode === 'signup' && (
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-white/90 text-sm">Full name</Label>
                  <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Jane Smith" className="bg-white/15 border-white/20 text-white placeholder:text-white/50" />
                </div>
              )}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-white/90 text-sm">Email</Label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@yourcompany.com" className="bg-white/15 border-white/20 text-white placeholder:text-white/50" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-white/90 text-sm">Password</Label>
                <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="bg-white/15 border-white/20 text-white placeholder:text-white/50" />
              </div>
              {error && <p className="text-sm text-red-300">{error}</p>}
              {success && <p className="text-sm text-green-300">{success}</p>}
              <Button type="submit" className="w-full">{mode === 'signin' ? 'Log in' : 'Create account'}</Button>
              <button type="button" className="w-full text-sm text-white/70 hover:text-white transition-colors"
                onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); setSuccess(''); }}>
                {mode === 'signin' ? "Don't have an account? Create one" : 'Already have an account? Log in'}
              </button>
            </form>
            <div className="mt-4 pt-3 border-t border-white/10">
              <Button type="button" variant="outline" size="sm" className="w-full bg-white/5 border-white/20 text-white/70 hover:text-white hover:bg-white/10" onClick={handleDevLogin}>
                Dev Login (Quick Access)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
