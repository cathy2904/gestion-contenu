// Date: 2025-03-26
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react';
import { getPosts, deletePost } from '../post/service/api';
import PostTable from '../components/PostTable';



export default function PostsPage() {
  const [posts, setPosts] = useState<any[]>([]); // eslint-disable-next-line @typescript-eslint/no-explicit-any 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await getPosts();
      setPosts(response.data);
    } catch (err) {
      setError('Erreur lors du chargement des posts');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deletePost(id);
      setPosts(posts.filter(post => post._id !== id));
    } catch (err) {
      setError('Erreur lors de la suppression du post');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Erreur ! </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white-800">Liste des Posts</h1>
        <Link 
          href="/post/create"
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition duration-300"
        >
          Créer un nouveau post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="bg-black p-8 rounded-lg shadow text-center">
          <p className="text-white-500">Aucun post disponible</p>
          <Link 
            href="/post/create"
            className="inline-block mt-4 text-green-600 hover:text-green-800"
          >
            Créer votre premier post
          </Link>
        </div>
      ) : (
        <PostTable posts={posts} onDelete={handleDelete} />
      )}
    </div>
  );
}




// "use client";
// import React,{useEffect, useState} from "react";
// import useSWR from "swr";
// import Post from "../components/Post";
// import { PostModel } from "../types";
// import Link from "next/link";
// import { fetcher } from "../libs";
// export default function Posts() {
//   const [posts,setPosts] = useState<PostModel[]>([]);
//   const { data, error, isLoading } = useSWR<any>(`/api/posts`, fetcher);
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         console.log('Début du fetch...');
//         const response = await fetch('/api/posts');
//         console.log('Réponse reçue:', response);
        
//         const data = await response.json();
//         console.log('Données reçues:', data);
        
//         setPosts(data);
//       } catch (error) {
//         console.error('Erreur complète:', error);
//       }
//     };
//     fetchPosts();
//   }, []);


//   let delete_Post : PostModel['deletePost']= async (id:number) => {
//     const res = await fetch(`/api/posts/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     });
//     const content = await res.json();
//     if(content.success>0)
//     {
       
//       setPosts(posts?.filter((post:PostModel)=>{  return post.id !== id  }));
//     }
//   }
//   return (
//     <div className="w-full max-w-7xl m-auto">
//       <div>
//     <Link href={`/post/create`} className="bg-green-500 p-2 inline-block text-white">Créer</Link>

//     </div>
//       <table className="w-full border-collapse border border-slate-400">
//         {/* <caption className="caption-top py-5 font-bold text-green-500 text-2xl">
//           List Posts - Counter :
//           <span className="text-red-500 font-bold">{ posts?.length}</span>
//         </caption> */}
    
//         <thead>
//           <tr className="text-center">
            
//             <th className="border border-slate-300">Title</th>
//             <th className="border border-slate-300">contenu</th>
//             <th className="border border-slate-300">auteur</th>
//             <th className="border border-slate-300">Modify</th>
//           </tr>
//         </thead>
//         <tbody>
//            {/* <tr>
//               <td colSpan={5}>
//                  <Link href={`/post/create`} className="bg-green-500 p-2 inline-block text-white">Créer</Link>
//               </td>
//            </tr> */}
//            {
//               posts && posts.map((item : PostModel)=><Post key={item.id} {...item} deletePost = {delete_Post} />)
//            }

//             {}
//         </tbody>
//       </table>
//     </div>
//   );
  
// }
