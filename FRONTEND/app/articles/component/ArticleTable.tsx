// components/articles/ArticleTable.tsx
import Link from 'next/link';
import { Article } from '../action';
import { deleteArticle } from '../action'; // eslint-disable-next-line @typescript-eslint/no-unused-vars

interface ArticleTableProps {
  articles: Article[];
}

export default function ArticleTable({ articles }: ArticleTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-dark border border-gray-200">
        <thead>
          <tr className="bg-dark-100">
            <th className="py-2 px-4 border-b text-left">Titre</th>
            <th className="py-2 px-4 border-b text-left">Contenu</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article._id} className="hover:bg-light-50">
              <td className="py-2 px-4 border-b">{article.title}</td>
              <td className="py-2 px-4 border-b">{article.content}</td>
              <td className="py-2 px-4 border-b space-x-2">
                <Link
                  href={`/articles/${article._id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Voir
                </Link>
                <Link
                  href={`/articles/${article._id}/edit`}
                  className="text-green-500 hover:text-green-700"
                >
                  Modifier
                </Link>
                {/* <button
                  onClick={() => deleteArticle(article._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Supprimer
                </button> */}
                <button
                  
                  className="text-red-500 hover:text-red-700"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}