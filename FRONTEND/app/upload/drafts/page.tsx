'use client';
import { useEffect, useState } from 'react';
import axios from 'axios'; // eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from 'next/link';
export default function DraftsPage() {
  const [docs, setDocs] = useState<any[]>([]); // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      <Link 
            href="/upload"
            className="inline-block mt-4 text-green-600 hover:text-green-800"
          >
            Analyser
          </Link>
          
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <div className="overflow-x-auto">
          {/* Version tableau pour les écrans moyens et grands */}
          <table className="min-w-full divide-y divide-black-200 hidden md:table">
            <thead className="bg-black-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                  Titre
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                  Résumé
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                  Analyse
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-black divide-y divide-gray-200">
              {docs.map((doc) => (
                <tr key={doc._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-white-900">{doc.title}</div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="group relative">
                      <p className="text-white-500 truncate cursor-default">
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
                      <p className="text-white-500 truncate cursor-default">
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