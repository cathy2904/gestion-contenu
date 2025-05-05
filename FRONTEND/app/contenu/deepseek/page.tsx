'use client';

import { useState } from 'react';
import axios from 'axios';

export default function ArticleGenerator() {
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [length, setLength] = useState('medium'); // 'short', 'medium', 'long'
  const [tone, setTone] = useState('professional'); // 'professional', 'casual', 'enthusiastic'

  const getWordCount = () => {
    switch(length) {
      case 'short': return 'environ 300 mots';
      case 'medium': return 'environ 500 mots';
      case 'long': return 'environ 800 mots';
      default: return 'environ 500 mots';
    }
  };

  const getToneInstruction = () => {
    switch(tone) {
      case 'professional': return 'sur un ton professionnel';
      case 'casual': return 'sur un ton décontracté et accessible';
      case 'enthusiastic': return 'sur un ton enthousiaste et engageant';
      default: return '';
    }
  };

  const generateArticle = async () => {
    if (!title.trim()) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const wordCount = getWordCount();
      const toneInstruction = getToneInstruction();
      
      const response = await axios.post(
        'https://api.deepseek.com/v1/chat/completions',
        {
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: `Vous êtes un rédacteur expert. Générez un article de blog ${toneInstruction} en français.`
            },
            {
              role: 'user',
              content: `Écris un article de blog détaillé avec le titre : "${title}". 
              L'article doit faire ${wordCount}, être bien structuré avec des paragraphes et des sous-titres. 
              Le style doit être ${toneInstruction}.`
            }
          ],
          temperature: 0.7,
          max_tokens: length === 'short' ? 200 : length === 'medium' ? 500 : 700
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY}`
          }
        }
      );
      
      setArticle(response.data.choices[0].message.content);
    } catch (err) {
      console.error('Erreur lors de la génération:', err);
      setError('Une erreur est survenue lors de la génération de l\'article.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Générateur d'articles avancé</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="title" className="block  mb-2 font-medium">
            Titre de l'article :
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Entrez le titre de l'article"
          />
        </div>
        
        <div>
          <label htmlFor="length" className="block mb-2 font-medium">
            Longueur de l'article :
          </label>
          <select
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-2  border rounded"
          >
            <option value="short">Court (300 mots)</option>
            <option value="medium">Moyen (500 mots)</option>
            <option value="long">Long (800 mots)</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="tone" className="block  text-black mb-2 font-medium">
            Ton de l'article :
          </label>
          <select
            id="tone"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full p-2  border rounded"
          >
            <option value="professional">Professionnel</option>
            <option value="casual">Décontracté</option>
            <option value="enthusiastic">Enthousiaste</option>
          </select>
        </div>
      </div>
      
      <button
        onClick={generateArticle}
        disabled={isLoading}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg disabled:opacity-50 transition-colors"
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Génération en cours...
          </span>
        ) : 'Générer l\'article'}
      </button>
      
      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {article && (
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Article généré :</h2>
            <button 
              onClick={() => navigator.clipboard.writeText(article)}
              className="text-sm text-black bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded"
            >
              Copier 
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-black mb-6">{title}</h1>
            <div className="prose max-w-none text-black" dangerouslySetInnerHTML={{ __html: article.replace(/\n/g, '<br />') }} />
          </div>
        </div>
      )}
    </div>
  );
}