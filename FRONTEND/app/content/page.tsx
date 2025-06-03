'use client';

import Principal from "@/components/Principal";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Calendar, Eye, Pencil, Trash2 } from "lucide-react";


export interface Content {
  _id: string;
  title: string;
  content: string;
  style: string;
  length: string;
  provider: string;
  user: string;
  publicationDate: Date;
  statut: 'brouillon' | 'programmé' | 'publié';
  channel: 'linkedin' | 'email' | 'blog';
  createdAt: string;
  updatedAt: string;
}

export default function ContentPage() {
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [user, setUser] = useState('');
  const [style, setStyle] = useState('');
  const [date, setDate] = useState('');
  const [selectedContentId, setSelectedContentId] = useState<string | null>(null);
  const [scheduleDate, setScheduleDate] = useState<string>('');
  const [scheduleTime, setScheduleTime] = useState<string>('');
   const router = useRouter();

  const fetchContents = async (page: number) => {
    try {
      const response = await axios.get(`http://localhost:3003/api/content?page=${page}&limit=10`, {
        params: {
          user: user || undefined,
          style: style || undefined,
          date: date || undefined,
        },
      });
      const data = response.data;
      if (Array.isArray(data.contents)) {
        setContents(data.contents);
        setTotalPages(data.totalPages);
      } else {
        setContents([]);
        console.error('❌ Données inattendues :', data);
      }
    } catch (error) {
      console.error('❌ Erreur lors du chargement des contenus :', error);
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    fetchContents(page);
  }, [page, user, style, date]);

  const handlePublish = async (id: string) => {
    try {
      await axios.put(`http://localhost:3003/api/content/${id}/publish`);
      fetchContents(page);
    } catch (error) {
      console.error("Erreur lors de la publication :", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3003/api/content/${id}`);
      fetchContents(page);
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  const handleSchedule = async () => {
    if (!selectedContentId || !scheduleDate || !scheduleTime) return;
    const fullDate = new Date(`${scheduleDate}T${scheduleTime}`);
    try {
      await axios.put(`http://localhost:3003/api/content/schedule/${selectedContentId}`, {
        schedule: fullDate,
      });
      setSelectedContentId(null);
      setScheduleDate('');
      setScheduleTime('');
      fetchContents(page);
    } catch (error) {
      console.error("Erreur lors de la planification :", error);
    }
  };

  return (
    <Principal titre="Contents">
      <h1 className="text-2xl font-bold mb-4">Liste des Contenus</h1>
      <Link href="/content/create" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
         Créer un contenu
      </Link>
      <div className="my-4 flex gap-4">
        <div>filtrage par style et date</div>
        {/* <input type="text" placeholder="ID utilisateur" value={user} onChange={(e) => setUser(e.target.value)} className="border p-2" /> */}
        <select value={style} onChange={(e) => setStyle(e.target.value)} className="border p-2">
          <option value="">Tous les styles</option>
          <option value="standard">Standard</option>
          <option value="humour">Humour</option>
          <option value="marketing">Marketing</option>
          
          
       
        <option value="formal">Formel</option>
             <option value="casual">Décontracté</option>
             <option value="professional">Professionnel</option>
             <option value="academic">Académique</option>
             <option value="creative">Créatif</option>
             <option value="persuasive">Persuasif</option>
             <option value="informative">Informatif</option>
        </select>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2" />
      </div>

      {loading ? <p>Chargement...</p> : contents.length === 0 ? <p>Aucun contenu trouvé.</p> : (
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-black-200">
              <th className="border px-2 py-2">Titre</th>
              <th className="border px-2 py-2">Fournisseur</th>
              <th className="border px-1 py-2">Style</th>
              <th className="border px-2 py-2">Longueur</th>
              <th className="border px-2 py-2">Contenu</th>
              <th className="border px-2 py-2">Statut</th>
              <th className="border px-2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((item) => (
              <tr key={item._id} className="hover:bg-black-50">
                <td className="border px-2 py-2">{item.title}</td>
                <td className="border px-2 py-2">{item.provider}</td>
                <td className="border px-1 py-2">{item.style}</td>
                <td className="border px-2 py-2">{item.length}</td>
                <td className="border px-2 py-2 truncate max-w-xs" title={item.content}>{item.content.slice(0, 100)}...</td>
                <td className="border px-2 py-2">{item.statut}</td>
                <td className="border px-2 py-2 flex gap-2">
                  {/* <button onClick={() => router.push(`/content/schedule/${item._id}`)} className="bg-yellow-500 text-white px-2 py-1 rounded">Plan</button> */}
                  
                  {/* <button
  onClick={() => {
    setSelectedContentId(item._id);
    const selectedItem = contents.find((c) => c._id === item._id);
    if (selectedItem?.schedule) {
      const date = new Date(selectedItem.schedule);
      setScheduleDate(date.toISOString().split('T')[0]);
      setScheduleTime(date.toTimeString().slice(0, 5));
    } else {
      setScheduleDate('');
      setScheduleTime('');
    }
  }}
  className="bg-yellow-500 text-white px-2 py-1 rounded"
>
  fPlanifier
</button> */}

                  {/* <button onClick={() => handlePublish(item._id)} className="bg-green-500 text-white px-2 py-1 rounded">Publier</button>
                  <button onClick={() => handleDelete(item._id)} className="bg-red-500 text-white px-2 py-1 rounded">Supprimer</button> */}
                                  <Link href={`/content/read/${item._id}`}>
                <Button variant="ghost" className="hover:bg-blue-100 text-blue-600">
                  <Eye className="w-5 h-5" />
                </Button>
              </Link>
              <Link href={`/content/edit/${item._id}`}>
                <Button variant="ghost" className="hover:bg-yellow-100 text-yellow-600">
                  <Pencil className="w-5 h-5" />
                </Button>
              </Link>
              <Link href={`/content/schedule/${item._id}`}>
                <Button variant="ghost" className="hover:bg-green-100 text-green-600">
                  <Calendar className="w-5 h-5" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                onClick={() => handleDelete(item._id)}
                className="hover:bg-red-100 text-red-600"
              >
                <Trash2 className="w-5 h-5" />
              </Button>
                                  
                                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedContentId && (
        <div className="my-4 p-4 border rounded bg-black-100">
          <h3 className="text-lg font-bold mb-2">Planifier la publication</h3>
          <input type="date" value={scheduleDate} onChange={(e) => setScheduleDate(e.target.value)} className="border p-2 mr-2" />
          <input type="time" value={scheduleTime} onChange={(e) => setScheduleTime(e.target.value)} className="border p-2 mr-2" />
          <button onClick={handleSchedule} className="bg-blue-600 text-white px-4 py-2 rounded">Confirmer</button>
          <button onClick={() => setSelectedContentId(null)} className="ml-2 bg-black-500 text-white px-4 py-2 rounded">Annuler</button>
        </div>
      )}

      <div className="flex justify-center mt-4 gap-4">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1} className="px-4 py-2 bg-black-300 rounded disabled:opacity-50">Précédent</button>
        <span className="px-4 py-2">Page {page} / {totalPages}</span>
        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">Suivant</button>
      </div>
    </Principal>
  );
}

