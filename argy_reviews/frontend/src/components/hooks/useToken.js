import { useState, useEffect } from "react";

export const useToken = () => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  useEffect(() => {
    const onChange = () => setToken(localStorage.getItem("token"));
    window.addEventListener("localStorageChange", onChange);

    return () => {
      window.removeEventListener("localStorageChange", onChange);
    };
  }, []);

  return {
    token,
  };
};
