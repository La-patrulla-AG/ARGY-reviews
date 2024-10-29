import "../../../static/css/homePage.css";
import React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Search } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const {user, logout}=useAuth();
  console.log(user)

  return (
    <>
      <header className="flex justify-between items-center mb-8 p-8 ml-14">
        <div className="relative w-2/3">
          <input
            type="search"
            placeholder="Buscar..."
            className="w-2/3 p-2 pl-8 rounded bg-gray-200 border-gray-500 dark:border-gray-700 dark:bg-gray-800"
          />
          <Search className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        { !user ? (
          <div>
            <button
              className="mr-2 px-4 py-2 border rounded hover:bg-gray-300 dark:hover:bg-gray-700 dark:border-gray-600 text-black dark:text-white"
              onClick={() => setMostrarLogin(true)}
            >
              Acceder
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setMostrarRegistro(true)}
            >
              Registrarse
            </button>
          </div>
        ) :(<div>
                      <button
              className="mr-2 px-4 py-2 border rounded bg-gray-500 hover:bg-gray-600 dark:hover:bg-gray-400 dark:border-gray-300 text-gray-300 dark:text-white"
              onClick={() => logout}
            >
              Cerrar Sesión
            </button>
        </div>)
        }
      </header>

      {mostrarLogin && <LoginForm onClose={() => setMostrarLogin(false)} />}
      {mostrarRegistro && (
        <RegisterForm onClose={() => setMostrarRegistro(false)} />
      )}
    </>
  );
};

export default Header;
