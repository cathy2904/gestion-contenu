// 'use client'
// import { fetcher } from '@/app/libs'
// import useSWR from 'swr'

// export default function Detail({params}: {params:{id :number}}) {
//   const {data: post, isLoading, error}  = useSWR(`/api/posts/${params.id}`,fetcher)
//   if(isLoading) return <div><span>Loading...</span></div>
//   if (!post) return null;
//   return (
//     <div className='w-full'>
//         <h2 className='text-center font-bold text-3xl py-3'>{post.result.title}</h2>
    
//        <div className='w-full max-w-4xl m-auto border-[1px] p-3 border-gray-500 rounded-md'>
//          <p dangerouslySetInnerHTML={{ __html: post.result.content}}></p>
       
//        </div>
//     </div>
//   )
// }

'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: string;
}

export default function ReadPost() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${id}`);
        if (!res.ok) throw new Error('Article non trouvé');
        setPost(await res.json());
      } catch (error) {
        console.error('Fetch error:', error);
        router.push('/post');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id, router]);

  if (loading) return <div className="text-center p-8">Chargement...</div>;
  if (!post) return <div className="text-center p-8">Article introuvable</div>;

  return (
    <div className="container mx-auto p-4">
      <Link href="/post" className="text-blue-500 mb-4 inline-block">
        ← Retour
      </Link>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <div className="bg-white p-6 rounded shadow">
        <div className="mb-4 text-gray-600">
          <span className="font-semibold">Auteur :</span> {post.author}
        </div>
        <div className="mb-4 text-gray-600">
          <span className="font-semibold">Date :</span> {new Date(post.created_at).toLocaleDateString()}
        </div>
        <div className="prose max-w-none">
          {post.content}
        </div>
      </div>
    </div>
  );
}