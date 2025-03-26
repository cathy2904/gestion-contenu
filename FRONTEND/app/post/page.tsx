"use client";
import React,{useEffect, useState} from "react";
import useSWR from "swr";
import Post from "../components/Post";
import { PostModel } from "../types";
import Link from "next/link";
import { fetcher } from "../libs";
export default function Posts() {
  const [posts,setPosts] = useState<PostModel[]>([]);
  const { data, error, isLoading } = useSWR<any>(`/api/posts`, fetcher);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('Début du fetch...');
        const response = await fetch('/api/posts');
        console.log('Réponse reçue:', response);
        
        const data = await response.json();
        console.log('Données reçues:', data);
        
        setPosts(data);
      } catch (error) {
        console.error('Erreur complète:', error);
      }
    };
    fetchPosts();
  }, []);


  let delete_Post : PostModel['deletePost']= async (id:number) => {
    const res = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const content = await res.json();
    if(content.success>0)
    {
       
      setPosts(posts?.filter((post:PostModel)=>{  return post.id !== id  }));
    }
  }
  return (
    <div className="w-full max-w-7xl m-auto">
      <div>
    <Link href={`/post/create`} className="bg-green-500 p-2 inline-block text-white">Créer</Link>

    </div>
      <table className="w-full border-collapse border border-slate-400">
        {/* <caption className="caption-top py-5 font-bold text-green-500 text-2xl">
          List Posts - Counter :
          <span className="text-red-500 font-bold">{ posts?.length}</span>
        </caption> */}
    
        <thead>
          <tr className="text-center">
            
            <th className="border border-slate-300">Title</th>
            <th className="border border-slate-300">contenu</th>
            <th className="border border-slate-300">auteur</th>
            <th className="border border-slate-300">Modify</th>
          </tr>
        </thead>
        <tbody>
           {/* <tr>
              <td colSpan={5}>
                 <Link href={`/post/create`} className="bg-green-500 p-2 inline-block text-white">Créer</Link>
              </td>
           </tr> */}
           {
              posts && posts.map((item : PostModel)=><Post key={item.id} {...item} deletePost = {delete_Post} />)
           }

            {/* {posts.map((posts) => (
                     <tr key={posts.id} className="hover:bg-gray-50">
                       <td className="py-2 px-4 border-b">{posts.title}</td>
                       <td className="py-2 px-4 border-b">{posts.content}</td>
                       <td className="py-2 px-4 border-b">{posts.author}</td>
                       <td className="py-2 px-4 border-b">
                       <Link
                           href={`/post/read/${posts.id}`}
                           className="text-blue-500 hover:text-blue-700 mr-2"
                         >
                           voir
                         </Link>
                         <Link
                           href={`/post/edit/${posts.id}`}
                           className="text-blue-500 hover:text-blue-700 mr-2"
                         >
                           Modifier
                         </Link>
                         <button
                           onClick={() => delete_Post(posts.id)}
                           className="text-red-500 hover:text-red-700"
                         >
                           Supprimer
                         </button>
                       </td>
                     </tr>
                   ))} */}
        </tbody>
      </table>
    </div>
  );
  
}
