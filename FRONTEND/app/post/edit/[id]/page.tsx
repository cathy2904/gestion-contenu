'use client';

import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getPost, updatePost } from '../../service/api';
import EditPostForm from '@/app/components/EditPostForm';
import Link from 'next/link';

export default function EditPostPage() {
  const router = useRouter();
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPost = async () => {
    if (!id) return;
    try {
      setIsLoading(true);
      const response = await getPost(id as string);
      setPost(response.data);
    } catch (err) {
      setError('Erreur lors du chargement du post');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (formData: FormData) => {
    try {
      setIsSubmitting(true);
      setError(null);
      await updatePost(id as string, formData);
      router.push('/post');
    } catch (err) {
      setError('Erreur lors de la mise à jour du post');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
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

  if (!post) {
    return (
      <div className="bg-white p-8 rounded-lg shadow text-center">
        <p className="text-gray-500">Post non trouvé</p>
        <Link 
          href="/posts"
          className="inline-block mt-4 text-blue-600 hover:text-blue-800"
        >
          Retour à la liste
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Modifier le Post</h1>
        <p className="text-gray-600 mt-2">Modifiez les champs nécessaires</p>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <EditPostForm onSubmit={onSubmit} initialData={post} isSubmitting={isSubmitting} />
    </div>
  );
}





// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import { getPost, updatePost } from '../../service/api';
// import PostForm from '@/app/components/PostForm';

// export default function EditPostPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const [post, setPost] = useState<any>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const fetchPost = async () => {
//     if (!id) return;
//     try {
//       setIsLoading(true);
//       const response = await getPost(id as string);
//       setPost(response.data);
//     } catch (err) {
//       setError('Erreur lors du chargement du post');
//       console.error(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const onSubmit = async (data: any) => {
//     try {
//       setIsSubmitting(true);
//       setError(null);
//       await updatePost(id as string, data);
//       router.push('/posts');
//     } catch (err) {
//       setError('Erreur lors de la mise à jour du post');
//       console.error(err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     fetchPost();
//   }, [id]);

//   if (isLoading) return <div className="text-center py-8">Chargement...</div>;
//   if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
//   if (!post) return <div className="text-center py-8">Post non trouvé</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex items-center mb-6">
//         <h1 className="text-2xl font-bold">Modifier le Post</h1>
//       </div>

//       {error && (
//         <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//           {error}
//         </div>
//       )}

//       <PostForm onSubmit={onSubmit} initialData={post} isSubmitting={isSubmitting} />
//     </div>
//   );
// }
// "use client"
// import React, {useState,useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import { fetcher } from '@/app/libs'
// import useSWR from 'swr'
// export default function PostEdit({params} :{params:{id:number}}) {
//   const router = useRouter()
//   const {data : post,isLoading, error} = useSWR(`/api/posts/${params.id}`,fetcher)
//   const [title, setTitle] =useState<string>('');
//   const [body, setBody] = useState<string>('');
//   useEffect(()=>{
//      if(post){
//          setTitle(post.result.title)
//          setBody(post.result.content)
//      }
//   },[post, isLoading])
//   const updatePost = async (e: any) => {
//     e.preventDefault()
//     if (title!="" && body!="") {
//       const formData = {
//           title: title,
//           content: body
//       }
//       const res = await fetch(`/api/posts/${params.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       const content = await res.json();
//       if(content.success>0)
//       {
//         router.push('/post');
//       }
      
//     }
//   };
//   if(isLoading) return <div><span>Loading...</span></div>
//   if (!post) return null;
//   return (
//     <form className='w-full' onSubmit={updatePost}>
//         <span className='font-bold text-yellow-500 py-2 block underline text-2xl'>Form Add</span>
//         <div className='w-full py-2'>
//              <label htmlFor="" className='text-sm font-bold py-2 block'>Title</label>
//              <input type='text' name='title' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' value={title} onChange={(e:any)=>setTitle(e.target.value)}/>
//         </div>
//         <div className='w-full py-2'>
//              <label htmlFor="" className='text-sm font-bold py-2 block'>Content</label>
//              <textarea name='title' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' value={body} onChange={(e:any)=>setBody(e.target.value)} />
//         </div>
//         <div className='w-full py-2'>
//           <button className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400">Submit</button>
//         </div>
//     </form>
//   )
// }
