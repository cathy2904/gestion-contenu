'use client';
// import { Link } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const handleSubmit = async () => {
    if (!file || !title) return;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    setLoading(true);
    const res = await fetch('http://localhost:3000/api/documents/upload', {
      method: 'POST',
      body: formData,
    });
    const json = await res.json();
    setResponse(json);
    setLoading(false);
  };

  const handleSave = async () => {
    if (!response || !title) return;

    const res = await fetch('http://localhost:3000/api/documents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        content: response.content,
        summary: response.summary,
        analysis: response.analysis,
      }),
    }); // eslint-disable-next-line @typescript-eslint/no-unused-vars

    if (res.ok) {
      alert('Document enregistré avec succès');
      handleReset();
    } else {
      alert('Erreur lors de l’enregistrement');
    }
  };

  const handleReset = () => {
    setFile(null);
    setTitle('');
    setResponse(null);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Uploader un Document PDF</h1>
      <Link 
            href="/drafts"
            className="inline-block mt-4 text-green-600 hover:text-green-800"
          >
            voir la liste
          </Link>
          <Link 
            href="/upload/claude"
            className="inline-block mt-4 text-green-600 hover:text-green-800"
          >
            avec claude
          </Link>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Titre du document"
        className="border p-2 w-full mb-4"
      />
      <input
        type="file"
        accept="application/pdf"
        onChange={e => setFile(e.target.files?.[0] ?? null)}
        className="mb-4"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Envoyer
      </button>

      {loading && <p className="mt-4 text-gray-500">Analyse en cours...</p>}

      {response && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Résumé :</h2>
          <p className="bg-black-100 p-4 rounded">{response.summary}</p>

          <h2 className="text-lg font-semibold mt-4 mb-2">Analyse :</h2>
          <p className="bg-black-100 p-4 rounded">{response.analysis}</p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Enregistrer
            </button>
            <button
              onClick={handleReset}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
