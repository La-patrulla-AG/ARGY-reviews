import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";
import { logout } from "./auth";

// Helper para obtener una cookie
export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const api = axios.create({
  baseURL: "http://localhost:8000",
});

// Interceptor para agregar el access token a cada petición
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para manejar respuestas y refrescar el token si es necesario
// Interceptor para manejar respuestas y refrescar el token si es necesario
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403)
    ) {
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = getCookie(REFRESH_TOKEN);
        if (!refreshToken) {
          logout();
          return Promise.reject(error);
        }
        try {
          const { data } = await axios.post(
            "http://127.0.0.1:8000/token/refresh/",
            { refresh: refreshToken }
          );
          const newAccess = data.access;
          localStorage.setItem(ACCESS_TOKEN, newAccess);
          api.defaults.headers.common["Authorization"] = `Bearer ${newAccess}`;
          originalRequest.headers["Authorization"] = `Bearer ${newAccess}`;
          return api(originalRequest);
        } catch (refreshError) {
          logout();
          return Promise.reject(refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;