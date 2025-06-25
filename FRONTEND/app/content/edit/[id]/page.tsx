'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Cropper from 'react-easy-crop';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import getCroppedImg from '@/app/utils/cropImage';
import type { Area } from 'react-easy-crop';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function EditContentPage() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [selectedNetworks, setSelectedNetworks] = useState<string[]>([]);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [currentEditIndex, setCurrentEditIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch(`http://localhost:3000/api/content/${id}`);
      const data = await res.json();
      setTitle(data.title);
      setContent(data.content);
      // Optionnel : set media depuis l’API si déjà uploadé
    };
    if (id) fetchContent();
  }, [id]);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setMedia((prev) => [...prev, ...files]);
    setPreviews((prev) => [...prev, ...urls]);
  };

  const handleDeleteMedia = (index: number) => {
    setMedia((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const onCropComplete = useCallback((_croppedArea: Area, croppedPixels: Area) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const showCroppedImage = async () => {
    if (currentEditIndex === null || !previews[currentEditIndex]) return;
    const croppedImageUrl = await getCroppedImg(previews[currentEditIndex], croppedAreaPixels!);
    const response = await fetch(croppedImageUrl);
    const blob = await response.blob();
    const newFile = new File([blob], media[currentEditIndex].name, { type: blob.type });

    const updatedMedia = [...media];
    const updatedPreviews = [...previews];

    updatedMedia[currentEditIndex] = newFile;
    updatedPreviews[currentEditIndex] = URL.createObjectURL(newFile);

    setMedia(updatedMedia);
    setPreviews(updatedPreviews);
    setCurrentEditIndex(null);
    setZoom(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    selectedNetworks.forEach((network) => formData.append('networks', network));
    media.forEach((file) => formData.append('media', file));

    await fetch(`http://localhost:3000/api/content/${id}`, {
      method: 'PUT',
      body: formData,
    });

    router.push('/content');
  };

  const toggleNetwork = (network: string) => {
    setSelectedNetworks((prev) =>
      prev.includes(network) ? prev.filter((n) => n !== network) : [...prev, network]
    );
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">Modifier le contenu</h1>

      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Titre"
          required
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Contenu"
          rows={6}
          required
        />

        <input
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={handleMediaChange}
          className="w-full"
        />

        <div className="flex flex-wrap gap-2 mt-2">
          {previews.map((url, i) => (
            <div key={i} className="relative group">
              {url.match(/video/) ? (
                <video src={url} controls className="w-32 h-32 object-cover rounded" />
              ) : (
                <>
                  <img src={url} alt={`media-${i}`} className="w-32 h-32 object-cover rounded" />
                  <button
                    type="button"
                    onClick={() => setCurrentEditIndex(i)}
                    className="absolute top-1 left-1 bg-black bg-opacity-50 text-white px-1 text-xs rounded"
                  >
                    Recadrer
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={() => handleDeleteMedia(i)}
                className="absolute top-1 right-1 bg-red-600 text-white px-1 text-xs rounded"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Sélection des réseaux sociaux */}
        <div className="flex gap-4 mt-4 items-center">
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedNetworks.includes('facebook')}
              onChange={() => toggleNetwork('facebook')}
            />
            <FaFacebook className="text-blue-600" /> Facebook
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedNetworks.includes('instagram')}
              onChange={() => toggleNetwork('instagram')}
            />
            <FaInstagram className="text-pink-500" /> Instagram
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedNetworks.includes('linkedin')}
              onChange={() => toggleNetwork('linkedin')}
            />
            <FaLinkedin className="text-blue-700" /> LinkedIn
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
        >
          Enregistrer
        </button>
      </form>

      {currentEditIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-4 w-[90%] h-[90%] relative">
            <Cropper
              image={previews[currentEditIndex]}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">Zoom</label>
              <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(val) => setZoom(val as number)}
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="button"
                className="px-4 py-2 bg-green-600 text-white rounded"
                onClick={showCroppedImage}
              >
                Appliquer
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-red-600 text-white rounded"
                onClick={() => setCurrentEditIndex(null)}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



// 'use client';

// import { useEffect, useState, useCallback } from 'react';
// import { useRouter, useParams } from 'next/navigation';
// import Cropper from 'react-easy-crop';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';

// import getCroppedImg from '@/app/utils/cropImage';
// import type { Area } from 'react-easy-crop';
// import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

// export default function EditContentPage() {
//   const { id } = useParams();
//   const router = useRouter();

//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [media, setMedia] = useState<FileList | null>(null);
//   const [previews, setPreviews] = useState<string[]>([]);

//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState();
//   const [currentEditIndex, setCurrentEditIndex] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchContent = async () => {
//       const res = await fetch(`http://localhost:3000/api/content/${id}`);
//       const data = await res.json();
//       setTitle(data.title);
//       setContent(data.content);
//     };
//     if (id) fetchContent();
//   }, [id]);

//   useEffect(() => {
//     if (!media) return;
//     const urls = Array.from(media).map((file) => URL.createObjectURL(file));
//     setPreviews(urls);
//     return () => urls.forEach((url) => URL.revokeObjectURL(url));
//   }, [media]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('content', content);
//     if (media) {
//       Array.from(media).forEach((file) => {
//         formData.append('media', file);
//       });
//     }
//     await fetch(`http://localhost:3000/api/content/${id}`, {
//       method: 'PUT',
//       body: formData,
//     });
//     router.push('/content');
//   };

//   const onCropComplete = useCallback(
//   (_croppedArea: Area, croppedAreaPixels: Area) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   },
//   []
// );

//   const showCroppedImage = async () => {
//     if (currentEditIndex === null || !previews[currentEditIndex]) return;
//     const croppedImage = await getCroppedImg(previews[currentEditIndex], croppedAreaPixels);
//     const updatedPreviews = [...previews];
//     updatedPreviews[currentEditIndex] = croppedImage;
//     setPreviews(updatedPreviews);
//     setCurrentEditIndex(null);
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <h1 className="text-xl font-semibold mb-4">Modifier le contenu</h1>
//       <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full border px-3 py-2 rounded"
//           placeholder="Titre"
//           required
//         />
//         <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="w-full border px-3 py-2 rounded"
//           placeholder="Contenu"
//           rows={6}
//           required
//         />
//         <input
//           type="file"
//           accept="image/*,video/*"
//           multiple
//           onChange={(e) => setMedia(e.target.files)}
//           className="w-full"
//         />

//         <div className="flex flex-wrap gap-2 mt-2">
//           {previews.map((url, i) => (
//             <div key={i} className="relative">
//               {url.match(/video/) ? (
//                 <video src={url} controls className="w-32 h-32 object-cover rounded" />
//               ) : (
//                 <>
//                   <img src={url} className="w-32 h-32 object-cover rounded" alt={`preview-${i}`} />
//                   <button
//                     type="button"
//                     className="absolute top-0 right-0 bg-black bg-opacity-50 text-white p-1 text-xs"
//                     onClick={() => setCurrentEditIndex(i)}
//                   >
//                     Recadrer
//                   </button>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>

//         {currentEditIndex !== null && (
//           <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
//             <div className="bg-white p-4 w-[90%] h-[90%] relative">
//               <Cropper
//                 image={previews[currentEditIndex]}
//                 crop={crop}
//                 zoom={zoom}
//                 aspect={1}
//                 onCropChange={setCrop}
//                 onCropComplete={onCropComplete}
//                 onZoomChange={setZoom}
//               />
//               <div className="mt-4">
//                 <label className="block mb-2 text-sm font-medium">Zoom</label>
//                 <Slider
//                   min={1}
//                   max={3}
//                   step={0.1}
//                   value={zoom}
//                   onChange={(val) => setZoom(val as number)}
//                 />
//               </div>
//               <div className="flex justify-between mt-4">
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-green-600 text-white rounded"
//                   onClick={showCroppedImage}
//                 >
//                   Appliquer
//                 </button>
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-red-600 text-white rounded"
//                   onClick={() => setCurrentEditIndex(null)}
//                 >
//                   Annuler
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Enregistrer
//         </button>
//       </form>
//     </div>
//   );
// }







// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter, useParams } from 'next/navigation';

// export default function EditContentPage() {
//   const { id } = useParams();
//   const router = useRouter();
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [media, setMedia] = useState<FileList | null>(null);

//   useEffect(() => {
//     const fetchContent = async () => {
//       const res = await fetch(`http://localhost:3000/api/content/${id}`);
//       const data = await res.json();
//       setTitle(data.title);
//       setContent(data.content);
//     };
//     if (id) fetchContent();
//   }, [id]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await fetch(`http://localhost:3000/api/content/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title, content }),
//     });
//     router.push('/content');
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <h1 className="text-xl font-semibold mb-4">Modifier le contenu</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full border px-3 py-2 rounded"
//           placeholder="Titre"
//           required
//         />
//         <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="w-full border px-3 py-2 rounded"
//           placeholder="Contenu"
//           rows={6}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Enregistrer
//         </button>
//       </form>
//     </div>
//   );
// }
