import "../../../static/css/homePage.css";
import React, { useEffect } from "react";
import { useAside } from "../context/AsideContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  Star,
  Info,
  ChevronLeft,
  Github,
  Twitter,
  Mail,
  Logs,
} from "lucide-react";

const Aside = () => {
  const { asideIsOpen, setAsideIsOpen } = useAside();
  const { user } = useAuth();
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setAsideIsOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <aside
      className={`${
        asideIsOpen ? "w-64" : "w-16"
      } fixed top-0 left-0 h-full transition-all duration-200 bg-white dark:bg-gray-800 p-4 z-40`}
    >
      <div className="flex items-center justify-between mb-8">
        <h1 className={`text-xl font-bold ${asideIsOpen ? "block" : "hidden"}`}>
          ArgyReviews
        </h1>
        <button
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => {
            setAsideIsOpen(!asideIsOpen);
          }}
        >
          {asideIsOpen ? <ChevronLeft /> : <Logs />}
        </button>
      </div>
      <nav>
        <ul
          className={`${
            asideIsOpen ? "opacity-100 duration-1000" : "opacity-0 duration-500"
          } space-y-2 `}
        >
          <li>
            <button
              className="flex items-center w-full p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black"
              onClick={() => {
                navigate("/");
              }}
            >
              <Home className="mr-2" />
              {asideIsOpen && <span>Inicio</span>}
            </button>
          </li>
          {user ? (
            <li>
              <div className="flex items-center w-full p-2 rounded dark:text-gray-300 text-black">
                <Users className="mr-2" />
                {asideIsOpen && <span>Perfil</span>}
              </div>
              {asideIsOpen && (
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <button
                      className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black"
                      onClick={() => {
                        navigate("/mis-publicaciones");
                      }}
                    >
                      Mis publicaciones
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black"
                      onClick={() => {
                        navigate("/crear-post");
                      }}
                    >
                      Nueva publicación
                    </button>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <></>
          )}
          <li>
            <div className="flex items-center w-full p-2 rounded dark:text-gray-300 text-black">
              <Star className="mr-2" />
              {asideIsOpen && <span>Reseñas</span>}
            </div>
            {asideIsOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black">
                    Búsqueda avanzada
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div className="flex items-center w-full p-2 rounded dark:text-gray-300 text-black">
              <Info className="mr-2" />
              {asideIsOpen && <span>ArgyReviews</span>}
            </div>
            {asideIsOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black">
                    Privacidad
                  </button>
                </li>
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black">
                    Reglas del Sitio
                  </button>
                </li>
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black">
                    Términos y Condiciones
                  </button>
                </li>
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black">
                    Sé Parte de ArgyReviews
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <div
        className={`${
          asideIsOpen ? "opacity-100 duration-1000" : "opacity-0 duration-200"
        } absolute bottom-4 left-4 flex space-x-2`}
      >
        <button
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black"
          onClick={() => {
            window.location.href =
              "https://github.com/La-patrulla-AG/ARGY-reviews";
          }}
        >
          <Github className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black">
          <Mail className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black">
          <Twitter className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};

export default Aside;
