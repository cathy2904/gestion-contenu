// 'use client';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { getArticle, updateArticle } from '@/lib/api';

// export default function EditArticlePage({ params }: { params: { id: string } }) {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     title: '',
//     content: '',
//     author: ''
//   });

//   useEffect(() => {
//     const loadArticle = async () => {
//       try {
//         const article = await getArticle(params.id);
//         setFormData({
//           title: article.title,
//           content: article.content,
//           author: article.author
//         });
//       } catch (error) {
//         console.error('Error loading article:', error);
//         router.push('/articles');
//       }
//     };
//     loadArticle();
//   }, [params.id, router]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await updateArticle(params.id, formData);
//       router.push('/articles');
//     } catch (error) {
//       console.error('Error updating article:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 max-w-2xl">
//       <h1 className="text-2xl font-bold mb-6">Modifier l'article</h1> {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Les champs du formulaire sont identiques à NewArticlePage */}
//         {/* ... (reprendre les mêmes champs que NewArticlePage) ... */}
//       </form>
//     </div>
//   );
// }

