import {
  ChevronLeft,
  Github,
  Home,
  Info,
  Logs,
  Mail,
  Star,
  Twitter,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../static/css/homePage.css";
import { useMe } from "../hooks/useMe";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { me } = useMe();
  const navigate = useNavigate();

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-16"
      } fixed top-0 left-0 h-full transition-all duration-200 bg-white dark:bg-gray-800 p-4 z-40`}
    >
      <div className="flex items-center justify-between mb-8">
        <h1 className={`text-xl font-bold ${isOpen ? "block" : "hidden"}`}>
          ArgyReviews
        </h1>
        <button
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <ChevronLeft /> : <Logs />}
        </button>
      </div>
      <nav>
        <ul
          className={`${
            isOpen ? "opacity-100 duration-1000" : "opacity-0 duration-500"
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
              {isOpen && <span>Inicio</span>}
            </button>
          </li>
          {me ? (
            <li>
              <div className="flex items-center w-full p-2 rounded dark:text-gray-300 text-black">
                <Users className="mr-2" />
                {isOpen && <span>Perfil</span>}
              </div>
              {isOpen && (
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
                  {me.is_superuser ? (
                    <li>
                      <button
                        className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black"
                        onClick={() => {
                          window.location.href = "http://localhost:8000/admin/";
                        }}
                      >
                        Panel de administrador
                      </button>
                    </li>
                  ) : (
                    <></>
                  )}
                </ul>
              )}
            </li>
          ) : (
            <></>
          )}
          <li>
            <div className="flex items-center w-full p-2 rounded dark:text-gray-300 text-black">
              <Star className="mr-2" />
              {isOpen && <span>Reseñas</span>}
            </div>
            {isOpen && (
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
              {isOpen && <span>ArgyReviews</span>}
            </div>
            {isOpen && (
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
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black">
                    Documentación
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <div
        className={`${
          isOpen ? "opacity-100 duration-1000" : "opacity-0 duration-200"
        } absolute bottom-4 left-4 flex space-x-2`}
      >
        <button
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black"
          onClick={() => {
            window.open(
              "https://github.com/La-patrulla-AG/ARGY-reviews",
              "_blank"
            );
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
