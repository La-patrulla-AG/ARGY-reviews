import { Search } from "lucide-react";
import React, { useState } from "react";
import "../../../static/css/homePage.css";
import { logout } from "../../api/auth";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useMe } from "../hooks/useMe";
const Header = () => {
  const [view, setView] = useState(null);
  const { user, isLoading} = useMe();

  return (
    <>
      <div className="flex mb-16 justify-between items-center gap-6">
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
        <div className="flex-shrink-0">
          {!user?.id ? (
            <div>
              <button
                className="mr-3 px-4 py-2 border text-gray-700 bg-white rounded-md  dark:bg-gray-800 border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-white"
                onClick={() => setView("login")}
              >
                Acceder
              </button>
              <button
                className="px-4 py-2 rounded-md border bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-600"
                onClick={() => setView("register")}
              >
                Registrarse
              </button>
            </div>
          ) : (
            <div>
              <button
                className="px-4 py-2 border text-gray-700 bg-white rounded-md  dark:bg-gray-800 border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-white"
                onClick={() =>
                  logout()
                }
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>

      {view === "login" && <LoginForm onClose={() => setView(null)} isOpen={view} setView={setView}/>}
      {view === "register" && <RegisterForm onClose={() => setView(null)} isOpen={view} setView={setView} />}
    </>
  );
};

export default Header;
