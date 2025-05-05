// src/app/dashboard/page.tsx
import RequireAuth from "@/components/RequireAuth";
import Nav from "@/components/Nav";
import BarChart from "@/components/chart/Chart";
import MobileBar from "@/components/MobileBar";

export default function DashboardPage() {
  return (
    <RequireAuth>
      <Nav/>
      <MobileBar/>
      
      <div>
        <h1>Dashboard sécurisé</h1>
      </div>
    </RequireAuth>
  );
}



// 'use client';
// import { useAuth } from '../contexts/authProvider';
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function DashboardPage() {
//   const { user, loading, logout } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!loading && !user) {
//       router.push('/auth/login');
//     }
//   }, [user, loading]);

//   if (loading || !user) {
//     return <div>Chargement...</div>;
//   }
  

//   return (
//     <main className="dashboard">
//       <h1>Tableau de Bord</h1>
//       <p>Bienvenue, {user.username} ({user.email})</p>
//       <p>Tu es connecté ({user.username})</p>
//       <p>tes infos {JSON.stringify(user)}</p>
//       <button onClick={logout} className="logout-btn">
//         Déconnexion
//       </button>
      
//       {/* Ajoutez ici le contenu de votre dashboard */}
//     </main>
//   );
// }