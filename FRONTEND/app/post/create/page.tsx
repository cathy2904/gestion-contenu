'use client';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createPost } from '../service/api';
import PostForm from '../../components/PostForm';
import Head from 'next/head'; // eslint-disable-next-line @typescript-eslint/no-unused-vars


export default function CreatePostPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (formData: FormData) => {
    try {
      setIsSubmitting(true);
      setError(null);
      await createPost(formData);
      router.push('/post');
    } catch (err) {
      setError('Erreur lors de la création du post');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Créer un nouveau Post</h1>
        <p className="text-gray-600 mt-2">Remplissez le formulaire pour créer un nouveau post</p>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <PostForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
    </div>
  );
}

// "use client"
// import React, {useState } from 'react'
// import { useRouter } from 'next/navigation'
// export default function PostCreate() {
//   const router = useRouter()
//   const [title, setTitle] =useState<string>('');
//   const [body, setBody] = useState<string>('');
//   const addPost = async (e: any) => {
//     e.preventDefault()
//     if (title!="" && body!="") {
//       const formData = {
//           title: title,
//           content: body
//       }
//       const add = await fetch('/api/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       const content = await add.json();
//       if(content.success>0)
//       {
//         router.push('/post');
//       }
      
//     }
//   };
//   return (
//     <form className='w-full' onSubmit={addPost}>
//         <span className='font-bold text-yellow-500 py-2 block underline text-2xl'>ajout</span>
//         <div className='w-full py-2'>
//              <label htmlFor="" className='text-sm font-bold py-2 block'>Titre</label>
//              <input type='text' name='title' className='w-full border-[1px] border-gray-200 p-2 rounded-sm'  onChange={(e:any)=>setTitle(e.target.value)}/>
//         </div>
//         <div className='w-full py-2'>
//              <label htmlFor="" className='text-sm font-bold py-2 block'>Content</label>
//              <textarea name='content' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e:any)=>setBody(e.target.value)} />
//         </div>
//         <div className='w-full py-2'>
//              <label htmlFor="" className='text-sm font-bold py-2 block'>auteur</label>
//              <textarea name='author' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e:any)=>setBody(e.target.value)} />
//         </div>
//         <div className='w-full py-2'>
//           <button className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400">Submit</button>
//         </div>
//     </form>
//   )
// }
