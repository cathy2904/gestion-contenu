import axios from "axios";

const API_URL = process.env.NEXT_API_URL || "http://localhost:3003/api";

// Créer une instance axios avec une URL de base
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepteur pour ajouter le token aux requêtes
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:3003',
// });

// // Intercepteur pour ajouter le token
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;