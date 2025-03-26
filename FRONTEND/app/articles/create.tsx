// app/modules/articles/create.tsx
'use client';
import Principal from '@/components/Principal';
import { createArticle } from './action';

export default function CreateArticle() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    await createArticle({ title, content});
    window.location.href = '/articles';
  }

  return (
    <Principal titre="articles" >
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Créer un nouvel article</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Titre</label>
          <input
            name="title"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Contenu</label>
          <textarea
            name="content"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Créer
        </button>
      </form>
    </div>
    </Principal>
  )
}