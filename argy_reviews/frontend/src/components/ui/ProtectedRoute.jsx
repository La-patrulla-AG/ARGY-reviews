import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN } from "../../api/constants";
import { useMe } from "../hooks/useMe";
import api from "../../api/api";

// Helper para obtener una cookie por su nombre
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

const ProtectedRoute = ({ children }) => {
  const { user, error, isLoading, refetch } = useMe();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (
      error?.response?.data?.code === "token_not_valid" ||
      user?.error === "token_expired"
    ) {
      const refreshToken = getCookie("refreshToken");
      if (refreshToken) {
        api
          .post("http://127.0.0.1:8000/token/refresh/", {
            refresh: refreshToken,
          })
          .then((response) => {
            localStorage.setItem(ACCESS_TOKEN, response.data.access);
            refetch().finally(() => setChecking(false));
          })
          .catch((err) => {
            console.error("Error al refrescar token:", err);
            setChecking(false);
          });
      } else {
        setChecking(false);
      }
    } else {
      setChecking(false);
    }
  }, [isLoading, error, user, refetch]);

  // Mientras se carga o se está verificando el token, muestra un loading...
  if (isLoading || checking) {
    return <div>Loading...</div>;
  }

  // Si después de intentar refrescar el token no hay usuario, redirige a login
  if (!user) {
    return <Navigate to="/" />;
  }

  // Si se cumple todo, renderiza las rutas protegidas
  return children;
};

export default ProtectedRoute;
