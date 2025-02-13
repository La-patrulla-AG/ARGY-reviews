import React, { useEffect, useState, useRef } from "react";
import { EllipsisVertical, Star, Trash } from "lucide-react";
import TimeSince from "../../utils/TimeSince";
import api from "../../api/api";
import ReportModal from "./ReportModal";
import { useMe } from "../hooks/useMe";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Modal from "./Modal";
import { useDeleteReview } from "../hooks/useDeleteReview";
import LoginForm from "./LoginForm";
import { toast } from "react-toastify";

const Review = ({ review, postId, updatePost, updateReviews }) => {
  const [owner, setOwner] = useState({});
  const [openMenuId, setOpenMenuId] = useState(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState("");
  const [activeModal, setActiveModal] = useState(null);
  const [valorations, setValorations] = useState({
    likes: "",
    dislikes: "",
  });
  const [login, setLogin] = useState(false);

  const [active, setActive] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const { user } = useMe();
  const { deleteReview } = useDeleteReview();

  const stars = Array.from({ length: 5 });

  const [report, setReport] = useState({
    reported_content_type: "", // Valor inicial para el tipo de contenido
    reported_object_id: "",
    category: "",
  });

  const openModal = (mode) => {
    setActiveModal(mode);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveModal(null);
    setIsModalOpen(false);
  };

  const ReportContentType = {
    REVIEW: 11,
    USER: 10,
  };

  const menuRef = useRef(null); // Referencia para detectar clics fuera del menú

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const fetchData = async (url, setData, field = null, urlParam = "") => {
    try {
      const response = await api.get(url + urlParam);

      // Si 'field' es proporcionado, actualiza solo ese campo del estado
      if (field) {
        setData((prev) => ({ ...prev, [field]: response.data }));
      } else {
        // Si no hay 'field', actualiza el estado directamente con la data
        setData(response.data);
      }
    } catch (error) {
      console.error(`Error loading data from ${url}:`, error);
    }
  };

  useEffect(() => {
    fetchData(`/users/${review.owner}/`, setOwner);
    fetchData(
      `/posts/${postId}/reviews/${review.id}/valorations/`,
      setValorations
    );
    if (user) {
      fetchData(
        `/posts/${postId}/reviews/${review.id}/valorations/${user?.id}/`,
        (data) => {
          setActive(data.valoration);
        }
      );
    }
  }, [user, postId, review.id]);

  const openReportModal = (reported_content_type, reported_object_id) => {
    setReport((prev) => ({
      ...prev,
      reported_content_type,
      reported_object_id,
      category: "",
    }));
    setShowReportModal(true);
  };

  //Obtengo la primera letra para el comentario
  const firstLetter = owner?.username
    ? owner.username.charAt(0).toUpperCase()
    : "";

  //manejo el clcik por fuera del menú de reportes

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenuId(null); // Cerrar el menú si se hace clic fuera
    }
  };

  const handleValorate = async (value) => {
    const url = `/posts/${postId}/reviews/${review.id}/valorations/`;

    try {
      let updatedValorations;

      if (active === null) {
        await api.post(url, { valoration: value });
        setActive(value);
      } else if (active === value) {
        await api.delete(url + `${user.id}/`);
        setActive(null);
      } else {
        await api.put(url + `${user.id}/`, { valoration: value });
        setActive(value);
      }

      updatedValorations = (await api.get(url)).data;
      setValorations(updatedValorations);
    } catch (error) {
      console.error("Error handling valoration:", error);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDelete = async () => {
    try {
      await deleteReview({ postId, reviewId: review.id });
      updatePost();
      updateReviews();
      notify("Reseña eliminada exitosamente", "success");
      // Aquí puedes agregar lógica adicional, como actualizar la lista de reseñas
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  const notify = (
    message,
    type = "success",
    position = "bottom-right",
    autoClose = 4000
  ) => {
    toast[type](message, {
      position: position,
      autoClose: autoClose,
    });
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
            <span className="font-semibold mr-2">{owner.username}</span>
            <span className="text-gray-500 dark:text-gray-200 text-sm">
              {TimeSince(review.created_at)}
            </span>
          </div>
          <div className="flex items-center mb-2">
            {stars.map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < review.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="text-gray-700 dark:text-gray-100">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ src, alt }) => (
                  <img src={src} alt={alt} className="h-52 w-auto rounded-lg" />
                ),
              }}
            >
              {isExpanded || review.comment.length <= 100
                ? review.comment.replace(/\n/g, "  \n")
                : `${review.comment.slice(0, 100)}...`}
            </ReactMarkdown>
            {review.comment.length > 100 && (
              <button
                onClick={toggleExpand}
                className="text-blue-500 hover:underline"
              >
                {isExpanded ? "Mostrar menos" : "Mostrar más"}
              </button>
            )}
          </div>
          <div className="flex items-center mt-2 text-gray-500 dark:text-gray-400 text-sm">
            <button
              className={`flex items-center mr-4 transition-colors duration-200 ${
                active === true ? "text-blue-500" : "hover:text-blue-500"
              }`}
              onClick={
                user?.id ? () => handleValorate(true) : () => setLogin(true)
              }
            >
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
              {valorations.likes}
            </button>

            <button
              className={`flex items-center transition-colors duration-200 ${
                active === false ? "text-blue-500" : "hover:text-blue-500"
              }`}
              onClick={
                user?.id ? () => handleValorate(false) : () => setLogin(true)
              }
            >
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
              {valorations.dislikes}
            </button>
          </div>
        </div>
        <div className="relative" ref={menuRef}>
          {user?.id === review.owner ? (
            <button
              className="p-2 bg-red-600 hover:bg-red-700 rounded-md mr-2 shadow-md"
              onClick={() => openModal("delete")}
            >
              <Trash size={20}></Trash>
            </button>
          ) : (
            <button
              className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full ${
                user?.id ? "" : "disabled:opacity-50 cursor-not-allowed"
              }`}
              onClick={
                user?.id ? () => toggleMenu(review.id) : () => setLogin(true)
              }
            >
              <EllipsisVertical className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          )}

          {/* Menú desplegable */}
          {openMenuId === review.id && (
            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-50 w-48">
              <button
                onClick={() =>
                  openReportModal(ReportContentType.REVIEW, review.id)
                }
                className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-left first:rounded-t-md"
              >
                Reportar comentario
              </button>
              <button
                onClick={() =>
                  openReportModal(ReportContentType.USER, review.owner)
                }
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
        <ReportModal
          isOpen={showReportModal}
          onClose={() => setShowReportModal(false)}
          report={report}
          setReport={setReport}
        />
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        mode={activeModal}
        onButtonBClick={() => {
          handleDelete();
          closeModal;
        }}
        message="Quieres eliminar esta reseña? Esta acción es irreversible"
        buttonB="Sí, deseo eliminarla"
      />
      <LoginForm isOpen={login} onClose={() => setLogin(false)} />
    </div>
  );
};

export default Review;
