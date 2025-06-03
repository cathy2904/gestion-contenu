'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function ScheduleContentPage() {
  const { id } = useParams();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [publicationDate, setPublicationDate] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch(`http://localhost:3003/api/content/${id}`);
      const data = await res.json();
      setTitle(data.title);
      setContent(data.content);
    };
    if (id) fetchContent();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`http://localhost:3003/api/content/schedule/${id}`, {
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


// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { Eye, Pencil, Calendar, Trash2 } from 'lucide-react';

// export interface Content {
//   _id: string;
//   title: string;
//   content: string;
//   user: string;
//   publicationDate: Date;
//   statut: 'brouillon' | 'programmé' | 'publié';

// }

// export default function ScheduleContentPage() {
//   const { id } = useParams();
//   const router = useRouter();
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [publicationDate, setPublicationDate] = useState("");

//   useEffect(() => {
//     fetch(`http://localhost:3003/api/content/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setTitle(data.title);
//         setContent(data.content);
//         if (data.publicationDate) {
//           setPublicationDate(new Date(data.publicationDate).toISOString().slice(0, 16));
//         }
//       });
//   }, [id]);

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     await fetch(`http://localhost:3003/api/content/schedule/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ 
//         title,
//         content,
//         publicationDate }),
//     });
//     router.push("/content");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Planifier la publication</h1>
//       <p className="mb-2 font-semibold">{title}</p>
//       <input
//         type="datetime-local"
//         value={publicationDate}
//         onChange={(e) => setPublicationDate(e.target.value)}
//         className="block w-full p-2 border mb-4"
//       />
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="block w-full p-2 border mb-4"
//         placeholder="Titre"
//       />
//       <textarea
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         className="block w-full p-2 border mb-4"
//         rows={6}
//         placeholder="Contenu"
//       ></textarea>
//       <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//         Planifier
//       </button>
//     </form>
//   );
// }

