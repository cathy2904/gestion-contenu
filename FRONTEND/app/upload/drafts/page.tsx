// 'use client';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// export default function DraftsPage() {
//   const [documents, setDocuments] = useState<any[]>([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/api/documents') // Assure-toi d’avoir une route GET
//       .then(res => res.json())
//       .then(data => setDocuments(data));
//   }, []);

//   // const [documents, setDocuments] = useState<any[]>([]);
//   //   const [isLoading, setIsLoading] = useState(true);
//   //   const [error, setError] = useState<string | null>(null);
//   //   const [totalPages, setTotalPages] = useState(1);
//   //    const [page, setPage] = useState(1);
   
//   //   // const handleDelete = async (id: string) => {
//   //   //   try {
//   //   //     await deleteDocument(id);
//   //   //     setDocuments(documents.filter(document => document._id !== id));
//   //   //   } catch (err) {
//   //   //     setError('Erreur lors de la suppression du post');
//   //   //     console.error(err);
//   //   //   }
//   //   // };

//   //   const fetchDocuments = async (page: number) => {
//   //       try {
//   //         const response = await axios.get(`http://localhost:3000/api/documents?page=${page}&limit=10`, {
//   //           params: {
            
//   //           },
//   //         });
//   //         const data = response.data;
//   //         if (Array.isArray(data.documents)) {
//   //           setDocuments(data.documents);
//   //           setTotalPages(data.totalPages);
//   //         } else {
//   //           setDocuments([]);
//   //           console.error('❌ Données inattendues :', data);
//   //         }
//   //       } catch (error) {
//   //         console.error('❌ Erreur lors du chargement des contenus :', error);
//   //       } finally {
//   //         setIsLoading(false);
//   //       }
//   //     };
  
//   //  useEffect(() => {
//   //      fetchDocuments(page);
//   //    }, [page]);
   
  
//   //   if (isLoading) {
//   //     return (
//   //       <div className="flex justify-center items-center h-64">
//   //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
//   //       </div>
//   //     );
//   //   }
  
//   //   if (error) {
//   //     return (
//   //       <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
//   //         <strong className="font-bold">Erreur ! </strong>
//   //         <span className="block sm:inline">{error}</span>
//   //       </div>
//   //     );
//   //   }
  

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Documents enregistrés</h1>
//       {documents.length === 0 ? (
//         <p>Aucun document trouvé.</p>
//       ) : (
//         <ul className="space-y-4">
//           {documents.map(doc => (
//             <li key={doc._id} className="border p-4 rounded shadow">
//               <h2 className="text-lg font-semibold">{doc.title}</h2>
//               {/* <p className="text-sm text-gray-600">{doc.createdAt}</p> */}
//               <p className="mt-2 truncate max-w-xs" title={doc.summary}>{doc.summary?.slice(0,250)}...</p>
//               <p className="mt-2 truncate max-w-xs" title={doc.analysis}>{doc.analysis?.slice(0,250)}...</p>
              
//             </li>
//           ))}
//         </ul>
        
//       )}
//     </div>
    
//   );
// }



'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DraftsPage() {
  const [docs, setDocs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDocs = async () => {
    const res = await fetch('http://localhost:3000/api/documents');
    const data = await res.json();
    setDocs(data);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:3000/api/documents/${id}`, { method: 'DELETE' });
    fetchDocs();
  };

  useEffect(() => {
    fetchDocs();
  }, []);

   return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Tous les documents</h1>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <div className="overflow-x-auto">
          {/* Version tableau pour les écrans moyens et grands */}
          <table className="min-w-full divide-y divide-gray-200 hidden md:table">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Titre
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Résumé
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Analyse
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {docs.map((doc) => (
                <tr key={doc._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{doc.title}</div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="group relative">
                      <p className="text-gray-500 truncate cursor-default">
                        {doc.summary?.slice(0, 200) || 'Aucun résumé'}...
                      </p>
                      {doc.summary && (
                        <div className="absolute z-50 invisible group-hover:visible bottom-full left-0 mb-2 w-96 p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-gray-600 text-sm">
                          {doc.summary}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="group relative">
                      <p className="text-gray-500 truncate cursor-default">
                        {doc.analysis?.slice(0, 200) || 'Aucune analyse'}...
                      </p>
                      {doc.analysis && (
                        <div className="absolute z-50 invisible group-hover:visible bottom-full left-0 mb-2 w-96 p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-gray-600 text-sm">
                          {doc.analysis}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(doc._id)}
                      className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Version cartes pour les petits écrans */}
          <div className="space-y-4 md:hidden">
            {docs.map((doc) => (
              <div key={doc._id} className="border p-4 rounded shadow">
                <h2 className="font-bold text-lg">{doc.title}</h2>
                
                <div className="mt-2 group relative">
                  <p className="font-semibold">Résumé:</p>
                  <p className="text-gray-600 truncate cursor-default">
                    {doc.summary?.slice(0, 100) || 'Aucun résumé'}...
                  </p>
                  {doc.summary && (
                    <div className="absolute z-50 invisible group-hover:visible bottom-full left-0 mb-2 w-80 p-2 bg-white border border-gray-200 rounded-lg shadow-lg text-gray-600 text-sm">
                      {doc.summary}
                    </div>
                  )}
                </div>
                
                <div className="mt-2 group relative">
                  <p className="font-semibold">Analyse:</p>
                  <p className="text-gray-600 truncate cursor-default">
                    {doc.analysis?.slice(0, 100) || 'Aucune analyse'}...
                  </p>
                  {doc.analysis && (
                    <div className="absolute z-50 invisible group-hover:visible bottom-full left-0 mb-2 w-80 p-2 bg-white border border-gray-200 rounded-lg shadow-lg text-gray-600 text-sm">
                      {doc.analysis}
                    </div>
                  )}
                </div>
                
                <div className="mt-3">
                  <button
                    onClick={() => handleDelete(doc._id)}
                    className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}