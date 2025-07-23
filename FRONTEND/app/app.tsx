// app/page.tsx
'use client';
import { useAuth } from './contexts/authProvider';
import Link from 'next/link';

export default function HomePage() {
  const { user, loading } = useAuth();
  

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="home-container">
      <h1>Bienvenue sur notre application</h1>
      
      {user ? (
        <div className="authenticated-section">
          <p>Vous êtes connecté en tant que {user.username}</p>
          <Link href="/dashboard" className="dashboard-btn">
            Accéder au tableau de bord
          </Link>
        </div>
      ) : (
        <div className="auth-buttons">
          <Link href="/auth/login" className="auth-btn login-btn">
            Se connecter
          </Link>
          <Link href="/auth/register" className="auth-btn register-btn">
            S'inscrire
          </Link>
        </div>
      )}
    </div>
  );
}