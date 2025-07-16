import Link from 'next/link';

interface Article {
  _id: string;
  title: string;
  content: string;
  author: string;
}

interface ArticleTableProps {
  articles: Article[];
}
const handleDelete = async (id: string) => { // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const res = await fetch(`http://localhost:3003/articles/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      alert('Article supprimé avec succès');
      window.location.reload(); // Recharger la page pour mettre à jour la liste
    }
  };

export default function ArticleTable({ articles }: ArticleTableProps) {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Titre</th>
          <th className="py-2 px-4 border-b">Contenu</th>
          <th className="py-2 px-4 border-b">Auteur</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article) => (
          <tr key={article._id} className="hover:bg-gray-50">
            <td className="py-2 px-4 border-b">{article.title}</td>
            <td className="py-2 px-4 border-b">{article.content}</td>
            <td className="py-2 px-4 border-b">{article.author}</td>
            <td className="py-2 px-4 border-b">
              <Link
                href={`/articles/${article._id}/edit`}
                className="text-blue-500 hover:text-blue-700 mr-2"
              >
                Modifier
              </Link>
              <button className="text-red-500 hover:text-red-700">Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}