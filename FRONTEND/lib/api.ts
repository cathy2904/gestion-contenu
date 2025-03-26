export interface Article {
    _id: string;
    title: string;
    content: string;
    author: string;
    createdAt: string;
  }
  
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3003';
  
  export const getArticles = async (): Promise<Article[]> => {
    const response = await fetch(`${API_BASE_URL}/articles`);
    return response.json();
  };
  
  export const getArticle = async (id: string): Promise<Article> => {
    const response = await fetch(`${API_BASE_URL}/articles/${id}`);
    return response.json();
  };
  
  export const createArticle = async (article: Omit<Article, '_id' | 'createdAt'>) => {
    const response = await fetch(`${API_BASE_URL}/articles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    });
    return response.json();
  };
  
  export const updateArticle = async (id: string, article: Partial<Article>) => {
    const response = await fetch(`${API_BASE_URL}/articles/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    });
    return response.json();
  };
  
  export const deleteArticle = async (id: string) => {
    await fetch(`${API_BASE_URL}/articles/${id}`, {
      method: 'DELETE',
    });
  };



// export interface Article {
//     _id: string;
//     title: string;
//     content: string;
//     author: string;
//     createdAt: string;
//   }
  
//   const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  
//   export const fetchArticles = async (): Promise<Article[]> => {
//     const res = await fetch(`${API_URL}/articles`);
//     return res.json();
//   };
  
//   export const fetchArticle = async (id: string): Promise<Article> => {
//     const res = await fetch(`${API_URL}/articles/${id}`);
//     return res.json();
//   };
  
//   export const createArticle = async (article: Omit<Article, '_id' | 'createdAt'>): Promise<Article> => {
//     const res = await fetch(`${API_URL}/articles`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(article),
//     });
//     return res.json();
//   };
  
//   export const updateArticle = async (id: string, article: Partial<Article>): Promise<Article> => {
//     const res = await fetch(`${API_URL}/articles/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(article),
//     });
//     return res.json();
//   };
  
//   export const deleteArticle = async (id: string): Promise<void> => {
//     await fetch(`${API_URL}/articles/${id}`, {
//       method: 'DELETE',
//     });
//   };