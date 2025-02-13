import api from "./api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

// document.cookie = "sessionid=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";

// export const login = ({ username, password }) =>
//   api
//     .post("/token/", {
//       username: username,
//       password,
//     })
//     .then(({ data }) => {
//       localStorage.setItem(ACCESS_TOKEN, data.access);
//       localStorage.setItem(REFRESH_TOKEN, data.refresh);
//       return data;
//     });

// export const logout = async () => {
//   localStorage.removeItem(ACCESS_TOKEN);
//   localStorage.removeItem(REFRESH_TOKEN);
//   api.post("/logout/")
// }

// authActions.js

export const login = async ({ username, password }) => {
  // const queryClient = useQueryClient();
  try {
    const response = await api.post("/token/", {
      username,
      password,
    });
    const { access, refresh } = response.data;

    // Guarda el access token en localStorage
    localStorage.setItem(ACCESS_TOKEN, access);
    // Guarda el refresh token en una cookie
    document.cookie =
      REFRESH_TOKEN + `=${refresh}; path=/; secure; samesite=strict;`;

    // Opcional: actualiza el header global de axios
    api.defaults.headers.common["Authorization"] = `Bearer ${access}`;
    
  } catch (error) {
    console.error("Error en login:", error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  (document.cookie = REFRESH_TOKEN),
    `=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  // Opcional: remover el header de autorización
  delete axios.defaults.headers.common["Authorization"];
  api.post("/logout/");
  window.location.href = "/";
};
