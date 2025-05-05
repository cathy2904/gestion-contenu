'use client';
import Principal from "@/components/Principal";

import { useState } from 'react';
import OpenAI from 'openai';
import AnalysisPage from "../analysis/page";
import Link from "next/link";

export default function ContentPage() {
  const [title, setTitle] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [model, setModel] = useState<'openai' | 'deepseek'>('openai')


  // const openai = new OpenAI({
  //   apiKey: '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',
  //   dangerouslyAllowBrowser: true,
  // });

  // Fonction pour générer un article
  async function handleGenerate() {
    try {
      setLoading(true);
      setError(null);

      const apiKey =
      model === 'openai'
        ? process.env.NEXT_PUBLIC_OPENAI_API_KEY
        : process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY
        

    const url =
      model === 'openai'
        ? 'https://api.openai.com/v1/chat/completions'
        : 'https://api.deepseek.com/chat/completions'

        console.log("API Key utilisée:", apiKey)
console.log("URL utilisée:", url)
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: model === 'openai' ? 'gpt-4o' : 'deepseek-chat',
            messages: [
              { role: 'system', content: 'Tu es un rédacteur professionnel.' },
              { role: 'user', content: `Écris un article sur : ${title}` },
            ],
            max_tokens: 500,
          }),
        })
  
        const result = await response.json()
        const content = result?.choices?.[0]?.message?.content || ''
        setGeneratedContent(content)
      } catch (err) {
        console.error(err)
        setError("Une erreur est survenue lors de la génération de l'article.")
      } finally {
        setLoading(false)
      }}

      // Appel à l'API OpenAI pour générer un article
  //     const completion = await openai.chat.completions.create({
  //       messages: [
  //         { role: 'system', content: 'Vous êtes un rédacteur professionnel.' },
  //         { role: 'user', content: `Écris un article sur : ${title}` },
  //       ],
  //       model: 'gpt-4o',
  //       max_completion_tokens: 300,
  //     });

  //     const generatedText = completion.choices[0].message.content || '';
  //     setGeneratedContent(generatedText); // Afficher le contenu généré
  //   } catch (err) {
  //     console.error('Erreur lors de la génération du contenu:', err);
  //     setError(err instanceof Error ? err.message : 'Une erreur est survenue');
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // Fonction pour enregistrer le contenu généré dans MongoDB
  async function handleSave() {
    try {
      setSaving(true);
      setError(null);

      if (!generatedContent) {
        throw new Error('Aucun contenu généré à enregistrer.');
      }

      // Envoyer le contenu généré au backend pour enregistrement
      const saveResponse = await fetch('/analyse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content: generatedContent }),
      });

      if (!saveResponse.ok) {
        throw new Error('Erreur lors de l\'enregistrement du contenu');
      }

      const data = await saveResponse.json();
      alert('Contenu enregistré avec succès !');
      console.log('Contenu enregistré:', data);
    } catch (err) {
      console.error('Erreur lors de l\'enregistrement:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setSaving(false);
    }
  }

  // Styles CSS internes
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'dark',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '10px',
    },
    buttonDisabled: {
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
    },
    error: {
      color: 'red',
      marginBottom: '20px',
    },
    generatedContent: {
      marginTop: '20px',
      padding: '20px',
      backgroundColor: 'black',
      border: '1px solid #ddd',
      borderRadius: '4px',
      color: 'white',
    },
    generatedContentTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#333',
    },
    generatedContentText: {
      fontSize: '16px',
      color: '#FFFFFF',
      lineHeight: '1.6',
    },
  };


  return (
<Principal titre="Contents">
      <h1>Content Home</h1>

      <Link href="contenu/analyze/">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Aller à la page d'analyse
        </button>
      </Link>
      <Link href="contenu/deepseek/">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Avec Deepseek
        </button>
      </Link>
      {/* <div style={styles.container}> */}
      <div className="mb-4">
        <label htmlFor="model" className="mr-2 font-medium">Choisir le moteur :</label>
        <select
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value as 'openai' | 'deepseek')}
          className="border rounded p-2 text-gray"
        >
          <option value="openai">CHAT GPT</option>
          <option value="deepseek">DeepSeek</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="Entre un sujet ou un titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full mb-4"
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Génération...' : 'Générer l’article'}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {generatedContent && (
        <div className="mt-6 p-4 border text-black rounded bg-gray-100 whitespace-pre-wrap">
          {generatedContent}
        </div>
      )}
      {/* <h1 style={styles.title}>Générer un article</h1>
      <input
        type="text"
        placeholder="Entrez le titre de l'article"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{ ...styles.button, ...(loading ? styles.buttonDisabled : {}) }}
      >
        {loading ? 'Génération en cours...' : 'Générer'}
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {generatedContent && (
        <div style={styles.generatedContent}>
          <h2 style={styles.generatedContentTitle}>Article généré :</h2>
          <p style={styles.generatedContentText}>{generatedContent}</p>
          <button
            onClick={handleSave}
            disabled={saving}
            style={{ ...styles.button, ...(saving ? styles.buttonDisabled : {}) }}
          >
            {saving ? 'Enregistrement en cours...' : 'Enregistrer'}
          </button>
        </div> */}
      {/* )} */}
    {/* </div> */}



    </Principal>  )
}