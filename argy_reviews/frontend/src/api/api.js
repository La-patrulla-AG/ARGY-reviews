import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // Ajusta esto según tu base URL
  
});

const token = localStorage.getItem("token");
if (token) {
  api.defaults.headers.Authorization = `Token ${token}`;
}

export const setNewToken = (token) => {
  token ??= false;
  
  api.defaults.headers.Authorization = token ? `Token ${token}` : token;
  token
    ? localStorage.setItem("token", token)
    : localStorage.removeItem("token");
};
export default api;
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


