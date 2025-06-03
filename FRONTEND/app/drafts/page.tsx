'use client';
import { useEffect, useState } from 'react';

export default function DraftsPage() {
  const [documents, setDocuments] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3003/api/documents') // Assure-toi d’avoir une route GET
      .then(res => res.json())
      .then(data => setDocuments(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Documents enregistrés</h1>
      {documents.length === 0 ? (
        <p>Aucun document trouvé.</p>
      ) : (
        <ul className="space-y-4">
          {documents.map(doc => (
            <li key={doc._id} className="border p-4 rounded shadow">
              <h2 className="text-lg font-semibold">{doc.title}</h2>
              <p className="text-sm text-gray-600">{doc.createdAt}</p>
              <p className="mt-2" title={doc.summary}>{doc.summary?.slice(0,250)}...</p>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



// 'use client';
// import { useEffect, useState } from 'react';

// export default function DraftsPage() {
//   const [docs, setDocs] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchDocs = async () => {
//     const res = await fetch('http://localhost:3001/documents');
//     const data = await res.json();
//     setDocs(data);
//     setLoading(false);
//   };

//   const handleDelete = async (id: string) => {
//     await fetch(`http://localhost:3001/documents/${id}`, { method: 'DELETE' });
//     fetchDocs();
//   };

//   useEffect(() => {
//     fetchDocs();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Tous les documents</h1>
//       {loading ? <p>Chargement...</p> : (
//         <ul className="space-y-4">
//           {docs.map(doc => (
//             <li key={doc._id} className="border p-4 rounded shadow">
//               <h2 className="font-bold">{doc.title}</h2>
//               <p className="text-sm text-gray-500">Résumé : {doc.summary?.slice(0, 200)}...</p>
//               <div className="mt-2 flex gap-2">
//                 <button onClick={() => handleDelete(doc._id)} className="bg-red-500 text-white px-2 py-1 rounded">Supprimer</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
