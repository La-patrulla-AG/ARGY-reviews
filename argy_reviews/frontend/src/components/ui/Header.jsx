import "../../../static/css/homePage.css";
import React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Search, Power } from "lucide-react";
import { useAuth } from "../context/AuthContext";
const Header = () => {
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const { logOut } = useAuth();
  const token = localStorage.getItem("Token");

  return (
    <>
      <header className="flex justify-between items-center mb-8 p-8 ml-14">
        <div className="relative flex-1 max-w-4xl">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Buscar"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border bg-gray-200 border-gray-500 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {!token ? (
          <div>
            <button
              className="mr-2 px-4 py-2 border rounded hover:bg-gray-300 dark:hover:bg-gray-700 dark:border-gray-600 text-black dark:text-white"
              onClick={() => setMostrarLogin(true)}
            >
              Acceder
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-600"
              onClick={() => setMostrarRegistro(true)}
            >
              Registrarse
            </button>
          </div>
        ) : (
          <div>
            <button className="mr-4 px-4 py-2 rounded " onClick={logOut}>
              <Power size={35}></Power>
            </button>
          </div>
        )}
      </header>

      {mostrarLogin && <LoginForm onClose={() => setMostrarLogin(false)} />}
      {mostrarRegistro && (
        <RegisterForm onClose={() => setMostrarRegistro(false)} />
      )}
    </>
  );
};

export default Header;
