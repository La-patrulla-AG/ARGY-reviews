import { Bold, Code, Italic, Star, Underline } from "lucide-react";
import React, { useEffect, useState } from "react";
import api from "../../api/api";
import Review from "./Review";
import { useReviewPost } from "../hooks/useReviewPost";

const ReviewSection = ({ postId, updatePost }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [hover, setHover] = useState(0);
  const [updateReviews, setUpdateReviews] = useState(false);
  const { reviewPost } = useReviewPost();
  const [reviewFilter, setReviewFilter] = useState("");

  const [formData, setFormData] = useState({
    rating: "",
    comment: "",
  });

  useEffect(() => {
    fetchData(`/posts/${postId}/reviews/`, setReviews, null, reviewFilter);
  }, [postId, updateReviews, reviewFilter]);

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

  const handleSubmit = async () => {
    if (formData.rating === "") {
      setError("Por favor, seleccione una calificación");
      return;
    }

    try {
      await reviewPost({ postId, formData });
      setHover(0);
      setFormData({ rating: "", comment: "" });
      setError(null);
      setUpdateReviews((prev) => !prev);
      updatePost();
    } catch (error) {
      console.error("Error al publicar la reseña:", error);
    }
  };

  const handleUpdateReviews = () => {
    setUpdateReviews((prev) => !prev);
  };

  const applyFormat = (format) => {
    const start = document.getSelection().anchorOffset;
    const end = document.getSelection().focusOffset;

    if (start === end) {
      setFormData({
        ...formData,
        comment: `${formData.comment}${format.start}${format.end}`,
      });
    } else {
      const selectedText = formData.comment.slice(start, end);
      const formattedText = `${format.start}${selectedText}${format.end}`;
      setFormData({
        ...formData,
        comment:
          formData.comment.slice(0, start) +
          formattedText +
          formData.comment.slice(end),
      });
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">¿Qué opinas?</h3>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => {
                    setFormData({ ...formData, rating: ratingValue });
                  }}
                  className="hidden"
                />
                <Star
                  className={`w-8 h-8 cursor-pointer transition-colors duration-200 ${
                    ratingValue <= (hover || formData.rating)
                      ? "text-yellow-400"
                      : "text-gray-300 dark:text-gray-400"
                  }`}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                />
              </label>
            );
          })}
        </div>
        <div className="mb-4">
          <textarea
            value={formData.comment}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
            className="w-full p-2 border bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-600 rounded-md resize-none"
            rows={4}
            placeholder="Escriba su reseña..."
          ></textarea>
          {error && (
            <p className="text-red-500 font-medium text-sm text-start">
              {error}
            </p>
          )}
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button
              onClick={() => applyFormat({ start: "**", end: "**" })}
              className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Bold className="w-5 h-5" />
            </button>
            <button
              onClick={() => applyFormat({ start: "*", end: "*" })}
              className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Italic className="w-5 h-5" />
            </button>
            <button
              onClick={() => applyFormat({ start: "__", end: "__" })}
              className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Underline className="w-5 h-5" />
            </button>
            <button
              onClick={() => applyFormat({ start: "`", end: "`" })}
              className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Code className="w-5 h-5" />
            </button>
          </div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-600 transition-colors duration-200"
            onClick={handleSubmit}
          >
            Publicar
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 dark:text-gray-300">
            {reviews.length}{" "}
            {reviews.length === 1 ? "comentario" : "comentarios"}
          </span>
          <div className="space-x-2">
            <button
              className={` hover:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:focus:text-blue-300 ${
                reviewFilter === "best/" ? "text-blue-500 " : "text-gray-600"
              }`}
              onClick={() => setReviewFilter("best/")}
            >
              Mejor
            </button>
            <button
              className="text-gray-600 hover:text-blue-500 focus:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:focus:text-blue-300"
              onClick={() => setReviewFilter("newest/")}
            >
              Nuevo
            </button>
            <button
              className="text-gray-600 hover:text-blue-500 focus:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:focus:text-blue-300"
              onClick={() => setReviewFilter("oldest/")}
            >
              Viejo
            </button>
          </div>
        </div>
        {reviews.map((review) => (
          <div key={review.id}>
            <div>
              <Review
                review={review}
                postId={postId}
                updatePost={updatePost}
                updateReviews={handleUpdateReviews}
              ></Review>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewSection;
