'use client';
import { useState } from 'react';

const UploadAndAnalyze = () => {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Veuillez sélectionner un fichier.');
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Envoyer le fichier à votre API route Next.js
      const response = await fetch('analyze/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'analyse du document.');
      }

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue lors de l\'analyse du document.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Uploader et Analyser un Document</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Analyse en cours...' : 'Analyser'}
      </button>
      {summary && (
        <div>
          <h2>Résumé:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default UploadAndAnalyze;