'use client';

import { useState } from 'react';
import RequireAuth from '@/components/RequireAuth';

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
      const response = await fetch('http://localhost:3003/api/images/generate', {
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
      const urls = data.map((img: any) => img.url);
      setImages(urls);
    } catch (err: any) {
      setError(err.message || 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  };
  const handleSave = async () => {
  if (images.length === 0) return;

  try {
    const response = await fetch('http://localhost:3003/api/images/save', {
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
  } catch (err: any) {
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
     <RequireAuth>
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
          <img
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
    </RequireAuth>
  );
}
