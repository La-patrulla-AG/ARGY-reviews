import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Ajusta esto según tu base URL
});

export const setNewToken = token => 
  api.defaults.headers.Authorization = token ? `Bearer ${token}` : false

/* // Agregar el interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Asegúrate de que el token esté guardado correctamente en localStorage
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
); */

export default api;
