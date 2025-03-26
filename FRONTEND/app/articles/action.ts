'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Article {
  _id?: string;
  title: string;
  content: string;
  author: string;
}

export async function createArticle(formData: FormData) {
  const rawData = {
    title: formData.get('title'),
    content: formData.get('content'),
    author: formData.get('author')
  };

  try {
    const response = await fetch(`${API_URL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rawData),
    });

    if (!response.ok) {
      throw new Error('Failed to create article');
    }

    revalidatePath('/articles');
    return { success: true, message: 'Article créé avec succès' };
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: 'Erreur lors de la création' };
  }
}

export async function updateArticle(id: string, formData: FormData) {
  const rawData = {
    title: formData.get('title'),
    content: formData.get('content'),
    author: formData.get('author')
  };

  try {
    const response = await fetch(`${API_URL}/articles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rawData),
    });

    if (!response.ok) {
      throw new Error('Failed to update article');
    }

    revalidatePath('/articles');
    revalidatePath(`/articles/${id}`);
    return { success: true, message: 'Article mis à jour avec succès' };
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: 'Erreur lors de la mise à jour' };
  }
}

export async function deleteArticle(id: string) {
  try {
    const response = await fetch(`${API_URL}/articles/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete article');
    }

    revalidatePath('/articles');
    return { success: true, message: 'Article supprimé avec succès' };
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: 'Erreur lors de la suppression' };
  }
}

export async function getArticle(id: string) {
  try {
    const response = await fetch(`${API_URL}/articles/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch article');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    redirect('/articles');
  }
}