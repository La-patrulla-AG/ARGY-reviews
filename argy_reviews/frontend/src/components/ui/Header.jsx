import { Search } from "lucide-react";
import React, { useState } from "react";
import "../../../static/css/homePage.css";
import { logout } from "../../api/auth";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [view, setView] = useState(null);
  const token = localStorage.getItem("token");

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
            className="w-full pl-10 pr-4 py-2 rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:ring-2  dark:border-gray-700 dark:bg-gray-800 focus:ring-blue-500"
          />
        </div>
        {!token ? (
          <div>
            <button
              className="mr-2 px-4 py-2 border text-gray-700 bg-white rounded-md  dark:bg-gray-800 border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-white"
              onClick={() => setView("login")}
            >
              Acceder
            </button>
            <button
              className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-600"
              onClick={() => setView("register")}
            >
              Registrarse
            </button>
          </div>
        ) : (
          <div>
            <button
              className="mr-2 px-4 py-2 border text-gray-700 bg-white rounded-md  dark:bg-gray-800 border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-white"
              onClick={() => logout().then(() => (window.location.href = "/"))}
            >
              Cerrar Sesión
            </button>
          </div>
        )}
      </header>

      {view === "login" && <LoginForm onClose={() => setView(null)} />}
      {view === "register" && <RegisterForm onClose={() => setView(null)} />}
    </>
  );
};

export default Header;
