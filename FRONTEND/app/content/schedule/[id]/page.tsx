'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


export default function ScheduleContentPage() {
  const { id } = useParams();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [publicationDate, setPublicationDate] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch(`http://localhost:3000/api/content/${id}`);
      const data = await res.json();
      setTitle(data.title);
      setContent(data.content);
    };
    if (id) fetchContent();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/api/content/schedule/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, publicationDate }),
    });
    router.push('/content');
  };

  const connectSocial = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: 'https://www.facebook.com/v18.0/dialog/oauth',
      instagram: 'https://api.instagram.com/oauth/authorize',
      linkedin: 'https://www.linkedin.com/oauth/v2/authorization',
    };
    window.open(urls[platform], '_blank');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">Planifier la publication</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Titre"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Contenu"
          rows={5}
          required
        />
        <input
          type="datetime-local"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />

         <div className="flex justify-between items-center gap-3 mt-4">
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded"
            onClick={() => connectSocial('facebook')}
          >
            <FaFacebook /> Connecter Facebook
          </button>
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-2 bg-pink-600 text-white rounded"
            onClick={() => connectSocial('instagram')}
          >
            <FaInstagram /> Connecter Instagram
          </button>
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-2 bg-blue-800 text-white rounded"
            onClick={() => connectSocial('linkedin')}
          >
            <FaLinkedin /> Connecter LinkedIn
          </button>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Planifier
        </button>
      </form>
    </div>
  );
}

