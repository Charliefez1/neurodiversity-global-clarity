import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { User } from '@supabase/supabase-js';
import type { SessionType } from '@/lib/sessionUtils';

export interface Client {
  id: string;
  name: string;
  slug: string;
  allowed_domains: string[];
  logo_url: string | null;
  settings: Record<string, any>;
}

export interface Profile {
  id: string;
  user_id: string;
  name: string;
  email: string;
  role_group: string;
  enrolment_date: string;
  completed_stages: SessionType[];
  client_id: string | null;
}

interface PortalAuthContextType {
  user: Profile | null;
  authUser: User | null;
  client: Client | null;
  isAdmin: boolean;
  loading: boolean;
  signUp: (email: string, password: string, name: string) => Promise<{ error: string | null }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  logout: () => Promise<void>;
  toggleAdmin: () => void;
  devLogin: () => void;
}

const PortalAuthContext = createContext<PortalAuthContextType | undefined>(undefined);

export function PortalAuthProvider({ children }: { children: ReactNode }) {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [user, setUser] = useState<Profile | null>(null);
  const [client, setClient] = useState<Client | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authInitTimeout = window.setTimeout(() => {
      setLoading(false);
    }, 8000);

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        try {
          setAuthUser(session?.user ?? null);

          if (session?.user) {
            setTimeout(async () => {
              try {
                const [{ data: profileData }, { data: roleData }] = await Promise.all([
                  supabase
                    .from('profiles')
                    .select('*')
                    .eq('user_id', session.user.id)
                    .single(),
                  supabase
                    .from('user_roles')
                    .select('role')
                    .eq('user_id', session.user.id)
                    .eq('role', 'admin')
                    .maybeSingle(),
                ]);

                if (profileData) {
                  const profile = {
                    ...profileData,
                    completed_stages: (profileData.completed_stages || []) as SessionType[],
                  };
                  setUser(profile);

                  if (profileData.client_id) {
                    const { data: clientData } = await supabase
                      .from('clients')
                      .select('*')
                      .eq('id', profileData.client_id)
                      .single();
                    if (clientData) setClient(clientData as Client);
                  }
                } else {
                  setUser({
                    id: session.user.id,
                    user_id: session.user.id,
                    name: session.user.user_metadata?.name || session.user.email?.split('@')[0] || 'User',
                    email: session.user.email || '',
                    role_group: '',
                    enrolment_date: new Date().toISOString(),
                    completed_stages: [],
                    client_id: null,
                  });
                }

                setIsAdmin(!!roleData);
              } catch (err) {
                console.error('[PortalAuth] profile fetch error:', err);
              } finally {
                setLoading(false);
                window.clearTimeout(authInitTimeout);
              }
            }, 0);
          } else {
            setUser(null);
            setIsAdmin(false);
            setLoading(false);
            window.clearTimeout(authInitTimeout);
          }
        } catch (err) {
          console.error('[PortalAuth] unexpected error:', err);
          setLoading(false);
          window.clearTimeout(authInitTimeout);
        }
      }
    );

    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        if (!session) setLoading(false);
      })
      .catch(() => setLoading(false));

    return () => {
      window.clearTimeout(authInitTimeout);
      subscription.unsubscribe();
    };
  }, []);

  const checkAllowedDomain = async (email: string): Promise<boolean> => {
    const domain = email.split('@')[1];
    if (domain === 'neurodiversityglobal.com') return true;
    const { data } = await supabase
      .from('clients')
      .select('id')
      .contains('allowed_domains', [domain])
      .limit(1);
    return (data && data.length > 0) || false;
  };

  const signUp = async (email: string, password: string, name: string): Promise<{ error: string | null }> => {
    const allowed = await checkAllowedDomain(email);
    if (!allowed) {
      return { error: 'Your email domain is not registered on this platform. Please contact your organisation administrator.' };
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
        emailRedirectTo: window.location.origin,
      },
    });
    if (error) return { error: error.message };

    supabase.functions.invoke('notify-new-signup', {
      body: { name, email },
    }).catch(err => console.warn('[Notify] Failed to send signup notification:', err));

    return { error: null };
  };

  const signIn = async (email: string, password: string): Promise<{ error: string | null }> => {
    const allowed = await checkAllowedDomain(email);
    if (!allowed) {
      return { error: 'Your email domain is not registered on this platform. Please contact your organisation administrator.' };
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };
    return { error: null };
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setAuthUser(null);
    setClient(null);
    setIsAdmin(false);
  };

  const toggleAdmin = () => setIsAdmin(prev => !prev);

  const devLogin = () => {
    setUser({
      id: 'dev-user',
      user_id: 'dev-user',
      name: 'Dev User',
      email: 'dev@tpexpress.co.uk',
      role_group: 'admin',
      enrolment_date: new Date().toISOString(),
      completed_stages: [],
      client_id: null,
    });
    setIsAdmin(false);
    setLoading(false);
  };

  return (
    <PortalAuthContext.Provider value={{ user, authUser, client, isAdmin, loading, signUp, signIn, logout, toggleAdmin, devLogin }}>
      {children}
    </PortalAuthContext.Provider>
  );
}

export function usePortalAuth() {
  const ctx = useContext(PortalAuthContext);
  if (!ctx) throw new Error('usePortalAuth must be used within PortalAuthProvider');
  return ctx;
}
