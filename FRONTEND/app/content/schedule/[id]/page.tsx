'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // eslint-disable-next-line @typescript-eslint/no-unused-vars
import { platform } from 'os'; // eslint-disable-next-line @typescript-eslint/no-unused-vars


export default function ScheduleContentPage() {
  const { id } = useParams();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [platform, setPlatform] = useState(''); // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [publicationDate, setPublicationDate] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch(`http://localhost:3000/api/content/${id}`);
      const data = await res.json();
      setTitle(data.title);
      setContent(data.content);
      setPlatform(data.platform)
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
        {/* <input
          type="text"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Platform"
          
        /> */}
        <input
          type="datetime-local"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />

         
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

