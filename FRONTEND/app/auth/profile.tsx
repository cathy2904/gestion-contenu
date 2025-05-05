import { useEffect } from 'react';
import { useAuth } from '../contexts/authContext';
import { useRouter } from 'next/router';

export default function Profile() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/login');
  }, [user]);

  if (!user) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Profil</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <button onClick={logout}>Déconnexion</button>
    </div>
  );
}