import { useState, useEffect } from "react";

export const useToken = () => {
  const [token, setToken] = useState(() => localStorage.getItem("access_token"));

  useEffect(() => {
    const onChange = () => setToken(localStorage.getItem("access_token"));
    window.addEventListener("localStorageChange", onChange);

    return () => {
      window.removeEventListener("localStorageChange", onChange);
    };
  }, []);

  return {
    token,
  };
};