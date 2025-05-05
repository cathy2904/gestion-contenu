'use client';
import { useAuth } from '../../contexts/authProvider';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, loading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/');
    } catch (err) {
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#1e1e1e] to-[#0f0f0f] px-4">
      <div className="w-full max-w-md bg-[#181818] p-8 rounded-2xl shadow-xl border border-[#2a2a2a]">
        <h1 className="text-2xl font-semibold mb-6 text-center text-white">CONNEXION</h1>
        
        {error && (
          <p className="text-sm text-red-500 bg-red-100 rounded-md px-3 py-2 mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="px-4 py-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
            className="px-4 py-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#4f46e5] hover:bg-[#635df5] text-white font-medium py-3 rounded-lg transition-all duration-200 disabled:opacity-50"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Pas de compte ?{" "}
          <Link href="/auth/register" className="text-[#4f46e5] hover:underline">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
}
