import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocalStorage } from "../hooks/useLocalStorage"; // Asegúrate de usar la ruta correcta

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { getItem, setItem, removeItem } = useLocalStorage();
  const navigate = useNavigate();

  // Inicializa `user` y `token` directamente desde `localStorage`
  const [user, setUser] = useState(() => getItem("user") || null);
  const [token, setToken] = useState(() => getItem("Token") || "");

  // Sincroniza el estado `user` y `token` con `localStorage` si estos cambian
  useEffect(() => {
    if (user) {
      setItem("user", user);
    } else {
      removeItem("user");
    }
    if (token) {
      setItem("Token", token);
    } else {
      removeItem("Token");
    }
  }, [user, token, setItem, removeItem]);

  const loginAction = async (data, onSuccess) => {
    try {
      const response = await axios.post(
        "/login/",
        {
          username_or_email: data.username,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = response.data;
      if (res.user && res.token) {
        setUser(res.user);
        setToken(`Token ${res.token}`);
        if (onSuccess) onSuccess();
      } else {
        throw new Error("No se encontró el usuario.");
      }
    } catch (err) {
      console.error("Error en loginAction:", err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
