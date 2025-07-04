'use client';
import { useState } from 'react';
import axios from 'axios';

export default function NewIdeaForm() {
  const [ideaTitle, setIdeaTitle] = useState('');

  const saveIdea = async () => {
    if (!ideaTitle.trim()) return alert("Veuillez entrer un titre.");
    try {
      await axios.post('http://localhost:3000/api/content/idea', {
        title: ideaTitle,
      });
      alert("Idée enregistrée !");
      setIdeaTitle('');
    } catch (err) {
      console.error("Erreur sauvegarde idée :", err);
      alert("Erreur lors de la sauvegarde.");
    }
  };

  return (
    <div className="p-4 border rounded mb-6">
      <h3 className="text-lg font-semibold mb-2"> Ajouter une idée</h3>
      <input
        type="text"
        value={ideaTitle}
        onChange={(e) => setIdeaTitle(e.target.value)}
        placeholder="Une idée de titre..."
        className="w-full border px-3 py-2 rounded mb-2"
      />
      <button
        onClick={saveIdea}
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Enregistrer comme idée
      </button>
    </div>
  );
}
