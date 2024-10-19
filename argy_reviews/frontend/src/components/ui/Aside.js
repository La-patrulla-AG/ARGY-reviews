import "../../../static/css/homePage.css";
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

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

const Aside = ({state,toggle}) => {
  return (
    <aside
      className={`${
        state ? "w-64" : "w-16"
      } fixed top-0 left-0 h-full transition-all duration-200 bg-white dark:bg-gray-800 p-4 z-40`}
    >
      <div className="flex items-center justify-between mb-8">
        <h1
          className={`text-xl font-bold ${
            state ? "block" : "hidden"
          }`}
        >
          ArgyReviews
        </h1>
        <button
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={toggle}
        >
          {state ? <ChevronLeft /> : <Logs />}
        </button>
      </div>
      <nav>
        <ul
          className={`${
            state
              ? "opacity-100 duration-1000"
              : "opacity-0 duration-500"
          } space-y-2 `}
        >
          <li>
            <button className="flex items-center w-full p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <Home className="mr-2" />
              {state && <span>Inicio</span>}
            </button>
          </li>
          <li>
            <button className="flex items-center w-full p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <Users className="mr-2" />
              {state && <span>Seguidos</span>}
            </button>
            {state && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    Actualizaciones
                  </button>
                </li>
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    Perfiles que sigues
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button className="flex items-center w-full p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <Star className="mr-2" />
              {state && <span>Reseñas</span>}
            </button>
            {state && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    Búsqueda avanzada
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button className="flex items-center w-full p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <Info className="mr-2" />
              {state && <span>ArgyReviews</span>}
            </button>
            {state && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    Privacidad
                  </button>
                </li>
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    Reglas del Sitio
                  </button>
                </li>
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    Términos y Condiciones
                  </button>
                </li>
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
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
          state
            ? "opacity-100 duration-1000"
            : "opacity-0 duration-200"
        } absolute bottom-4 left-4 flex space-x-2`}
      >
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <Github className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <Mail className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <Twitter className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};

export default Aside;
