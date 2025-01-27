import React, { useEffect, useState, useRef } from "react";
import {EllipsisVertical, X, Star } from "lucide-react";
import TimeSince from "../../utils/TimeSince";
import api from "../../api/api";

const Review = ({ review }) => {
  const [user, setUser] = useState({});
  const [openMenuId, setOpenMenuId] = useState(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportType, setReportType] = useState(null);
  
  const menuRef = useRef(null); // Referencia para detectar clics fuera del menú

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };
  
  useEffect(() => {
    api
      .get(`/users/${review.owner}/`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log("Error loading data", err);
      });
  }, [review.owner]);


  const firstLetter = user?.username ? user.username.charAt(0).toUpperCase() : '';

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenuId(null); // Cerrar el menú si se hace clic fuera
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside); // Detectar clics fuera
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Limpiar evento
    };
  }, []);

  return (
    <div className="border-t pt-4 border-gray-300 dark:border-gray-500">
      <div className="flex items-start mb-4 relative">
        <div className="mr-4">
          {/* Perfil del usuario */}
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            <p>{firstLetter}</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <span className="font-semibold mr-2">{user.username}</span>
            <span className="text-gray-500 dark:text-gray-200 text-sm">
              {TimeSince(review.created_at)}
            </span>
          </div>
          <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < review.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="text-gray-700 dark:text-gray-100 line-clamp-2">
            {review.comment}
          </div>
        </div>
        <div className="relative" ref={menuRef}>
          {/* Icono de menú */}
          <button
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            onClick={() => toggleMenu(review.id)}
          >
            <EllipsisVertical className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          {/* Menú desplegable */}
          {openMenuId === review.id && (
            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-50 py-1 w-48">
              <button
                onClick={() => {
                  setReportType('comment');
                  setShowReportModal(true);
                  setOpenMenuId(null);
                }}
                className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
              >
                Reportar comentario
              </button>
              <button
                onClick={() => {
                  setReportType('user');
                  setShowReportModal(true);
                  setOpenMenuId(null);
                }}
                className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
              >
                Reportar usuario
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Modal de reporte */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-96 max-w-md mx-4">
            <div className="flex justify-between items-center pr-4 pl-4 pt-4 pb-1">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Denunciar
              </h2>
              <button
                onClick={() => setShowReportModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                ¿Qué sucede?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Comprobaremos que se cumplan todos los Lineamientos de la
                Comunidad, así que no te preocupes por hacer la elección
                perfecta.
              </p>
              <div className="space-y-2">
                {[
                  'Contenido sexual',
                  'Contenido violento o repulsivo',
                  'Contenido abusivo o que incita al odio',
                  'Acoso o bullying',
                  'Actividades peligrosas o dañinas',
                  'Información errónea',
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="report-reason"
                      className="text-blue-600 dark:bg-gray-800"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              <button
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
                onClick={() => setShowReportModal(false)}
              >
                Denunciar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;