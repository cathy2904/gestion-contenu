'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Editor from '@/app/components/Editor';
import { useSearchParams } from 'next/navigation';

interface Content {
  _id: string;
  title: string;
  style: string;
  length: string;
  provider: string;
  platform: string;
  content: string;
  createdAt: string;
}

export default function Home() {
  const [title, setTitle] = useState('');
  const [style, setStyle] = useState('standard');
  const [length, setLength] = useState('medium');
  const [platform, setPlatform] =  useState('linkedin');
  const [provider, setProvider] = useState<'gpt-4' | 'deepseek'>('gpt-4')
  const [generatedContent, setGeneratedContent] = useState('<p>Contenu initial généré</p>');
  const [contents, setContents] = useState<Content[]>([]); // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [html, setHtml] = useState("<p>Contenu initial généré par GPT</p>");
  const searchParams = useSearchParams();


  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:3000/api/content/generate', {
        title,
        style,
        length,
        provider,
        platform,
      });

      setGeneratedContent(response.data.content);
    } catch (err) {
      console.error('Erreur génération :', err);
      setError('Erreur lors de la génération');
    } finally {
      setLoading(false);
    }
  };

  
  const saveContent = async () => {
    try {
      console.log('tentative d enregistrement')
      const response  = await axios.post('http://localhost:3000/api/content', {
        title,
        style,
        length,
        provider,
        platform,
        content: generatedContent,
        
      });
     console.log("✅ Enregistrement réussi :", response.data);
    alert("Contenu enregistré avec succès !");
    fetchContents(); // rafraîchit la liste
  } catch (error) {
    console.error(" Erreur enregistrement :", error);
    alert("Erreur lors de l'enregistrement.");
  }
  };

  const fetchContents = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/content');
      setContents(res.data);
    } catch (err) {
      console.error('Erreur lors du fetch des contenus :', err);
    }
  };

  useEffect(() => {
  const t = searchParams.get('title');
  if (t) setTitle(t);
}, [searchParams]);
  useEffect(() => {
    fetchContents();
  }, []);


  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const prefilledTitle = params.get('title');
  if (prefilledTitle) setTitle(prefilledTitle);
}, []);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Générateur de contenu IA</h1>

      <div className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          type="text"
          placeholder="Titre de l'article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select className="w-full border p-2 rounded" value={style} onChange={(e) => setStyle(e.target.value)}>
          <option value="standard">Style standard</option>
          <option value="marketing">Style marketing</option>
          <option value="humour">Style humour</option>
        <option value="formal">Formel</option>
             <option value="casual">Décontracté</option>
             <option value="professional">Professionnel</option>
             <option value="academic">Académique</option>
             <option value="creative">Créatif</option>
             <option value="persuasive">Persuasif</option>
             <option value="informative">Informatif</option>
        </select>

        <select className="w-full border p-2 rounded" value={length} onChange={(e) => setLength(e.target.value)}>
          <option value="short">un text Court</option>
          <option value="medium">un texteMoyen</option>
          <option value="long"> un texte Long</option>
        </select>

 <select className="w-full border p-2 rounded" value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="linkedin">LINKEDIN</option>
          <option value="blog">BLOG</option>
          <option value="facebook"> FACEBOOK</option>
          <option value="instagram"> INSTAGRAM</option>
          <option value="twiter"> TWITER(X)</option>
        </select>

        <select className="w-full border p-2 rounded" value={provider} 
        onChange={(e) => setProvider(e.target.value as 'gpt-4' | 'deepseek')}>
          <option value="gpt-4">GPT-4</option>
          <option value="gpt-4o">GPT-4o</option>
          <option value="deepseek">DeepSeek</option>
        </select>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? 'Génération...' : 'Générer'}
        </button>
      </div>

      {generatedContent && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Contenu généré :</h2>
          <Editor content={generatedContent} onUpdate={setGeneratedContent} />
          {/* <textarea
            className="w-full border p-2 rounded min-h-[200px]"
            value={generatedContent}
            readOnly
          /> */}
          
          <button
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
            onClick={saveContent} disabled={!generatedContent} 
          >
            Enregistrer
          </button>
        </div>
      )}

      
    </main>
  );
}


