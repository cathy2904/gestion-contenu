import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Content } from '../content/types/content';
import { createContent, fetchContentById, updateContent } from '../content/api/api';


interface ContentFormProps {
  contentId?: string;
}

const ContentForm: React.FC<ContentFormProps> = ({ contentId }) => {
  const [title, setTitle] = useState('');
  const [style, setStyle] = useState('');
  const [length, setLength] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (contentId) {
      const getContent = async () => {
        const data = await fetchContentById(contentId);
        setTitle(data.title);
        setStyle(data.style);
        setLength(data.length);
      };
      getContent();
    }
  }, [contentId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const contentData = { title, style, length };
    if (contentId) {
      await updateContent(contentId, contentData);
    } else {
      await createContent(contentData);
    }
    router.push('/content');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Style:</label>
        <input value={style} onChange={(e) => setStyle(e.target.value)} />
      </div>
      <div>
        <label>Longueur:</label>
        <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} />
      </div>
      <button type="submit">{contentId ? 'Mettre à jour' : 'Créer'}</button>
    </form>
  );
};

export default ContentForm;
