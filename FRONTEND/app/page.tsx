"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import BarChart from "@/components/chart/Chart";
import Graph from "@/components/dashboard/Graph";
import Time from "@/components/dashboard/Time";
import Principal from "@/components/Principal";
import RequireAuth from '@/components/RequireAuth';
import Nav from '@/components/Nav';
import DashBar from '@/components/DashBar';
// import ProtectedRoute from '@/app/components/ProtectedRoute';
import ProtectedRoute from '@/components/ProtectedRoute';


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
