
// 'use client';
//  import { useState , useEffect} from 'react';
// import Link from 'next/link';

// interface Article {
//   _id: string;
//   title: string;
//   content: string;
//   author: string;
// }

// interface ArticleTableProps { // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   articles: Article[];
// }
// export default function ArticlesPage() {
//   const [articles, setArticles] = useState<any[]>([]);  // eslint-disable-next-line @typescript-eslint/no-unused-vars

//   // Charger les articles au montage du composant
//   useEffect(() => {
//     fetchArticles();
//   }, []);

//   // Fonction pour récupérer les articles
//   const fetchArticles = async () => {
//     const res = await fetch('/api/articles');
//     const data = await res.json();
//     setArticles(data);
//   };

// const createArticle = async (article: { title: string; content: string; author: string }) => { // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const res = await fetch('/api/articles', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(article),
//   });
//   const data = await res.json();
//   return data;
// };

// const updateArticle = async (id: string, article: { title: string; content: string; author: string }) => { // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const res = await fetch('/api/articles', {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ id, ...article }),
//   });
//   const data = await res.json();
//   return data;
// };

// const deleteArticle = async (id: string) => { // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const res = await fetch('/api/articles', {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ id }),
//   });
//   const data = await res.json();
//   return data;
// };



//   return (
//     <table className="min-b-full bg-black border border-gray-300">
//       <thead>
//         <tr>
//           <th className="py-2 px-4 border-b">Titre</th>
//           <th className="py-2 px-4 border-b">Contenu</th>
//           <th className="py-2 px-4 border-b">Auteur</th>
//           <th className="py-2 px-4 border-b">Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {articles.map((article) => (
//           <tr key={article._id} className="hover:bg-gray-50">
//             <td className="py-2 px-4 border-b">{article.title}</td>
//             <td className="py-2 px-4 border-b">{article.content}</td>
//             <td className="py-2 px-4 border-b">{article.author}</td>
//             <td className="py-2 px-4 border-b">
//               <Link
//                 href={`/articles/edit/${article._id}`}
//                 className="text-blue-500 hover:text-blue-700 mr-2"
//               >
//                 Modifier
//               </Link>
//               <button
//                 onClick={() => deleteArticle(article._id)}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 Supprimer
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }