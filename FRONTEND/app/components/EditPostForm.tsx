'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditPostForm({ id }: { id: string }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [newImageFile, setNewImageFile] = useState<File | null>(null); // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();

  // Charger les données existantes
  useEffect(() => {
    fetch(`http://localhost:3000/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
        setAuthor(data.author);
        setImagePath(data.imagePath);
      });
  }, [id]);

  // Upload d'une nouvelle image
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('http://localhost:3003/api/files/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    setImagePath(data.filePath);
    setNewImageFile(file);
  };

  // Soumettre la mise à jour
  const handleSubmit = async () => {
    await fetch(`http://localhost:3003/api/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        content,
        author,
        imagePath, // image mise à jour ou conservée
      }),
    });

    alert('Post modifié avec succès !');
    router.push('/post');
  };

  // Supprimer image actuelle
  const handleRemoveImage = () => {
    setImagePath('');
  };

  return (
    <div>
      <h2>Modifier le Post</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre"
      />
      <br />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Contenu"
      />
      <br />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Auteur"
      />
      <br />

      {imagePath && (
        <div>
          <img // eslint-disable-next-line @typescript-eslint/no-unused-vars
            src={`http://localhost:3003${imagePath}`}
            alt="Image actuelle"
            width={200}
          />
          <br />
          <button onClick={handleRemoveImage}>Supprimer l'image</button> {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        </div>
      )}

      <input type="file" onChange={handleUpload} />
      <br />

      <button onClick={handleSubmit}>Mettre à jour</button>
    </div>
  );
}




// import { useState, useEffect } from 'react';

// export default function EditPostForm({ postId }: { postId: string }) {
//   const [post, setPost] = useState<any>(null);
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [author, setAuthor] = useState('');
//   const [file, setFile] = useState<File | null>(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       const res = await fetch(`http://localhost:3003/api/posts/${postId}`);
//       const data = await res.json();
//       setPost(data);
//       setTitle(data.title);
//       setContent(data.content);
//       setAuthor(data.author);
//     };
//     fetchPost();
//   }, [postId]);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleUpdate = async () => {
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('content', content);
//     formData.append('author', author);
//     if (file) {
//       formData.append('file', file);
//     }

//     await fetch(`http://localhost:3003/api/posts/${postId}`, {
//       method: 'PUT',
//       body: formData,
//     });

//     alert('Post updated!');
//   };

//   if (!post) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>Edit Post</h2>
//       <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
//       <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
//       <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpdate}>Update Post</button>
//       {post.imagePath && (
//         <div>
//           <p>Current Image:</p>
//           <img src={`http://localhost:3003/api/posts${post.imagePath}`} width="200" />
//         </div>
//       )}
//     </div>
//   );
// }





// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// interface EditPostFormProps {
//   post: any;
// }

// export default function EditPostForm({ post }: EditPostFormProps) {
//   const router = useRouter();
//   const [title, setTitle] = useState(post.title);
//   const [content, setContent] = useState(post.content);
//   const [image, setImage] = useState<File | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("content", content);
//     if (image) formData.append("image", image);

//     const response = await fetch(`http://localhost:3003/api/posts/${post._id}`, {
//       method: "PATCH",
//       body: formData,
//     });

//     if (response.ok) {
//       router.push("/posts");
//     } else {
//       console.error("Échec de la modification");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl mx-auto">
//       <h2 className="text-xl font-semibold">Modifier un article</h2>

//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Titre"
//         className="border p-2 rounded"
//       />

//       <textarea
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         placeholder="Contenu"
//         className="border p-2 rounded"
//       />

//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => setImage(e.target.files?.[0] || null)}
//         className="border p-2 rounded"
//       />

//       <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
//         Enregistrer les modifications
//       </button>
//     </form>
//   );
// }




// import { useForm } from 'react-hook-form';
// import { useState } from 'react';

// interface EditPostFormProps {
//   onSubmit: (data: FormData) => void;
//   initialData: {
//     title: string;
//     content: string;
//     author: string;
//     imagePath?: string;
//   };
//   isSubmitting?: boolean;
// }

// export default function EditPostForm({ onSubmit, initialData, isSubmitting = false }: EditPostFormProps) {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: { ...initialData, image: null },
//   });
//   const [previewImage, setPreviewImage] = useState<string | null>(null);

//   const handleFormSubmit = async (data: any) => {
//     const formData = new FormData();
//     formData.append('title', data.title);
//     formData.append('content', data.content);
//     formData.append('author', data.author);

//     if (data.image && data.image[0]) {
//       // Append the new image if it exists
//       formData.append('image', data.image[0]);
//     } else if (initialData.imagePath) {
//       // Retain the existing image path if no new image is uploaded
//       formData.append('imagePath', initialData.imagePath);
//     }

//     onSubmit(formData);
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4 max-w-2xl mx-auto">
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Titre *</label>
//         <input
//           {...register('title', { required: 'Le titre est requis' })}
//           className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
//             errors.title ? 'border-red-500' : 'border'
//           } p-2`}
//         />
//         {errors.title && (
//           <p className="mt-1 text-sm text-red-600">{errors.title.message as string}</p>
//         )}
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700">Contenu *</label>
//         <textarea
//           {...register('content', { required: 'Le contenu est requis' })}
//           rows={4}
//           className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
//             errors.content ? 'border-red-500' : 'border'
//           } p-2`}
//         />
//         {errors.content && (
//           <p className="mt-1 text-sm text-red-600">{errors.content.message as string}</p>
//         )}
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700">Auteur *</label>
//         <input
//           {...register('author', { required: "L'auteur est requis" })}
//           className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
//             errors.author ? 'border-red-500' : 'border'
//           } p-2`}
//         />
//         {errors.author && (
//           <p className="mt-1 text-sm text-red-600">{errors.author.message as string}</p>
//         )}
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700">Image</label>
//         <input
//           type="file"
//           id="image"
//           {...register('image')}
//           accept="image/*"
//           onChange={handleImageChange}
//           className="mt-1 block w-full text-sm text-gray-500
//             file:mr-4 file:py-2 file:px-4
//             file:rounded-md file:border-0
//             file:text-sm file:font-semibold
//             file:bg-blue-50 file:text-blue-700
//             hover:file:bg-blue-100"
//         />
//         {previewImage ? (
//           <div className="mt-2">
//             <img 
//               src={previewImage} 
//               alt="Preview" 
//               className="h-32 object-cover rounded"
//             />
//           </div>
//         ) : initialData?.imagePath ? (
//           <div className="mt-2">
//             <img 
//               src={`http://localhost:3003${initialData.imagePath}`} 
//               alt="Current" 
//               className="h-32 object-cover rounded"
//             />
//           </div>
//         ) : null}
//       </div>

//       <div className="pt-4">
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
//         >
//           {isSubmitting ? 'Modification...' : 'Modifier'}
//         </button>
//       </div>
//     </form>
//   );
// }