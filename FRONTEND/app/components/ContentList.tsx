import React from 'react';
import { Content } from '../content/types/content';
import ContentCard from './ContentCard';

interface ContentListProps {
  contents: Content[];
}

const ContentList: React.FC<ContentListProps> = ({ contents }) => {
    if (!Array.isArray(contents)) {
        return <p>⚠️ Aucune donnée trouvée ou mauvais format.</p>;
      }
  return (
    <div>
        <button></button>
      {contents.map((content) => (
        <ContentCard key={content._id} content={content} />
      ))}
    </div>
  );
};

export default ContentList;
