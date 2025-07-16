import Link from 'next/link';
import { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  imagePath?: string;
}

interface PostTableProps {
  posts: Post[];
  onDelete: (id: string) => void;
}

export default function PostTable({ posts, onDelete }: PostTableProps) {
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleConfirmDelete = () => {
    if (deleteId) {
      onDelete(deleteId);
      setDeleteId(null);
    }
  };

  return (
    <>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-white-500">
          <thead className="text-xs text-white-700 uppercase bg-white-50">
            <tr>
              <th scope="col" className="px-6 py-3">Titre</th>
              <th scope="col" className="px-6 py-3">Auteur</th>
              <th scope="col" className="px-6 py-3">Cnotenu</th>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id} className="bg-black border-b hover:bg-black-50">
                <td className="px-6 py-2 font-medium text-white-900 whitespace-nowrap">
                  {post.title}
                </td>
                <td className="px-6 py-2">{post.author}</td>
                
                <td className="px-6 py-4">{post.content}</td>
                <td className="py-3 px-4 border">
                  {post.imagePath ? (
                    <img // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      src={`http://localhost:3003${post.imagePath}`}
                      alt={post.title}
                      className="h-16 w-16 object-cover rounded"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="h-16 w-16 bg-white-200 rounded flex items-center justify-center text-xs">
                      Pas d'Image
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 space-x-2">
                    
                <Link 
                      href={`/post/read/${post._id}`}
                      className="font-medium text-green-600 hover:text-green-800"
                      title="Voir les détails"
                     >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <Link 
    href={`/post/edit/${post._id}`}
    className="font-medium text-blue-600 hover:text-blue-800"
    title="Modifier"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg>
  </Link>
  <button
    onClick={() => setDeleteId(post._id)}
    className="font-medium text-red-600 hover:text-red-800"
    title="Supprimer"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ConfirmationModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleConfirmDelete}
        title="Confirmer la suppression"
        message="Êtes-vous sûr de vouloir supprimer ce post ? Cette action est irréversible."
      />
    </>
  );
}
// import Link from 'next/link';
// import { useState } from 'react';
// import ConfirmationModal from './ConfirmationModal';
// import React from 'react';


// export default function PostTable({ posts, onDelete }: { posts: any[], onDelete: (id: string) => void }) {
//   const [deleteId, setDeleteId] = useState<string | null>(null);

//   const handleConfirmDelete = () => {
//     if (deleteId) {
//       onDelete(deleteId);
//       setDeleteId(null);
//     }
//   };

//   return (
//     <>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-black">
//           <thead>
//             <tr className="bg-black-100">
//               <th className="py-2 px-4 border">Titre</th>
//               <th className="py-2 px-4 border">Auteur</th>
//               <th className="py-2 px-4 border">Contenu</th>
//               <th className="py-2 px-4 border">Image</th>
//               <th className="py-2 px-4 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {posts.map((post) => (
//               <tr key={post._id} className="hover:bg-gray-50">
//                 <td className="py-2 px-4 border">{post.title}</td>
//                 <td className="py-2 px-4 border">{post.author}</td>
//                 <td className="py-2 px-4 border">{post.content}</td>
//                 <td className="py-2 px-4 border">
//                 {post.image ? (
//                   <img 
//                     src={`http://localhost:3000${post.image}`} 
//                     alt={post.title} 
//                     className="h-16 w-16 object-cover rounded"
//                   />
//                 ) : (
//                   'Aucune image'
//                 )}
//               </td>
//                 <td className="py-2 px-4 border">
//                   <div className="flex space-x-2">
//                     <Link href={`/post/${post._id}`}>
//                       <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
//                         Modifier
//                       </button>
//                     </Link>
//                     <button
//                       onClick={() => setDeleteId(post._id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                     >
//                       Supprimer
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <ConfirmationModal
//         isOpen={!!deleteId}
//         onClose={() => setDeleteId(null)}
//         onConfirm={handleConfirmDelete}
//         title="Confirmer la suppression"
//         message="Êtes-vous sûr de vouloir supprimer ce post ?"
//       />
//     </>
//   );
// }