import "../../../static/css/homePage.css";
import React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import axios from "axios";
import {
    Search
  } from "lucide-react";

const Header = () => {
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center mb-8 p-8 ml-14">
        <div className="relative w-2/3">
          <input
            type="search"
            placeholder="Buscar..."
            className="w-2/3 p-2 pl-8 rounded bg-gray-200 border-gray-500 dark:border-gray-700 dark:bg-gray-800"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div>
          <button
            className="mr-2 px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
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
      </header>

      {mostrarLogin && <LoginForm onClose={() => setMostrarLogin(false)} />}
      {mostrarRegistro && (
        <RegisterForm onClose={() => setMostrarRegistro(false)} />
      )}
    </>
  );
};

export default Header;
