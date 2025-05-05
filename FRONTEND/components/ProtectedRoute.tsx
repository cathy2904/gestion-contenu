'use client';
import { useAuth } from '../app/contexts/authProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Si le chargement est terminé et qu'il n'y a pas d'utilisateur, redirigez vers la page de connexion
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  // Affichez un indicateur de chargement pendant la vérification de l'authentification
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500">
        </div>
      </div>
    );
  }

  // Si l'utilisateur est authentifié, affichez le contenu de la page
  return user ? <>{children}</> : null;
}