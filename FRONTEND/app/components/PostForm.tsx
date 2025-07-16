
import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface PostFormProps {
  onSubmit: (data: FormData) => void;
  initialData?: {
    title?: string;
    content?: string;
    author?: string;
    imagePath?: string;
  };
  isSubmitting?: boolean;
}

export default function PostForm({ onSubmit, initialData = {}, isSubmitting = false }: PostFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { ...initialData, image: null },
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFormSubmit = async(data: any) => { // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('author', data.author);
    
    if (data.image && data.image[0]) {
      // Append the new image if it exists
      formData.append('image', data.image[0]);
    } else if (initialData.imagePath) {
      // Retain the existing image path if no new image is uploaded
      formData.append('imagePath', initialData.imagePath);
    }
    
    onSubmit(formData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4 max-w-2xl mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700">Titre *</label>
        <input
          {...register('title', { required: 'Le titre est requis' })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
            errors.title ? 'border-red-500' : 'border'
          } p-2`}
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Contenu *</label>
        <textarea
          {...register('content', { required: 'Le contenu est requis' })}
          rows={4}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
            errors.content ? 'border-red-500' : 'border'
          } p-2`}
        />
        {errors.content && (
          <p className="mt-1 text-sm text-red-600">{errors.content.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Auteur *</label>
        <input
          {...register('author', { required: "L'auteur est requis" })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
            errors.author ? 'border-red-500' : 'border'
          } p-2`}
        />
        {errors.author && (
          <p className="mt-1 text-sm text-red-600">{errors.author.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <input
          type="file"
          id="image"
          {...register('image')}
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
        {previewImage ? (
          <div className="mt-2">
            <img // eslint-disable-next-line @typescript-eslint/no-unused-vars
              src={previewImage} 
              alt="Preview" 
              className="h-32 object-cover rounded"
            />
          </div>
        ) : initialData?.imagePath ? (
          <div className="mt-2">
            <img // eslint-disable-next-line @typescript-eslint/no-unused-vars
              src={`http://localhost:3000${initialData.imagePath}`} 
              alt="Current" 
              className="h-32 object-cover rounded"
            />
          </div>
        ) : null}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
        </button>
      </div>
    </form>
  );
}




// import { useForm } from 'react-hook-form';
// import { useState } from 'react';

// export default function PostForm({ onSubmit, initialData = {}, isSubmitting = false }: {
//   onSubmit: (data: FormData) => void;
//   initialData?: any;
//   isSubmitting?: boolean;
// }) {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: initialData,
//   });
//   const [previewImage, setPreviewImage] = useState<string | null>(null);

//   const handleFormSubmit = (data: any) => {
//     const formData = new FormData();
//     formData.append('title', data.title);
//     formData.append('content', data.content);
//     formData.append('author', data.author);
    
//     if (data.image && data.image[0]) {
//       formData.append('image', data.image[0]);
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
//     <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
//       {/* Champs texte restent inchangés */}
      
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
//         {previewImage && (
//           <div className="mt-2">
//             <img 
//               src={previewImage} 
//               alt="Preview" 
//               className="h-32 object-cover rounded"
//             />
//           </div>
//         )}
//         {initialData?.image && !previewImage && (
//           <div className="mt-2">
//             <img 
//               src={`http://localhost:3003${initialData.image}`} 
//               alt="Current" 
//               className="h-32 object-cover rounded"
//             />
//           </div>
//         )}
//       </div>

//       <div>
//          <button
//             type="submit"
//             disabled={isSubmitting}
//              className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
//            >
//              {isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
//            </button>
//           </div>
//     </form>
//   );
// }




// import { useForm } from 'react-hook-form';
// import React from 'react';

// export default function PostForm({ onSubmit, initialData = {}, isSubmitting = false }: {
//   onSubmit: (data: any) => void;
//   initialData?: any;
//   isSubmitting?: boolean;
// }) {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: initialData,
//   });

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Titre *</label>
//         <input
//           {...register('title', { required: 'Le titre est requis' })}
//           className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
//             errors.title ? 'border-red-500' : 'border'
//           }`}
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
//           }`}
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
//           }`}
//         />
//         {errors.author && (
//           <p className="mt-1 text-sm text-red-600">{errors.author.message as string}</p>
//         )}
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700">Image URL (optionnel)</label>
//         <input
//           {...register('image')}
//           className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//           placeholder="https://example.com/image.jpg"
//         />
//       </div>

//       <div>
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
//         >
//           {isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
//         </button>
//       </div>
//     </form>
//   );
// }