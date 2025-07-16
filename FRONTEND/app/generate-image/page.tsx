// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// interface GeneratedImage {
//   _id: string;
//   prompt: string;
//   style?: string;
//   provider: string;
//   n: number;
//   url: string[] | string; // Tu gères un tableau d'urls ou une url unique
//   createdAt: string;
// }

// export default function AdminImagesPage() {
//   const [images, setImages] = useState<GeneratedImage[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const res = await fetch('http://localhost:3000/api/images');
//         if (!res.ok) throw new Error('Erreur lors du chargement des images');
//         const data = await res.json();
//         setImages(data);
//       } catch (err: any) {
//         setError(err.message || 'Erreur inconnue');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Toutes les Images Générées</h1>
//         <Link href="/generate-image/create" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           + Créer une nouvelle image
//         </Link>
//       </div>

//       {loading && <p>Chargement...</p>}
//       {error && <p className="text-red-600">{error}</p>}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {images.map((img) => (
//           <div key={img._id} className="border rounded p-4 shadow bg-gray-800">
//             <div className="text-sm text-white space-y-1">
//               <p><strong>Prompt :</strong> {img.prompt}</p>
//               {img.style && <p><strong>Style :</strong> {img.style}</p>}
//               <p><strong>Fournisseur ia :</strong> {img.provider}</p>
//               <p><strong>Nombre :</strong> {img.n}</p>
//             </div>
//             <div className="grid grid-cols-2 gap-2 mt-3">
//               {Array.isArray(img.url) && img.url.length > 0 ? (
//                 img.url.map((url, index) => (
//                   <img
//                     key={index}
//                     src={url}
//                     alt={`Image générée ${index + 1}`}
//                     className="w-full h-auto rounded"
//                   />
//                 ))
//               ) : (
//                 <p className="text-sm text-gray-500">Aucune image disponible</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// 'use client';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// interface GeneratedImage {
//   _id: string;
//   url: string;
//   prompt: string;
//   createdAt: string;
// }

// export default function ImagesListPage() {
//   const [images, setImages] = useState<GeneratedImage[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const res = await axios.get('http://localhost:3000/api/images');
//         setImages(res.data);
//       } catch (err) {
//         console.error('Erreur de chargement des images :', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Images générées</h1>
//       {loading ? (
//         <p>Chargement...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {images.map((img) => (
//             <div key={img._id} className="border rounded p-4 shadow">
//               <img
//                 src={img.url}
//                 alt={img.prompt}
//                 className="w-full h-auto rounded mb-2"
//               />
//               <p className="text-sm text-gray-600 mb-1">
//                 <strong>Prompt :</strong> {img.prompt}
//               </p>
//               <p className="text-xs text-gray-500">
//                 Généré le : {new Date(img.createdAt).toLocaleString()}
//               </p>
//               <a
//                 href={img.url}
//                 download
//                 className="inline-block mt-2 text-blue-600 hover:underline text-sm"
//               >
//                 Télécharger
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
// import RequireAuth from '@/components/RequireAuth';

interface GeneratedImage {
  _id: string;
  prompt: string;
  style?: string;
  provider: string;
//   size: string;
  n: number;
  url: string[] | string;
//   userId: string;
  createdAt: string;
}

export default function AdminImagesPage() {
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/images');
        if (!res.ok) throw new Error('Erreur lors du chargement des images');
        const data = await res.json();
        setImages(data);
      } catch (err: any) { // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setError(err.message || 'Erreur inconnue');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Toutes les Images Générées</h1>
          <Link
            href="/generate-image/create"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Créer une nouvelle image
          </Link>
        </div>

        {loading && <p>Chargement...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img._id} className="border rounded p-4 shadow bg-gray">
              <div className="text-sm text-white-700 space-y-1">
                {/* <p><strong>Utilisateur :</strong> {img.userId}</p> */}
                <p><strong>Prompt :</strong> {img.prompt}</p>
                {img.style && <p><strong>Style :</strong> {img.style}</p>}
                {/* <p><strong>Taille :</strong> {img.size}</p> */}
                <p><strong>Fournisseur ia :</strong> {img.provider}</p>
                {/* <p><strong>Nombre :</strong> {img.n}</p> */}
                
                {/* <img src={img.url} alt="Illustration" className="max-w-md rounded-md mb-4" /> */}
                
                {/* <p><strong>Date :</strong> {new Date(img.createdAt).toLocaleString()}</p> */}
              </div>
              
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        {Array.isArray(img.url) && img.url.length > 0 ? (
                         img.url.map((url, index) => (
                        <img  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        key={index}
                        src={url}
                        alt={`Image générée ${index + 1}`}
                        className="w-full h-auto rounded"
                        />
                         ))
                        ) : (
                         <p className="text-sm text-gray-500">Aucune image disponible</p>
                        )}


                    </div>
              </div>
            
          ))}
        </div>
      </div>
    
  );
}
