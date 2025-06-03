'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

export default function ReadContentPage() {
  const { id } = useParams();
  const [content, setContent] = useState<{
    title: string;
    content: string;
    publicationDate?: string;
    statut?: string;
  } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://localhost:3003/api/content/${id}`);
        setContent(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement du contenu', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [id]);

  if (loading) return <p>Chargement...</p>;

  if (!content) return <p>Contenu non trouvé.</p>;

  

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{content.title}</h1>
      <p className="text-white-700 whitespace-pre-wrap">{content.content}</p>

      <div className="mt-6 text-sm text-white-500">
        <p><strong>Statut :</strong> {content.statut || 'non défini'}</p>
        {content.publicationDate && (
          <p><strong>Date de publication :</strong> {new Date(content.publicationDate).toLocaleString()}</p>
        )}
      </div>
    </div>
  );
}
