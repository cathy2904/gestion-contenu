// 'use client';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { getArticles, deleteArticle } from '@/lib/api';

// export default function ArticlesPage() {
  
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const data = await getArticles();
//         setArticles(data);
//       } catch (error) {
//         console.error('Error loading articles:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();
//   }, []);

//   const handleDelete = async (id: string) => {
//     if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
//       try {
//         await deleteArticle(id);
//         setArticles(prev => prev.filter(article => article._id !== id));
//       } catch (error) {
//         console.error('Error deleting article:', error);
//       }
//     }
//   };

//   if (loading) return <div className="text-center p-8">Chargement...</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">Liste des Articles</h1>
//         <Link
//           href="/articles/new"
//           className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//         >
//           Nouvel article
//         </Link>
//       </div>

//       <div className="grid gap-6">
//         {articles.map(article => (
//           <div key={article._id} className="border rounded-lg p-6 shadow-sm">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h2 className="text-xl font-semibold">{article.title}</h2>
//                 <p className="text-gray-600 mt-2">{article.author}</p>
//                 <p className="text-gray-500 text-sm mt-1">
//                   {new Date(article.createdAt).toLocaleDateString()}
//                 </p>
//               </div>
//               <div className="flex gap-2">
//                 <Link
//                   href={`/articles/${article._id}`}
//                   className="text-blue-600 hover:text-blue-800 px-3 py-1"
//                 >
//                   Voir
//                 </Link>
//                 <Link
//                   href={`/articles/edit/${article._id}`}
//                   className="text-green-600 hover:text-green-800 px-3 py-1"
//                 >
//                   Éditer
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(article._id)}
//                   className="text-red-600 hover:text-red-800 px-3 py-1"
//                 >
//                   Supprimer
//                 </button>
//               </div>
//             </div>
//             <p className="mt-4 text-gray-700">{article.content.slice(0, 100)}...</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





'use client';
 import { useState , useEffect} from 'react';
import Link from 'next/link';

interface Article {
  _id: string;
  title: string;
  content: string;
  author: string;
}

interface ArticleTableProps {
  articles: Article[];
}
export default function ArticlesPage() {
  const [articles, setArticles] = useState<any[]>([]);

  // Charger les articles au montage du composant
  useEffect(() => {
    fetchArticles();
  }, []);

  // Fonction pour récupérer les articles
  const fetchArticles = async () => {
    const res = await fetch('/api/articles');
    const data = await res.json();
    setArticles(data);
  };

const createArticle = async (article: { title: string; content: string; author: string }) => {
  const res = await fetch('/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });
  const data = await res.json();
  return data;
};

const updateArticle = async (id: string, article: { title: string; content: string; author: string }) => {
  const res = await fetch('/api/articles', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, ...article }),
  });
  const data = await res.json();
  return data;
};

const deleteArticle = async (id: string) => {
  const res = await fetch('/api/articles', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  const data = await res.json();
  return data;
};

// export default function ArticleTable({ articles }: ArticleTableProps) {
//   const handleDelete = async (id: string) => {
//     const confirmDelete = confirm('Êtes-vous sûr de vouloir supprimer cet article ?');
//     if (confirmDelete) {
//       const res = await fetch(`http://localhost:3000/api/articles/${id}`, {
//         method: 'DELETE',
//       });
//       if (res.ok) {
//         alert('Article supprimé avec succès');
//         window.location.reload(); // Recharger la page pour mettre à jour la liste
//       }
//     }
//   };

  return (
    <table className="min-b-full bg-black border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Titre</th>
          <th className="py-2 px-4 border-b">Contenu</th>
          <th className="py-2 px-4 border-b">Auteur</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article) => (
          <tr key={article._id} className="hover:bg-gray-50">
            <td className="py-2 px-4 border-b">{article.title}</td>
            <td className="py-2 px-4 border-b">{article.content}</td>
            <td className="py-2 px-4 border-b">{article.author}</td>
            <td className="py-2 px-4 border-b">
              <Link
                href={`/articles/edit/${article._id}`}
                className="text-blue-500 hover:text-blue-700 mr-2"
              >
                Modifier
              </Link>
              <button
                onClick={() => handleDelete(article._id)}
                className="text-red-500 hover:text-red-700"
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}