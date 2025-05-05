'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie, deleteCookie } from 'cookies-next';

interface User {
  id: string;
  username: string;
  email: string;
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
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('http://localhost:3003/api/users/profile', {
          credentials: 'include'
        });
        if (res.ok) setUser(await res.json());
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await fetch('http://localhost:3003/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({  email: email.trim(),
        password: password  }),
      credentials: 'include'
    });
    if (!res.ok) throw new Error('Login failed');
    setUser(await res.json());
    router.push('/');
    const data = await res.json();
  console.log('Login response:', data); // Vérifiez la structure
  setUser({
    id: data.user.id,
    username: data.user.username, 
    email: data.user.email
  });
  };

  const register = async (username: string, email: string, password: string) => {
    const res = await fetch('http://localhost:3003/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
      credentials: 'include'
    });
    if (!res.ok) throw new Error('Registration failed');
    await login(email, password);
  };

  const logout = async () => {
    await fetch('http://localhost:3003/api/auth/logout', { 
      method: 'POST',
      credentials: 'include'
    });
    deleteCookie('token');
    setUser(null);
    router.push('/auth/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth doit être utilisé à l\intérieur de AuthProvider');
  return context;
};