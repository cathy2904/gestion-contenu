(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_content_page_tsx_cad974f8._.js", {

"[project]/app/content/page.tsx [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_content_page_tsx_cad974f8._.js.map