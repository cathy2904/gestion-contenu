'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getArticle, updateArticle } from '@/lib/api';

export default function EditArticlePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const article = await getArticle(params.id);
        setFormData({
          title: article.title,
          content: article.content,
          author: article.author
        });
      } catch (error) {
        console.error('Error loading article:', error);
        router.push('/articles');
      }
    };
    loadArticle();
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateArticle(params.id, formData);
      router.push('/articles');
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Modifier l'article</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Les champs du formulaire sont identiques à NewArticlePage */}
        {/* ... (reprendre les mêmes champs que NewArticlePage) ... */}
      </form>
    </div>
  );
}




// 'use client';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// interface Article {
//   _id: string;
//   title: string;
//   content: string;
//   author: string;
// }

// export default function EditArticlePage({ params }: { params: { id: string } }) {
//   const router = useRouter();
//   const [formData, setFormData] = useState<Article>({
//     _id: '',
//     title: '',
//     content: '',
//     author: ''
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         const res = await fetch(`/api/articles/${params.id}`);
//         if (!res.ok) throw new Error('Article non trouvé');
//         const data = await res.json();
//         setFormData(data);
//       } catch (err) {
//         setError('Échec du chargement de l\'article');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchArticle();
//   }, [params.id]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
    
//     try {
//       const res = await fetch(`/api/articles/${params.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) throw new Error('Échec de la mise à jour');
//       router.push('/articles');
//     } catch (err) {
//       setError('Erreur lors de la mise à jour');
//       console.error(err);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-6 text-center">
//         <p>Chargement...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-6 text-red-500">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Modifier l'article</h1>
      
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label className="block text-sm font-medium mb-2">Titre</label>
//           <input
//             type="text"
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//             className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">Contenu</label>
//           <textarea
//             value={formData.content}
//             onChange={(e) => setFormData({ ...formData, content: e.target.value })}
//             className="w-full p-2 border rounded h-48 focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">Auteur</label>
//           <input
//             type="text"
//             value={formData.author}
//             onChange={(e) => setFormData({ ...formData, author: e.target.value })}
//             className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {error && <p className="text-red-500">{error}</p>}

//         <div className="flex gap-4">
//           <button
//             type="button"
//             onClick={() => router.push('/articles')}
//             className="px-4 py-2 border rounded hover:bg-gray-50"
//           >
//             Annuler
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Enregistrer
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }