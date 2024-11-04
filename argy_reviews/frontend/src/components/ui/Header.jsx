import "../../../static/css/homePage.css";
import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Search, Power } from "lucide-react";
import { useAuth } from "../context/AuthContext";
const Header = () => {
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { logOut, user } = useAuth();

  const token = user?.token;

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
            className="w-full pl-10 pr-4 py-2 rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:ring-2  dark:border-gray-700 dark:bg-gray-800 focus:ring-blue-500"
          />
        </div>
        {!token ? (
          <div>
            <button
              className="mr-2 px-4 py-2 border text-gray-700 bg-white rounded-md  dark:bg-gray-800 border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-white"
              onClick={() => setMostrarLogin(true)}
            >
              Acceder
            </button>
            <button
              className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-600"
              onClick={() => setMostrarRegistro(true)}
            >
              Registrarse
            </button>
          </div>
        ) : (
          <div>
            <button
              className="mr-2 px-4 py-2 border text-gray-700 bg-white rounded-md  dark:bg-gray-800 border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-white"
              onClick={logOut}
            >
              Cerrar Sesión
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
