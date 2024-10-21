import "../../../static/css/homePage.css";
import React, {useEffect} from "react";
import { useAside } from "../context/AsideContext";

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
import { useNavigate } from "react-router-dom";

const Aside = ({ toggle }) => {
  const { asideIsOpen, setAsideIsOpen } = useAside();


  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setAsideIsOpen(false);
    } else {
      setAsideIsOpen(true);
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
          onClick={toggle}
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
            <button className="flex items-center w-full p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700" onClick={()=>{navigate("/")}}>
              <Home className="mr-2" />
              {asideIsOpen && <span>Inicio</span>}
            </button>
          </li>
          <li>
            <div className="flex items-center w-full p-2 rounded">
              <Users className="mr-2" />
              {asideIsOpen && <span>Seguidos</span>}
            </div>
            {asideIsOpen && (
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
            <div className="flex items-center w-full p-2 rounded">
              <Star className="mr-2" />
              {asideIsOpen && <span>Reseñas</span>}
            </div>
            {asideIsOpen && (
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
            <div className="flex items-center w-full p-2 rounded">
              <Info className="mr-2" />
              {asideIsOpen && <span>ArgyReviews</span>}
            </div>
            {asideIsOpen && (
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
          asideIsOpen ? "opacity-100 duration-1000" : "opacity-0 duration-200"
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
