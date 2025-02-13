import { Search } from "lucide-react";
import React, { useState } from "react";
import "../../../static/css/homePage.css";
import { logout } from "../../api/auth";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useMe } from "../hooks/useMe";
import SearchBar from "./SearchBar"
const Header = () => {
  const [view, setView] = useState(null);
  const { user, isLoading} = useMe();
  const [SearchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="flex mb-16 justify-between items-center gap-6">
        <div className="relative flex-1 max-w-4xl">
        <SearchBar onSearch={setSearchQuery} />
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
      {view === "login" && <LoginForm onClose={() => setView(null)} setView={setView} isOpen={view}/>}
      {view === "register" && <RegisterForm onClose={() => setView(null)} setView={setView} isOpen={view}/>}

    </>
  );
};

export default Header;
