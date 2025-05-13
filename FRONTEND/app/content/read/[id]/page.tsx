import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Content } from '../../types/content';
import ContentList from '@/app/components/ContentList';
// import { fetchContentById } from '../../api/api';
import { fetchContentById } from '../../api/route';
import { fetchContents } from '../../api/route';

const ReadContentPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    if (id) {
      const getContent = async () => {
        const data = await fetchContentById(id as string);
        setContent(data);
      };
      getContent();
    }
  }, [id]);

  if (!content) return <p>Chargement...</p>;

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.texte}</p>
    </div>
  );
};

export default ReadContentPage;
