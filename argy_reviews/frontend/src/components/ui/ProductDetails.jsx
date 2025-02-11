import React, { useRef } from "react";
import api from "../../api/api";
import { Star, User } from "lucide-react";
import "../../../static/css/homePage.css";
import { useState, useEffect } from "react";
import ImageSwiper from "./ImageSwiper";
import ReportModal from "./ReportModal";
import { EllipsisVertical } from "lucide-react";
import ReviewSection from "./ReviewSection";
import StarValue from "./StarValue";

const ProductDetails = ({ postId }) => {
  const [post, setPost] = useState({});
  const [images, setImages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState({});
  const [updatePost, setUpdatePost] = useState(false);

  const [openMenuId, setOpenMenuId] = useState(null);
  const [showReportModal, setShowReportModal] = useState(false);

  const [report, setReport] = useState({
    reported_content_type: "", // Valor inicial para el tipo de contenido
    reported_object_id: "",
    category: "",
  });

  const ReportContentType = {
    POST: 9,
    USER: 10,
  };

  const menuRef = useRef(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const fetchData = async (url, setData, field = null) => {
    try {
      const response = await api.get(url);
      setData((prev) => {
        if (field) {
          return Array.isArray(prev)
            ? [...prev, ...response.data]
            : { ...prev, [field]: response.data };
        }
        return response.data;
      });
    } catch (error) {
      console.error(`Error loading data from ${url}:`, error);
    }
  };

  useEffect(() => {
    fetchData(`/posts/${postId}/images/`, setImages);
  }, [postId]);



  useEffect(() => {
    fetchData(`/posts/${postId}/`, setPost);
    fetchData(`/posts/${postId}/reviews/`, setReviews);
  }, [postId, updatePost]);

  useEffect(() => {
    if (post?.owner) {
      fetchData(`/users/${post.owner}/`, setUser);
    }
  }, [post]);

  const openReportModal = (reported_content_type, reported_object_id) => {
    setReport((prev) => ({
      ...prev,
      reported_content_type,
      reported_object_id,
      category: "",
    }));
    setShowReportModal(true);
  };

  //manejo el clcik por fuera del menú de reportes

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
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <div className="flex">
          {images.length > 0 ? (
            <ImageSwiper images={images} />
          ) : (
            <div className="flex items-center justify-center w-1/2 bg-gray-200 dark:bg-gray-700 rounded-lg p-4">
              <svg
                className="w-16 md:w-32 lg:w-48 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          <div className="w-1/2 pl-4">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => toggleMenu(postId)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-150"
                >
                  <EllipsisVertical className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>

                {openMenuId === postId && (
                  <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-50 w-48">
                    <button
                      onClick={() =>
                        openReportModal(ReportContentType.POST, postId)
                      }
                      className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-left first:rounded-t-md"
                    >
                      Reportar publicación
                    </button>
                    <button
                      onClick={() => {
                        openReportModal(ReportContentType.USER, post.owner);
                      }}
                      className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-left first:rounded-t-md"
                    >
                      Reportar usuario
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center mb-2">
              <StarValue value={post.avg_ratings} size={29} />
              <span className="text-lg font-semibold mx-2">
                {post.avg_ratings ? post.avg_ratings.toFixed(1) : "N/A"}
              </span>
              <span className="text-gray-500 dark:text-gray-300">
                ({reviews.length})
              </span>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 dark:text-gray-100">Publicado por:</p>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>{user.username}</span>
              </div>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-100 mb-2">
                Categorías:
              </p>
              <div className="flex flex-wrap">
                {["categoria", "categoria", "categoria", "categoria"].map(
                  (cat, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {cat}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {showReportModal && (
          <ReportModal
            isOpen={showReportModal}
            onClose={() => setShowReportModal(false)}
            report={report}
            setReport={setReport}
          />
        )}
      </div>
      <ReviewSection
        postId={postId}
        updatePost={() => {
          setUpdatePost(true);
        }}
      />
    </>
  );
};

export default ProductDetails;
