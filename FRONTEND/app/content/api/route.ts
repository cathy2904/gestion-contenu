import axios from 'axios';

export const generateContent = async (data: {
  title: string;
  style: string;
  length: string;
  provider: string;
}) => {
  const res = await axios.post('http://localhost:3003/api/content/generate', data);
  return res.data;
};

export const saveContent = async (data: {
  title: string;
  content: string;
  style: string;
  length: string;
  provider: string;
}) => {
  const res = await axios.post('/api/save', data);
  return res.data;
};

export const fetchContents = async () => {
  const res = await axios.get('/api/contents');
  return res.data;
};


// import axios from 'axios';
// import { Content, ContentFormData, GenerateContentData } from '../types/content';

// const API_URL = process.env.NEXT_API_URL || 'http://localhost:3000';

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // export const getContents = async (): Promise<Content[]> => {
// //   const response = await api.get('/content');
// //   return response.data;
// // };
// export const fetchContents = async (): Promise<Content[]> => {
//     const response = await axios.get(`${API_URL}/content`);
//     return response.data;
//   };

// export const getContent = async (id: string): Promise<Content> => {
//   const response = await api.get(`/content/${id}`);
//   return response.data;
// };

// export const createContent = async (contentData: ContentFormData): Promise<Content> => {
//   const response = await api.post('/content', contentData);
//   return response.data;
// };

// export const fetchContentById = async (id: string): Promise<Content> => {
//     const response = await axios.get(`${API_URL}/content/${id}`);
//     return response.data;
//   };

// export const generateContentOnly = async (generateData: GenerateContentData): Promise<string> => {
//   const response = await api.post('/content/generate', generateData);
//   return response.data.content;
// };

// export const deleteContent = async (id: string): Promise<void> => {
//   await api.delete(`/content/${id}`);
// };



// import axios from 'axios';
// import { Content } from '../types/content';

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// export const fetchContents = async (): Promise<Content[]> => {
//   const response = await axios.get(`${API_BASE_URL}/content`);
//   return response.data;
// };

// export const fetchContentById = async (id: string): Promise<Content> => {
//   const response = await axios.get(`${API_BASE_URL}/content/${id}`);
//   return response.data;
// };

// export const createContent = async (contentData: Partial<Content>): Promise<Content> => {
//   const response = await axios.post(`${API_BASE_URL}/content`, contentData);
//   return response.data;
// };

// export const updateContent = async (id: string, contentData: Partial<Content>): Promise<Content> => {
//   const response = await axios.put(`${API_BASE_URL}/content/${id}`, contentData);
//   return response.data;
// };
