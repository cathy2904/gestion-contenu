'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/app/components/LoadingSpinner';

export default function CreateContentPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [style, setStyle] = useState('professional');
  const [length, setLength] = useState('500'); // par défaut 500 mots
  const [provider, setProvider] = useState('OPENAI');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:3003/api/content/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          style,
          length: Number(length), // conversion explicite
          provider: provider,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || 'Erreur lors de la génération du contenu');
      }

      const saved = await res.json();
      router.push(`/content/read/${saved._id}`);
    } catch (err: any) {
      setError(err.message || 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Créer un contenu</h1>
      <form onSubmit={handleGenerate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Titre</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Style</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="professional">Professionnel</option>
            <option value="casual">Décontracté</option>
            <option value="enthusiastic">Enthousiaste</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Longueur (en mots)</label>
          <select
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="300">300 mots</option>
            <option value="500">500 mots</option>
            <option value="800">800 mots</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Modèle IA</label>
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="OPENAI">OpenAI</option>
            <option value="DEEPSEEK">DeepSeek</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? <LoadingSpinner /> : 'Générer le contenu'}
        </button>

        {error && <p className="text-red-500">❌ {error}</p>}
      </form>
    </div>
  );
}
