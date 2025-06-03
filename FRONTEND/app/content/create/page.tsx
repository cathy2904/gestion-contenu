'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Editor from '@/app/components/Editor';

interface Content {
  _id: string;
  title: string;
  style: string;
  length: string;
  provider: string;
  content: string;
  createdAt: string;
}

export default function Home() {
  const [title, setTitle] = useState('');
  const [style, setStyle] = useState('standard');
  const [length, setLength] = useState('medium');
  const [provider, setProvider] = useState<'gpt-4' | 'deepseek'>('gpt-4')
  const [generatedContent, setGeneratedContent] = useState('<p>Contenu initial généré</p>');
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // const [html, setHtml] = useState("<p>Contenu initial généré par GPT</p>");


  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:3003/api/content/generate', {
        title,
        style,
        length,
        provider,
      });

      setGeneratedContent(response.data.content);
    } catch (err) {
      console.error('Erreur génération :', err);
      setError('Erreur lors de la génération');
    } finally {
      setLoading(false);
    }
  };

  
  const saveContent = async () => {
    try {
      console.log('tentative d enregistrement')
      const response  = await axios.post('http://localhost:3003/api/content', {
        title,
        style,
        length,
        provider,
        content: generatedContent,
        
      });
     console.log("✅ Enregistrement réussi :", response.data);
    alert("Contenu enregistré avec succès !");
    fetchContents(); // rafraîchit la liste
  } catch (error) {
    console.error(" Erreur enregistrement :", error);
    alert("Erreur lors de l'enregistrement.");
  }
  };

  const fetchContents = async () => {
    try {
      const res = await axios.get('http://localhost:3003/api/content');
      setContents(res.data);
    } catch (err) {
      console.error('Erreur lors du fetch des contenus :', err);
    }
  };

  useEffect(() => {
    fetchContents();
  }, []);


  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Générateur de contenu IA</h1>

      <div className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          type="text"
          placeholder="Titre de l'article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select className="w-full border p-2 rounded" value={style} onChange={(e) => setStyle(e.target.value)}>
          <option value="standard">Style standard</option>
          <option value="marketing">Style marketing</option>
          <option value="humour">Style humour</option>
        <option value="formal">Formel</option>
             <option value="casual">Décontracté</option>
             <option value="professional">Professionnel</option>
             <option value="academic">Académique</option>
             <option value="creative">Créatif</option>
             <option value="persuasive">Persuasif</option>
             <option value="informative">Informatif</option>
        </select>

        <select className="w-full border p-2 rounded" value={length} onChange={(e) => setLength(e.target.value)}>
          <option value="short">un text Court</option>
          <option value="medium">un texteMoyen</option>
          <option value="long"> un texte Long</option>
        </select>

        <select className="w-full border p-2 rounded" value={provider} 
        onChange={(e) => setProvider(e.target.value as 'gpt-4' | 'deepseek')}>
          <option value="gpt-4">GPT-4</option>
          <option value="gpt-4o">GPT-4o</option>
          <option value="deepseek">DeepSeek</option>
        </select>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? 'Génération...' : 'Générer'}
        </button>
      </div>

      {generatedContent && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Contenu généré :</h2>
          <Editor content={generatedContent} onUpdate={setGeneratedContent} />
          {/* <textarea
            className="w-full border p-2 rounded min-h-[200px]"
            value={generatedContent}
            readOnly
          /> */}
          
          <button
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
            onClick={saveContent} disabled={!generatedContent} 
          >
            Enregistrer
          </button>
        </div>
      )}

      
    </main>
  );
}



// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// type ContentItem = {
//   _id: string;
//   title: string;
//   style: string;
//   length: string;
//   provider: string;
//   content: string;
//   createdAt: string;
// };

// export default function ContentPage() {
//   const [title, setTitle] = useState('');
//   const [style, setStyle] = useState('informatif');
//   const [length, setLength] = useState('moyenne');
//   const [provider, setProvider] = useState('gpt-4');
//   const [generated, setGenerated] = useState<ContentItem | null>(null);
//   const [allContents, setAllContents] = useState<ContentItem[]>([]);
//   const [loading, setLoading] = useState(false);

//   const handleGenerate = async () => {
//     setLoading(true);
//     setGenerated(null);
//     try {
//       const response = await axios.post('http://localhost:3003/api/content/generate', {
//         title,
//         style,
//         length,
//         provider,
//       });
//       setGenerated(response.data);
//       fetchContents(); // refresh list
//     } catch (error) {
//       alert('Erreur lors de la génération');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchContents = async () => {
//     const res = await axios.get('http://localhost:3003/api/content');
//     setAllContents(res.data);
//   };

//   useEffect(() => {
//     fetchContents();
//   }, []);

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Génération d'article avec IA</h1>

//       <div className="space-y-4 border p-4 rounded-lg shadow">
//         <input
//           type="text"
//           placeholder="Titre de l'article"
//           className="w-full border p-2 rounded"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <div className="flex gap-4">
//           <select value={style} onChange={(e) => setStyle(e.target.value)} className="border p-2 rounded w-1/3">
//             <option value="informatif">Informatif</option>
//             <option value="créatif">Créatif</option>
//             <option value="persuasif">Persuasif</option>
//           </select>

//           <select value={length} onChange={(e) => setLength(e.target.value)} className="border p-2 rounded w-1/3">
//             <option value="courte">Courte</option>
//             <option value="moyenne">Moyenne</option>
//             <option value="longue">Longue</option>
//           </select>

//           <select value={provider} onChange={(e) => setProvider(e.target.value)} className="border p-2 rounded w-1/3">
//             <option value="gpt-4">GPT-4</option>
//             <option value="gpt-4o">GPT-4o</option>
//             <option value="deepseek">DeepSeek</option>
//           </select>
//         </div>

//         <button
//           onClick={handleGenerate}
//           disabled={loading || !title}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           {loading ? 'Génération en cours...' : 'Générer et Enregistrer'}
//         </button>
//       </div>

//       {generated && (
//         <div className="mt-6 border p-4 rounded shadow bg-green-50">
//           <h2 className="font-semibold text-lg">Article généré</h2>
//           <p className="mt-2 whitespace-pre-line">{generated.content}</p>
//         </div>
//       )}

//       <div className="mt-10">
//         <h2 className="text-xl font-semibold mb-2">Articles enregistrés</h2>
//         {allContents.length === 0 ? (
//           <p>Aucun article enregistré.</p>
//         ) : (
//           <ul className="space-y-4">
//             {allContents.map((item) => (
//               <li key={item._id} className="border p-4 rounded shadow">
//                 <p><strong>Titre :</strong> {item.title}</p>
//                 <p><strong>Style :</strong> {item.style}</p>
//                 <p><strong>Longueur :</strong> {item.length}</p>
//                 <p><strong>Fournisseur :</strong> {item.provider}</p>
//                 <p className="mt-2 whitespace-pre-line"><strong>Contenu :</strong> {item.content}</p>
//                 <p className="text-sm text-gray-500 mt-1">Créé le : {new Date(item.createdAt).toLocaleString()}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }


