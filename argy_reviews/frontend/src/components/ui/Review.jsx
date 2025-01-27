import React, { useEffect, useState, useRef } from "react";
import { EllipsisVertical, X, Star } from "lucide-react";
import TimeSince from "../../utils/TimeSince";
import api from "../../api/api";

const Review = ({ review }) => {
  const [user, setUser] = useState({});
  const [openMenuId, setOpenMenuId] = useState(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportType, setReportType] = useState(null);
  const [reportCategories, setReportCategories] = useState([]);

  const [report, setReport] = useState({
    reported_content_type: "", // Valor inicial para el tipo de contenido
    reported_object_id: "",
    category: "",
  });

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

    api
      .get("/report_categories/")
      .then((response) => {
        setReportCategories(response.data);
      })
      .catch((err) => {
        console.log("Error loading data", err);
      });
  }, []);

  // Función para manejar cambios en el formulario
  const handleSelection = (e) => {
    // Obtenemos el nombre y valor del input
    setReport({
      ...report, // Mantenemos los valores actuales
      category: e.target.value, // Actualizamos solo la propiedad que cambió
    });
  };

  // Función para enviar el POST con la opción seleccionada
  const handleReportSubmit = (e) => {
    e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario

    api
      .post("/reports/", report)
      .then((response) => {
        console.log("reporte creado!", response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(
        setReport({
          reported_content_type: "", // Valor inicial para el tipo de contenido
          reported_object_id: "",
          category: "",
        }),
        setShowReportModal(false));
  };

  const firstLetter = user?.username
    ? user.username.charAt(0).toUpperCase()
    : "";

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenuId(null); // Cerrar el menú si se hace clic fuera
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // Detectar clics fuera
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Limpiar evento
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
          <div className="flex items-center mt-2 text-gray-500 dark:text-gray-400 text-sm">
            <button className="flex items-center mr-4 hover:text-blue-500 transition-colors duration-200">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                ></path>
              </svg>
              0
            </button>
            <button className="flex items-center hover:text-blue-500 transition-colors duration-200">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                ></path>
              </svg>
              0
            </button>
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
            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-50 w-48">
              <button
                onClick={() => {
                  setReportType("comentario");
                  setReport({
                    ...report, // Mantenemos los valores actuales
                    reported_content_type: 11, // Actualizamos solo la propiedad que cambió
                    reported_object_id: review.id,
                  });
                  setShowReportModal(true);
                  setOpenMenuId(null);
                }}
                className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-left first:rounded-t-md"
              >
                Reportar comentario
              </button>
              <button
                onClick={() => {
                  setReportType("usuario");
                  setReport((prev) => ({
                    ...prev, // Mantenemos los valores actuales
                    reported_content_type: 10, // Actualizamos solo la propiedad que cambió
                    reported_object_id: review.owner,
                  }));
                  setShowReportModal(true);
                  setOpenMenuId(null);
                }}
                className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-left first:rounded-t-md"
              >
                Reportar usuario
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Modal de reporte */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-96 max-w-md mx-4">
            <div className="flex justify-between items-center pr-4 pl-4 pt-4 pb-5">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {`Denunciar ${reportType}`}
              </h2>

              <button
                onClick={() => {
                  setReport({
                    reported_content_type: "", // Valor inicial para el tipo de contenido
                    reported_object_id: "",
                    category: "",
                  });
                  setShowReportModal(false);
                }}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleReportSubmit}>
              <div className="pl-4 pr-4 max-h-[50vh] overflow-y-auto">
                <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                  ¿Qué sucede?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Comprobaremos que se cumplan todos los Lineamientos de la
                  Comunidad, así que no te preocupes por hacer la elección
                  perfecta.
                </p>
                <div className="space-y-2">
                  {reportCategories.map((reportCategory) => (
                    <label
                      key={reportCategory.id}
                      className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="report-reason"
                        onChange={handleSelection}
                        value={reportCategory.id}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <span className="text-base text-gray-700 dark:text-gray-300">
                        {reportCategory.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="pl-4 pr-4 pb-4">
                <button
                  className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:dark:bg-blue-800 dark:hover:bg-blue-800 transition-colors "
                  disabled={!report.category}
                  type="submit"
                >
                  Denunciar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