// 'use client';
// import Principal from "@/components/Principal";
// import React, { useEffect, useState } from 'react';

// // import { Content } from "./types/content";

// import { fetchContents } from "./api/route";
// import ContentList from "../components/ContentList";
// import Link from "next/link";
// import axios from "axios";

// export interface Content {
//   _id: string;
//   title: string;
//   content: string;
//   style: string;
//   length: string;
//   provider: string;
//   user: string;
//    schedule: Date,
//    statut: 'brouillon' | 'programmé' | 'publié';
//   channel: 'linkedin' | 'email' | 'blog';

//   createdAt: string;
//   updatedAt: string;
// }

// export default function ContentPage() {
//   const [contents, setContents] = useState<Content[]>([])
//   const [loading, setLoading] = useState(true)
//   const [page, setPage] = useState(1);
// const [totalPages, setTotalPages] = useState(1);
// // plannification
// const [statut, setStatut] = useState('');
// // const [statut, setStatut] = useState<'brouillon' | 'planifié' | 'publié'>('brouillon');

//   // Filtres
//   const [user, setUser] = useState('');
//   const [style, setStyle] = useState('');
//   const [date, setDate] = useState('');
//   // const [selectedStyle, setSelectedStyle] = useState('');



//   const fetchContents = async (page: number) => {
//     try {
//       const response = await axios.get('http://localhost:3003/api/content?page=${page}&limit=10',  {
//         params: {
//           page,
//           limit: 10,
//           user: user || undefined,
//           style: style || undefined,
//           date: date || undefined,
//            statut: statut || undefined,
//         },
        
//     })
    
//       // setContents(response.data)
//       const data = response.data
//      if (Array.isArray(data.contents)) {
//         setContents(data.contents);
//         setTotalPages(data.totalPages);
//       } else {
//         setContents([]);
//         console.error('❌ Données inattendues :', data);
//       }
//      } catch (error) {
//       console.error('❌ Erreur lors du chargement des contenus :', error)
//     } finally {
//       setLoading(false)
//     }
//   }

  
//   useEffect(() => {
//     fetchContents(page)
//   }, [page, user, style, date])

