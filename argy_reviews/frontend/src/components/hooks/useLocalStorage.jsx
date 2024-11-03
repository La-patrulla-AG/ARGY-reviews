import { useState } from "react";

export const useLocalStorage = () => {
  const [value, setValue] = useState(null);

  const setItem = (key, value) => {
    const valueToStore =
      typeof value === "object" ? JSON.stringify(value) : value;
    localStorage.setItem(key, valueToStore);
    setValue(value);
  };

  const getItem = (key) => {
    const storedValue = localStorage.getItem(key);
    try {
      return storedValue ? JSON.parse(storedValue) : null;
    } catch (error) {
      return storedValue; // Si no es JSON, lo retorna como string
    }
  };

  const removeItem = (key) => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return { value, setItem, getItem, removeItem };
};
