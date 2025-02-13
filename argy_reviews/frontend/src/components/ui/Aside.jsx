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
  Bug,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../static/css/homePage.css";
import { useMe } from "../hooks/useMe";
import BugReportModal from "./ReportBugModal";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user } = useMe();
  const navigate = useNavigate();
  const [isBugReportModalOpen, setIsBugReportModalOpen] = useState(false);

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-16"
      } fixed top-0 left-0 h-full transition-all duration-200 bg-white dark:bg-gray-800 p-4 z-40 shadow-lg flex flex-col`}
      style={{ minHeight: "100vh" }}
    >
      {/* Header section */}
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

      {/* Navigation section - with flex-grow to push social buttons down */}
      <nav className="flex-grow overflow-y-auto">
        <ul
          className={`${
            isOpen ? "opacity-100 duration-1000" : "opacity-0 duration-500"
          } space-y-2`}
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
          {user?.id ? (
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
                  {user.is_superuser ? (
                    <>
                      <li>
                        <button
                          className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black"
                          onClick={() => {
                            window.location.href = "https://astonishing-enjoyment-production.up.railway.app/admin/";
                          }}
                        >
                          Panel de administrador
                        </button>
                      </li>

                      <li>
                        <button
                          className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black"
                          onClick={() => {
                            navigate("/trabajadores");
                          }}
                        >
                          Solicitar trabajadores
                        </button>
                      </li>
                    </>
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

          </li>
          <li>
            <div className="flex items-center w-full p-2 rounded dark:text-gray-300 text-black">
              <Info className="mr-2" />
              {isOpen && <span>ArgyReviews</span>}
            </div>
            {isOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black"
                    onClick={() => {
                    navigate("/privacidad");
                  }}
                  >
                    Privacidad
                  </button>
                </li>
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black"
                   onClick={() => {
                    navigate("/reglas");
                  }}>
                    Reglas del Sitio
                  </button>
                </li>
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black"
                   onClick={() => {
                    navigate("/terminos-condiciones");
                  }}
                  >
                    Términos y Condiciones
                  </button>
                </li>
                <li>
                  <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black"
                    onClick={() => {
                      navigate("/trabaja-con-nosotros");
                  }}
                  >
                    Sé Parte de ArgyReviews
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black flex items-center gap-3"
                    onClick={() => setIsBugReportModalOpen(true)}
                  >
                    <span>Reportar un bug</span> <Bug className="w-5 h-5" />
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black"
                    onClick={() =>
                      window.open(
                        "https://la-patrulla-ag.github.io/ARGY-reviews/api/",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    Documentación API
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Social buttons section - now part of flex layout */}
      <div
        className={`${
          isOpen ? "opacity-100 duration-1000" : "opacity-0 duration-200"
        } flex space-x-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 justify-evenly`}
      >
        <button
          className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black"
          onClick={() => {
            window.open(
              "https://github.com/La-patrulla-AG/ARGY-reviews",
              "_blank"
            );
          }}
        >
          <Github className="w-4 h-4" />
        </button>
        <button className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black">
          <Mail className="w-4 h-4" />
        </button>
        <button className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-black">
          <Twitter className="w-4 h-4" />
        </button>
      </div>
      <BugReportModal
        isOpen={isBugReportModalOpen}
        onClose={() => setIsBugReportModalOpen(false)}
      />
    </aside>
  );
};

export default Aside;
