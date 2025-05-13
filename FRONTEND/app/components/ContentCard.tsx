import React from 'react';
import { Content } from '../content/types/content';

interface ContentCardProps {
  content: Content;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  return (
    <div>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
    </div>
  );
};

export default ContentCard;