//   const handlePublish = async (id: string) => {
//     try {
//       await axios.put(`http://localhost:3003/api/content/${id}/publish`);
//       fetchContents(page);
//     } catch (error) {
//       console.error("Erreur lors de la publication :", error);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       await axios.delete(`http://localhost:3003/api/content/${id}`);
//       fetchContents(page);
//     } catch (error) {
//       console.error("Erreur lors de la suppression :", error);
//     }
//   };

//   return (
// <Principal titre="Contents">
//       <h1>Content Home</h1>

//       <div>
//       <Link
//           href="/content/create"
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//         >
//           ➕ Créer un contenu
//         </Link>
//       {/* <h1>Liste des contenus</h1>
//       <ContentList contents={content} /> */}
//       <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4"> Liste des Contenus Générés</h1>
//       {/* Filtres */}
//       <div className="flex gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="ID utilisateur"
//           value={user}
//           onChange={(e) => setUser(e.target.value)}
//           className="border p-2"
//         />
//         <select
//           value={style}
//           onChange={(e) => setStyle(e.target.value)}
//           className="border p-2"
//         >
//           <option value="">Tous les styles</option>
//           <option value="{{style}}"></option>
//          <option value="standard">Style standard</option>
//           <option value="humour">Style humour</option>
//           <option value="marketing">Style marketing</option>
//           <option value="formal">Formel</option>
//           <option value="casual">Décontracté</option>
//           <option value="professional">Professionnel</option>
//           <option value="academic">Académique</option>
//           <option value="creative">Créatif</option>
//           <option value="persuasive">Persuasif</option>
//           <option value="informative">Informatif</option>
//         </select>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="border p-2"
//         />
//       </div>


//       {loading ? (
//         <p>Chargement en cours...</p>
//       ) : contents.length === 0 ? (
//         <p>Aucun contenu trouvé.</p>
//       ) : (
//         <table className="w-full table-auto border border-gray-300">
//           <thead>
//             <tr className="bg-black-100">
//               <th className="border px-2 py-2">Titre</th>
//               <th className="border px-2 py-2">Fournisseur</th>
//               <th className="border px-2 py-2">Style</th>
//               <th className="border px-2 py-2">Longueur</th>
//               {/* <th className="border px-4 py-2">Date</th> */}
//               <th className="border px-4 py-2">Contenu</th>
//               <th className="border px-4 py-2">Status</th>
//               <th className="border px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contents.map((item) => (
//               <tr key={item._id} className="hover:bg-black-50">
//                 <td className="border px-2 py-2">{item.title}</td>
//                 <td className="border px-2 py-2">{item.provider}</td>
//                 <td className="border px-2 py-2">{item.style}</td>
//                 <td className="border px-2 py-2">{item.length}</td>
//                  <td className="border px-4 py-2 max-w-sm overflow-hidden text-ellipsis whitespace-nowrap" title={item.content}>
//                   {item.content?.slice(0,100) }...
//                 </td>
//                 <td className="border px-4 py-2">{item.statut}</td>
//                 {/* <td>
//                   <select
//                     value={statut}
//                     onChange={(e) => setStatut(e.target.value)}
//                     className="border p-2"
//                   >
//                     <option value="">Tous les statuts</option>
//                     <option value=""></option>
//                     <option value="draft">Brouillon</option>
//                     <option value="scheduled">Programmé</option>
//                     <option value="published">Publié</option>
//                   </select>
//                 </td> */}
//                  <td className="border px-2 py-2 flex gap-2">
//                       <button
//                         onClick={() => handlePublish(item._id)}
//                         className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
//                       >
//                         Publier
//                       </button>
//                       <button
//                         onClick={() => handleDelete(item._id)}
//                         className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//                       >
//                         Supprimer
//                       </button>
//                     </td>
//                 {/* <td className="border px-4 py-2">
//                   {new Date(item.createdAt).toLocaleDateString()}
//                 </td> */}
                
//               </tr>
//             ))}
//           </tbody>
//           <button
//     onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
//     disabled={page === 1}
//     className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//   >
//     Précédent
//   </button>
//   <span className="px-4 py-2">Page {page} / {totalPages}</span>
//   <button
//     onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
//     disabled={page === totalPages}
//     className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//   >
//     Suivant
//   </button>
//         </table>
//       )}
//     </div>
  
//     </div>
//     </Principal>  )
// }