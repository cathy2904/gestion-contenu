import React from 'react';
import { useRouter } from 'next/router';
import ContentForm from '@/app/components/ContentForm';

const EditContentPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Modifier le contenu</h1>
      <ContentForm contentId={id as string} />
    </div>
  );
};

export default EditContentPage;
