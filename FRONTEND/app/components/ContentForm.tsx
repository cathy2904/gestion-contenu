'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

interface Content {
  _id: string
  title: string
  provider: string
  style: string
  length: string
  content: string
  createdAt: string
}

export default function ContentListPage() {
  const [contents, setContents] = useState<Content[]>([])
  const [loading, setLoading] = useState(true)

  const fetchContents = async () => {
    try {
      const response = await axios.get('http://localhost:3003/api/content')
      setContents(response.data)
    } catch (error) {
      console.error('❌ Erreur lors du chargement des contenus :', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchContents()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📝 Liste des Contenus Générés</h1>
      {loading ? (
        <p>Chargement en cours...</p>
      ) : contents.length === 0 ? (
        <p>Aucun contenu trouvé.</p>
      ) : (
        <table className="w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Titre</th>
              <th className="border px-4 py-2">Fournisseur</th>
              <th className="border px-4 py-2">Style</th>
              <th className="border px-4 py-2">Longueur</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Contenu</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.title}</td>
                <td className="border px-4 py-2">{item.provider}</td>
                <td className="border px-4 py-2">{item.style}</td>
                <td className="border px-4 py-2">{item.length}</td>
                <td className="border px-4 py-2">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2 max-w-sm overflow-hidden text-ellipsis">
                  {item.content.slice(0, 100)}...
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}



// import { useState, FormEvent } from 'react';

// interface ContentFormProps {
//   onSubmit: (data: {
//     title: string;
//     provider: string;
//     style: string;
//     length: string;
//   }) => void;
//   isLoading: boolean;
// }

// export default function ContentForm({ onSubmit, isLoading }: ContentFormProps) {
//   const [title, setTitle] = useState('');
//   const [provider, setProvider] = useState('gpt');
//   const [style, setStyle] = useState('');
//   const [length, setLength] = useState('medium');

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     onSubmit({
//       title,
//       provider,
//       style,
//       length,
//     });
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
//             Titre / Sujet *
//           </label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Entrez le titre ou sujet du contenu à générer"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="provider" className="block text-gray-700 font-bold mb-2">
//             Fournisseur d'IA *
//           </label>
//           <select
//             id="provider"
//             value={provider}
//             onChange={(e) => setProvider(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           >
//             <option value="gpt">GPT (OpenAI)</option>
//             <option value="deepseek">DeepSeek</option>
//             <option value="claude">Claude AI</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="style" className="block text-gray-700 font-bold mb-2">
//             Style d'écriture
//           </label>
//           <select
//             id="style"
//             value={style}
//             onChange={(e) => setStyle(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           >
//             <option value="">Standard</option>
//             <option value="formal">Formel</option>
//             <option value="casual">Décontracté</option>
//             <option value="professional">Professionnel</option>
//             <option value="academic">Académique</option>
//             <option value="creative">Créatif</option>
//             <option value="persuasive">Persuasif</option>
//             <option value="informative">Informatif</option>
//           </select>
//         </div>

//         <div className="mb-6">
//           <label htmlFor="length" className="block text-gray-700 font-bold mb-2">
//             Longueur du texte
//           </label>
//           <select
//             id="length"
//             value={length}
//             onChange={(e) => setLength(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           >
//             <option value="short">Court (100-200 mots)</option>
//             <option value="medium">Moyen (300-500 mots)</option>
//             <option value="long">Long (600-1000 mots)</option>
//             <option value="very-long">Très long (1000+ mots)</option>
//           </select>
//         </div>

//         <div className="flex items-center justify-center">
//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline w-full ${
//               isLoading ? 'opacity-50 cursor-not-allowed' : ''
//             }`}
//           >
//             {isLoading ? 'Génération en cours...' : 'Générer le contenu'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { Content } from '../content/types/content';
// import { createContent, fetchContentById, updateContent } from '../content/api/api';


// interface ContentFormProps {
//   contentId?: string;
// }

// const ContentForm: React.FC<ContentFormProps> = ({ contentId }) => {
//   const [title, setTitle] = useState('');
//   const [style, setStyle] = useState('');
//   const [length, setLength] = useState(0);
//   const router = useRouter();

//   useEffect(() => {
//     if (contentId) {
//       const getContent = async () => {
//         const data = await fetchContentById(contentId);
//         setTitle(data.title);
//         setStyle(data.style);
//         setLength(data.length);
//       };
//       getContent();
//     }
//   }, [contentId]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const contentData = { title, style, length };
//     if (contentId) {
//       await updateContent(contentId, contentData);
//     } else {
//       await createContent(contentData);
//     }
//     router.push('/content');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Titre:</label>
//         <input value={title} onChange={(e) => setTitle(e.target.value)} required />
//       </div>
//       <div>
//         <label>Style:</label>
//         <input value={style} onChange={(e) => setStyle(e.target.value)} />
//       </div>
//       <div>
//         <label>Longueur:</label>
//         <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} />
//       </div>
//       <button type="submit">{contentId ? 'Mettre à jour' : 'Créer'}</button>
//     </form>
//   );
// };

// export default ContentForm;
