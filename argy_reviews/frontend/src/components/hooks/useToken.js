import { useState, useEffect } from "react";
import { ACCESS_TOKEN } from "../../api/constants";

export const useToken = () => {
  const [token, setToken] = useState(() => localStorage.getItem(ACCESS_TOKEN));

  useEffect(() => {
    const onChange = () => setToken(localStorage.getItem(ACCESS_TOKEN));
    window.addEventListener("localStorageChange", onChange);

    return () => {
      window.removeEventListener("localStorageChange", onChange);
    };
  }, []);

  return {
    token,
  };
};
