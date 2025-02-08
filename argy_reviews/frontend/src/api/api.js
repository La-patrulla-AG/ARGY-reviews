import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

const token = localStorage.getItem("access_token");
if (token) {
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export const setNewToken = (token) => {
  token ??= false;

  api.defaults.headers.Authorization = token ? `Bearer ${token}` : token;
  token
    ? localStorage.setItem("access_token", token)
    : localStorage.removeItem("access_token");
};

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        console.error("Error 401: No autorizado. Redirigiendo al login...");
      } else if (status === 403) {
        console.error("Error 403: Acceso prohibido.");
      } else if (status === 404) {
        console.warn("Error 404: Recurso no encontrado.");
        return Promise.resolve({ data: [] });
      } else {
        console.error(`Error ${status}: ${error.message}`);
      }
    } else {
      console.error("Error de red o servidor no disponible.");
    }
    return Promise.reject(error);
  }
);

export default api;