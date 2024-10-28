import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  // podemos volver a exportar los métodos u objetos de usuario desde este hook
  const { user, addUser, removeUser, setUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }
  }, [addUser, getItem]);

  const login = (user) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout, setUser };
};
