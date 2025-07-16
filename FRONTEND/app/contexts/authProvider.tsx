'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie, deleteCookie } from 'cookies-next'; // eslint-disable-next-line @typescript-eslint/no-unused-vars

interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'editor' | 'user'; 
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false); // ← ajout
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/users/profile', {
          credentials: 'include'
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        }
      } finally {
        setLoading(false);
        setMounted(true); // ← on indique que le montage est terminé
      }
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.trim(), password }),
      credentials: 'include'
    });
    if (!res.ok) throw new Error('Login failed');

    const data = await res.json();
    console.log('Login response:', data);

    setUser({
      id: data.user.id,
      username: data.user.username,
      email: data.user.email,
      role: data.user.role,
    });

    router.push('/');
  };

  const register = async (username: string, email: string, password: string) => {
    const res = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
      credentials: 'include'
    });
    if (!res.ok) throw new Error('Registration failed');
    await login(email, password);
  };

  const logout = async () => {
    await fetch('http://localhost:3000/api/auth/logout', {
      method: 'POST',
      credentials: 'include'
    });
    deleteCookie('token');
    setUser(null);
    router.push('/auth/login');
  };

  if (!mounted) return null; // ← on attend que le client monte avant de rendre quoi que ce soit

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth doit être utilisé à l’intérieur de AuthProvider');
  return context;
};
