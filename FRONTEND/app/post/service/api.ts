import axios from 'axios';
// import { UpdatePostDto, Post } from '../types/post'; // eslint-disable-next-line @typescript-eslint/no-unused-vars
//import { CreatePostData, Post, UpdatePostData } from '../../types/post';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});
export const getPosts = () => api.get('/posts');
export const getPost = (id: string) => api.get(`/posts/${id}`);
export const createPost = (postData: FormData) => api.post('/posts', postData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
// export const updatePost = (id: string, postData: any) => api.put(`/posts/${id}`, postData); // eslint-disable-next-line @typescript-eslint/no-unused-vars

      
export const deletePost = (id: string) => api.delete(`/posts/${id}`);
// export const getPosts = () => api.get('/posts');
// export const getPost = (id: string) => api.get(`/posts/${id}`);
// export const createPost = (postData: any) => api.post('/posts', postData);
// export const updatePost = (id: string, postData: any) => api.put(`/posts/${id}`, postData);
// export const deletePost = (id: string) => api.delete(`/posts/${id}`);