'use client';
import RequireAuth from "@/components/RequireAuth";
import Nav from "@/components/Nav";
// import BarChart from "@/components/chart/Chart";
import MobileBar from "@/components/MobileBar";
import { useEffect, useState } from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c', '#d0ed57'];


export default function DashboardPage() {

 const [stats, setStats] = useState<any>(null);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [dateFilter, setDateFilter] = useState<string>('');

  useEffect(() => {
  const queryParams = new URLSearchParams();
  if (statusFilter) queryParams.append("statut", statusFilter);
  if (dateFilter) queryParams.append("date", dateFilter);

  fetch(`http://localhost:3000/api/content/stats?${queryParams.toString()}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Données reçues:", data); 
      setStats(data);
    })
    .catch(console.error);
}, [statusFilter, dateFilter]);


  if (!stats) return <p className="p-6 text-lg">Chargement des statistiques...</p>;

  return (
    // <RequireAuth>
    //   <Nav/>
    //   <MobileBar/>
      
    //   <div>
    //     <h1>Dashboard sécurisé</h1>
    //   </div>
    // </RequireAuth>

      <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard des contenus</h1>

      <div className="flex gap-4 mb-6">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">Tous les statuts</option>
          <option value="brouillon">Brouillon</option>
          <option value="programmé">Programmé</option>
          <option value="publié">Publié</option>
        </select>

        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border rounded p-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-black p-6 shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Total des contenus</h2>
          <p className="text-4xl font-bold text-indigo-600">{stats.total}</p>
        </div>

        <div className="bg-black p-6 shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Contenus par statut</h2>
          {(stats.byStatus ?? []).length > 0 ? (
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                dataKey="count"
                data={stats.byStatus}
                nameKey="_id"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {(stats.byStatus ?? []).map((item: { _id: string, count: number }, index: number) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          ) : (
            <p>Aucune donnée pour ce statut.</p>
          )}
        </div>
      </div>

      <div className="bg-black p-6 shadow rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Contenus par réseau social</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stats.byPlatform ?? []}>
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
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