
'use client';
import { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../post/service/api';
import Link from 'next/link';

export default function PostList() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <h1>Liste des Posts</h1>
      <Link href="/posts/create">
        <button className="create-btn">Créer un nouveau post</button>
      </Link>
      <div className="post-grid">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Auteur: {post.author}</p>
            {post.image && (
              <img src={post.image} alt={post.title} className="post-image" />
            )}
            <div className="post-actions">
              <Link href={`/posts/${post._id}`}>
                <button className="edit-btn">Modifier</button>
              </Link>
              <button
                onClick={() => handleDelete(post._id)}
                className="delete-btn"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}