// 'use client';
// import { useState } from 'react';
// import axios from 'axios';

// interface GeneratedImage {
//   _id: string;
//   url: string;
//   style: string;
//   prompt: string;
//   createdAt: string;
// }

// export default function ImageGeneratorPage() {
//   const [images, setImages] = useState<GeneratedImage[]>([]);
//   const [prompt, setPrompt] = useState('');
//   const [style, setStyle] = useState('digital painting');
//   const [format, setFormat] = useState<'png' | 'jpg' | 'jpeg'>('png');
//   const [size, setSize] = useState('1024x1024');
//   const [n, setN] = useState(1);
//   //const [images, setImages] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);

//   const generateImage = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post('http://localhost:3000/api/images/generate', {
//         prompt,
//         style,
//         format,
//         size,
//         n,
//         // userId: '1234',
//       });
//       setImages(res.data);
//     } catch (error) {
//       console.error('Erreur de génération :', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Générateur d'image avec GPT</h1>
//       <input
//         type="text"
//         placeholder="Titre / Prompt"
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//         className="border px-4 py-2 mb-4 w-full"
//       />
//       <select
//         value={style}
//         onChange={(e) => setStyle(e.target.value)}
//         className="border px-4 py-2 mb-4 w-full"
//       >
//         <option value="digital painting">Digital Painting</option>
//         <option value="photorealistic">Photorealistic</option>
//         <option value="cartoon">Cartoon</option>
//         <option value="fantasy art">Fantasy Art</option>
//       </select>
//       <select
//         value={size}
//         onChange={(e) => setSize(e.target.value)}
//         className="border px-4 py-2 mb-4 w-full"
//       >
//         <option value="512x512">512x512</option>
//         <option value="1024x1024">1024x1024</option>
//         <option value="1792x1024">1792x1024</option>
//         <option value="1024x1792">1024x1792</option>
//       </select>
//       <select
//         value={format}
//         onChange={(e) => setFormat(e.target.value as any)}
//         className="border px-4 py-2 mb-4 w-full"
//       >
//         <option value="png">PNG</option>
//         <option value="jpg">JPG</option>
//         <option value="jpeg">JPEG</option>
//       </select>
//       <input
//         type="number"
//         min={1}
//         max={5}
//         value={n}
//         onChange={(e) => setN(parseInt(e.target.value))}
//         className="border px-4 py-2 mb-4 w-full"
//       />
//       <button
//         onClick={generateImage}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//         disabled={loading}
//       >
//         {loading ? 'Chargement...' : 'Générer'}
//       </button>

//       {images.length > 0 && (
//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {images.map((img, i) => (
//             <div key={i} className="border p-2 rounded">
//               <img src={img.url} alt={img.prompt} className="w-full rounded" />
//               <a
//                 href={img.url}
//                 download={`image_${i}.${format}`}
//                 className="mt-2 block text-blue-500 underline text-sm"
//               >
//                 Télécharger
//               </a>
//               <p className="text-xs mt-1 text-gray-600">{img.prompt} ({img.style})</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }




'use client';

import { useState } from 'react';
// import RequireAuth from '@/components/RequireAuth';

export default function GenerateImagePage() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('');
  const [provider, setProvider] = useState<'openai' | 'deepseek'>('openai');
  const [size, setSize] = useState('512x512');
  const [n, setN] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSaved, setIsSaved] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setImages([]);

    try {
      const response = await fetch('http://localhost:3000/api/images/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          style,
          provider,
          size,
          n,
          // userId, // Remplace par un vrai userId si besoin
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la génération des images');
      }

      const data = await response.json();
      const urls = data.map((img: any) => img.url); // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setImages(urls);
    } catch (err: any) {  // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setError(err.message || 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  };
  const handleSave = async () => {
  if (images.length === 0) return;

  try {
    const response = await fetch('http://localhost:3000/api/images/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        style,
        provider,
        size,
        n,
        // userId, // Remplace par l'user ID réel
        url: images, // envoyer les URLs générées
      }),
    });

    if (!response.ok) throw new Error('Erreur lors de l’enregistrement');

    setIsSaved(true);
  } catch (err: any) {  // eslint-disable-next-line @typescript-eslint/no-unused-vars
    console.error(err);
    setError(err.message || 'Erreur lors de l’enregistrement');
  }
};

const handleCancel = () => {
  setPrompt('');
  setStyle('');
  setImages([]);
  setError('');
  setIsSaved(false);
};


  return (
    //  <RequireAuth>
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Générateur d’Images IA</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block font-semibold">Prompt</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Style (optionnel)</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold">Fournisseur</label>
          <select
            className="w-full border p-2 rounded"
            value={provider}
            onChange={(e) => setProvider(e.target.value as 'openai' | 'deepseek')}
          >
            <option value="openai">OpenAI</option>
            <option value="deepseek">DeepSeek</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Taille</label>
          <select
            className="w-full border p-2 rounded"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="256x256">256x256</option>
            <option value="512x512">512x512</option>
            <option value="1024x1024">1024x1024</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Nombre d’images</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
            min={1}
            max={10}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Génération...' : 'Générer'}
        </button>
      </form>

      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((url, index) => (
          <img   // eslint-disable-next-line @typescript-eslint/no-unused-vars
            key={index}
            src={url}
            alt={`Generated ${index}`}
            className="rounded shadow"
          />
        ))}
        {images.length > 0 && !isSaved && (
  <div className="mt-6 flex gap-4">
    <button
      onClick={handleSave}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Enregistrer
    </button>
    <button
      onClick={handleCancel}
      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
    >
      Annuler
    </button>
  </div>
)}

{isSaved && <p className="text-green-600 mt-4">Image enregistrée avec succès </p>}
      </div>
    </div>
    // </RequireAuth>
  );
}
