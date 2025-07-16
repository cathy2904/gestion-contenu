'use client';

import React, { useState } from 'react';

export default function HomePage() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [provider, setProvider] = useState<'claude' | 'openai'>('claude');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!file || !title) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    setLoading(true);
    setResult(null);
    setError('');

    try {
      const res = await fetch(`http://localhost:3000/api/documents/upload?provider=${provider}`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch (err: any) {
      setError('Erreur inattendue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Analyse de Document </h1>

      <input
        type="text"
        className="border w-full mb-2 p-2 rounded"
        placeholder="Titre du document"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="file"
        className="mb-2"
        accept=".pdf,.txt,.doc,.docx,.csv,.xls,.xlsx,.ppt,.pptx"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />

      <div className="mb-4">
        <label className="mr-4">Choisir un fournisseur ia :</label>
        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value as 'claude' | 'openai')}
          className="border px-2 py-1"
        >
          <option value="claude">Claude AI</option>
          <option value="openai">OpenAI GPT-4</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Analyse en cours...' : 'Analyser le document'}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {result && (
        <div className="mt-6 bg-black-100 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Résumé :</h2>
          <p className="whitespace-pre-wrap">{result.summary}</p>

          <h2 className="text-lg font-semibold mt-4 mb-2">Analyse :</h2>
          <p className="whitespace-pre-wrap">{result.analysis}</p>

          <div className="mt-4 flex gap-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Enregistrer
            </button>
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded"
              onClick={() => {
                setResult(null);
              }}
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
