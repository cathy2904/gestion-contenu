"use client";
import { useRouter } from 'next/navigation'; // eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BarChart from "@/components/chart/Chart"; // eslint-disable-next-line @typescript-eslint/no-unused-vars
import Graph from "@/components/dashboard/Graph";
import Time from "@/components/dashboard/Time"; // eslint-disable-next-line @typescript-eslint/no-unused-vars
import Principal from "@/components/Principal";
import RequireAuth from '@/components/RequireAuth';
import Nav from '@/components/Nav'; // eslint-disable-next-line @typescript-eslint/no-unused-vars
import DashBar from '@/components/DashBar'; // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import ProtectedRoute from '@/app/components/ProtectedRoute';
import ProtectedRoute from '@/components/ProtectedRoute'; // eslint-disable-next-line @typescript-eslint/no-unused-vars


export default  function Home() {
  // const router = useRouter()

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (!token) {
  //     router.push('/auth/login')
  //   }
  // }, [])
 

  return (
    <RequireAuth>
    <Principal titre="Dashboard">
      {/* <Nav/> */}
     
     
      {/* <h1 className="p-4 text-xl">Dashboard</h1> */}
      
            {/* <h1>Bienvenue sur la page d’accueil</h1> */}
          
      <Graph />
      <h1>BIENVENUE</h1>
      {/* <Time /> */}
      {/* <BarChart /> */}

      {/* <DashBar/> */}
    </Principal>
    </RequireAuth>
  );
}

// import Posts from './post/page'
// export default function Home() {
//   return (
//         <Posts />
//   )
// }
