import { Bold, Code, Italic, Star, Underline } from "lucide-react";
import React, { useEffect, useState } from "react";
import api from "../../api/api";
import Review from "./Review";

const ReviewSection = ({ postId }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [updateReviews, setUpdateReviews] = useState(false);
  const [reviewType, setReviewType] = useState("default");

  useEffect(() => {
    if (reviewType === "default") {
      getReviews(postId);
    } else if (reviewType === "newest") {
      getNewestReviews(postId);
    } else if (reviewType === "oldest") {
      getOldestReviews(postId);
    } else if (reviewType === "best") {
      getBestReviews(postId);
    }
  }, [postId, updateReviews, reviewType]);

  const getReviews = (postId) => {
    api
      .get(`/posts/${postId}/reviews/`)
      .then((response) => {
        setReviews(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log("Error loading data", err);
      });
  };

  const getNewestReviews = (postId) => {
    api
      .get(`/posts/${postId}/reviews/newest/`)
      .then((response) => {
        setReviews(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log("Error loading data", err);
      });
  };

  const getOldestReviews = (postId) => {
    api
      .get(`/posts/${postId}/reviews/oldest/`)
      .then((response) => {
        setReviews(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log("Error loading data", err);
      });
  };

  const getBestReviews = (postId) => {
    api
      .get(`/posts/${postId}/reviews/best/`)
      .then((response) => {
        setReviews(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log("Error loading data", err);
      });
  };

  const handleSubmit = async () => {
    if (rating === 0) {
      alert("Por favor, selecciona una calificación.");
      return;
    }

    try {
      const response = await api.post(`/posts/${postId}/reviews/`, {
        rating,
        comment: reviewText,
      });
      setRating(0);
      setHover(0);
      setReviewText("");
      setUpdateReviews((prev) => !prev);
    } catch (error) {
      console.error("Error al publicar la reseña:", error);
    }
  };

  const applyFormat = (format) => {
    const start = document.getSelection().anchorOffset;
    const end = document.getSelection().focusOffset;

    if (start === end) {
      setReviewText((prev) => `${prev}${format.start}${format.end}`);
    } else {
      const selectedText = reviewText.slice(start, end);
      const formattedText = `${format.start}${selectedText}${format.end}`;
      setReviewText(
        reviewText.slice(0, start) + formattedText + reviewText.slice(end)
      );
    }
  };

  if (loading)
    return <div className="text-md font-semibold mb-4">Loading reviews...</div>;
  if (error)
    return (
      <div className="text-md font-semibold mb-4">Error loading reviews</div>
    );

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
                  onClick={() => setRating(ratingValue)}
                  className="hidden"
                />
                <Star
                  className={`w-8 h-8 cursor-pointer transition-colors duration-200 ${
                    ratingValue <= (hover || rating)
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
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full p-2 border bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-600 rounded-md resize-none"
            rows={4}
            placeholder="Escriba su reseña..."
          ></textarea>
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
              className="text-gray-600 hover:text-blue-500 focus:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:focus:text-blue-300"
              onClick={() => setReviewType("best")}
            >
              Mejor
            </button>
            <button
              className="text-gray-600 hover:text-blue-500 focus:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:focus:text-blue-300"
              onClick={() => setReviewType("newest")}
            >
              Nuevo
            </button>
            <button
              className="text-gray-600 hover:text-blue-500 focus:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:focus:text-blue-300"
              onClick={() => setReviewType("oldest")}
            >
              Viejo
            </button>
          </div>
        </div>
        {reviews.map((review) => (
          <div key={review.id}>
            <div>
              <Review review={review} postId={postId}></Review>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewSection;
