import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3003/api',
});
export const getPosts = () => api.get('/posts');
export const getPost = (id: string) => api.get(`/posts/${id}`);
export const createPost = (postData: FormData) => api.post('/posts', postData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
export const updatePost = (id: string, postData: FormData) =>
    axios.put(`http://localhost:3003/api/posts/${id}`, postData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
export const deletePost = (id: string) => api.delete(`/posts/${id}`);
// export const getPosts = () => api.get('/posts');
// export const getPost = (id: string) => api.get(`/posts/${id}`);
// export const createPost = (postData: any) => api.post('/posts', postData);
// export const updatePost = (id: string, postData: any) => api.put(`/posts/${id}`, postData);
// export const deletePost = (id: string) => api.delete(`/posts/${id}`);