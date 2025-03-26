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

  const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true,
  });

  // Fonction pour générer un article
  async function handleGenerate() {
    try {
      setLoading(true);
      setError(null);

      // Appel à l'API OpenAI pour générer un article
      const completion = await openai.chat.completions.create({
        messages: [
          { role: 'system', content: 'Vous êtes un rédacteur professionnel.' },
          { role: 'user', content: `Écris un article sur : ${title}` },
        ],
        model: 'gpt-4o',
        max_completion_tokens: 300,
      });

      const generatedText = completion.choices[0].message.content || '';
      setGeneratedContent(generatedText); // Afficher le contenu généré
    } catch (err) {
      console.error('Erreur lors de la génération du contenu:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  }

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
      backgroundColor: 'dark',
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
      <div style={styles.container}>
      <h1 style={styles.title}>Générer un article</h1>
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
        </div>
      )}
    </div>



    </Principal>  )
}