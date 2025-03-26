'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getArticle } from '@/lib/api';

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const [article, setArticle] = useState<Article | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const data = await getArticle(params.id);
        setArticle(data);
      } catch (error) {
        console.error('Error loading article:', error);
        router.push('/articles');
      }
    };
    loadArticle();
  }, [params.id, router]);

  if (!article) return <div className="text-center p-8">Chargement...</div>;

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <button 
        onClick={() => router.back()}
        className="mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Retour
      </button>
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="mb-6 text-gray-500">
        Par {article.author} • {new Date(article.createdAt).toLocaleDateString()}
      </div>
      <div className="prose max-w-none">
        <p className="whitespace-pre-wrap">{article.content}</p>
      </div>
    </div>
  );
}