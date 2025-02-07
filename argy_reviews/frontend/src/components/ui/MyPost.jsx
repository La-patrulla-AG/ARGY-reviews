import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useDeletePost } from "../hooks/useDeletePost";

//Íconos de lucide-react que voy a usar
import { Check, Ellipsis, Pencil, X } from "lucide-react";

//date-fns lo utilizaré para dar formato a la fecha de creación de los posts
import { format } from "date-fns";
import { es } from "date-fns/locale";
import api from "../../api/api";
import Modal from "./Modal";

import { toast } from "react-toastify";

const MyPost = ({ postId, setUpdatePosts }) => {
  const [image, setImage] = useState({});
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState("");
  const [activeModal, setActiveModal] = useState(null);

  const errorNotified = useRef(false);

  const { mutate: deletePost, isLoading } = useDeletePost(setUpdatePosts);

  const openModal = (mode) => {
    setActiveModal(mode);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveModal(null);
    setIsModalOpen(false);
  };

  const getPostData = () => {
    return api
      .get(`/posts/${postId}/`)
      .then((response) => {
        const { title, content, created_at, verification_state } =
          response.data;
        return { title, content, created_at, verification_state };
      })
      .catch(() => {
        if (!errorNotified.current) {
          notify("Ha ocurrido un error inesperado", "error");
          errorNotified.current = true;
          return {
            title: null,
            content: null,
            created_at: null,
            verification_state: null,
          };
        }
      });
  };

  const getFirstImage = () => {
    return api
      .get(`/posts/${postId}/images/`)
      .then((response) => {
        const imageUrl =
          response.data.length > 0 ? response.data[0].image : null;
        return { imageUrl };
      })
      .catch(() => {
        if (!errorNotified.current) {
          notify("Ha ocurrido un error inesperado", "error");
          errorNotified.current = true;
        }
      });
  };

  const handleDeletePost = async () => {
    try {
      await deletePost(postId);
      notify("Pubilicación eliminada exitosamente", "success");
    } catch {
      if (!errorNotified.current) {
        notify("Ha ocurrido un error inesperado", "error");
        errorNotified.current = true;
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizamos las dos peticiones en paralelo
        const [postResults, imageResults] = await Promise.all([
          getPostData(),
          getFirstImage(),
        ]);

        setPost(postResults);
        setImage(imageResults);
      } catch {
        if (!errorNotified.current) {
          notify("Ha ocurrido un error inesperado", "error");
          errorNotified.current = true;
        }
      }
    };

    fetchData();
  }, [postId]);

  const formatDate = (dateString) => {
    if (!dateString) return ""; // Retorna una cadena vacía si dateString es null o undefined
    const date = new Date(dateString);
    if (isNaN(date)) return ""; // Retorna una cadena vacía si la fecha es inválida
    const formatString =
      date.getFullYear() === new Date().getFullYear()
        ? "d 'de' MMMM"
        : "d 'de' MMMM 'de' yyyy";
    return format(date, formatString, { locale: es });
  };

  const notify = (message, type = "success", position = "bottom-right") => {
    toast[type](message, {
      position: position,
    });
  };

  toast.onChange((payload) => {
    if (payload.status === "removed" && payload.type === "success") {
    }
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-4 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        {image.imageUrl === null ? (
          // 📌 SVG de imagen vacía
          <div className="w-24 h-24 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-gray-400 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        ) : (
          <img
            src={image.imageUrl}
            alt={`Imagen de ${post.title}`}
            className="w-24 h-24 object-cover rounded-lg"
          />
        )}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                  {post.title}
                </h3>
                {(() => {
                  switch (post.verification_state) {
                    case 1:
                      return (
                        <span className="flex items-center text-green-600 dark:text-green-500 text-sm">
                          <Check size={16} className="mr-1" />
                          Verificado
                        </span>
                      );
                    case 2:
                      return (
                        <span className="flex items-center text-orange-600 dark:text-orange-500 text-sm">
                          <Ellipsis size={16} className="mr-1" />
                          Pendiente
                        </span>
                      );
                    case 3:
                      return (
                        <span className="flex items-center text-red-600 dark:text-red-500 text-sm">
                          <X size={16} className="mr-1" />
                          Rechazado
                        </span>
                      );
                    default:
                      return null;
                  }
                })()}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                {formatDate(post.created_at)}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-1.5 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-600 transition-colors"
                onClick={() => {
                  navigate(`/post/${postId}`);
                }}
              >
                Ver publicación
              </button>
              <button
                className="px-4 py-1.5 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 dark:bg-red-800 dark:hover:bg-red-600 transition-colors"
                onClick={() => {
                  openModal("delete");
                }}
              >
                Eliminar
              </button>
              <button
                className="p-1.5 text-green-600 hover:bg-green-100 dark:hover:bg-green-950 dark:text-green-500 rounded transition-colors"
                onClick={() => {
                  navigate(`/editar-post/${postId}`);
                }}
              >
                <Pencil size={20} />
              </button>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2.5 line-clamp-1  ">
            {post.content}
          </p>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        mode={activeModal}
        onButtonBClick={() => {
          handleDeletePost();
          closeModal;
        }}
        message="Quieres eliminar esta publicación? Esta acción es irreversible"
        buttonB="Sí, deseo eliminarla"
      />
    </div>
  );
};

export default MyPost;
