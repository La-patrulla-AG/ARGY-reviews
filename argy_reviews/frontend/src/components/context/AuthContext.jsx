// import { createContext } from "react";

// export const AuthContext = createContext({
//   user: null,
//   setUser: () => {},
// });

import React, { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("Token") || "");
  const navigate = useNavigate();

  const loginAction = async (data) => {
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
      if (res.user) {
        setUser(res.user);
        setToken(res.token);
        localStorage.setItem("Token", `Token ${res.token}`);
        navigate("/");
        return;
      } else {
        throw new Error("No se encontró el usuario.");
      }
    } catch (err) {
      console.error("Error at loginAction:", err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("Token");
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
