import api from "./api";
import { ACCESS_TOKEN , REFRESH_TOKEN} from "./constants";

// Función para establecer una cookie segura
const setSecureCookie = (name, value, days) => {
  const expires = new Date(Date.now() + days * 86400000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; Secure; HttpOnly; SameSite=Strict`;
};

// Función para obtener el valor de una cookie
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

// Función para eliminar una cookie
const deleteCookie = (name) => {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
};

export const login = ({ username, password }) =>
  api
    .post("/token/", {
      username,
      password,
    })
    .then(({ data }) => {
      localStorage.setItem(ACCESS_TOKEN, data.access);
      setSecureCookie(REFRESH_TOKEN, data.refresh, 7); // La cookie expira en 7 días
      return data;
    });

export const logout = async () => {
  localStorage.removeItem(ACCESS_TOKEN);
  deleteCookie(REFRESH_TOKEN);
  await api.post("/logout/");
};
