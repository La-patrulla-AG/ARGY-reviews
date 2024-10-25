import axios from "axios";
import React, { useEffect, useState } from "react";
import Review from "./Review";
import {
  Star,
  Image,
  Bold,
  Italic,
  Underline,
  DollarSign,
  Code,
  Quote,
  AtSign,
} from "lucide-react";

const ReviewSection = ({ postId }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    getReviews(postId);
  }, [postId]);

  const getReviews = (postId)=>{
    axios
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
  }

  if (loading) return <p className="text-md font-semibold mb-4">Loading reviews...</p>;
  if (error) return <p className="text-md font-semibold mb-4">Error loading reviews</p>;

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
            className="w-full p-2 border bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-600 rounded-md resize-none"
            rows={4}
            placeholder="Escriba su reseña..."
          ></textarea>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <Image className="w-5 h-5" />
            </button>
            <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <Bold className="w-5 h-5" />
            </button>
            <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <Italic className="w-5 h-5" />
            </button>
            <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <Underline className="w-5 h-5" />
            </button>
            <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <DollarSign className="w-5 h-5" />
            </button>
            <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <Code className="w-5 h-5" />
            </button>
            <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <Quote className="w-5 h-5" />
            </button>
            <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <AtSign className="w-5 h-5" />
            </button>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
            Publicar
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 dark:text-gray-300">
            289 comentarios
          </span>
          <div className="space-x-2">
            <button className="text-gray-600 hover:text-blue-500 focus:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:focus:text-blue-300">
              Mejor
            </button>
            <button className="text-gray-600 hover:text-blue-500 focus:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:focus:text-blue-300">
              Nuevo
            </button>
            <button className="text-gray-600 hover:text-blue-500 focus:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:focus:text-blue-300">
              Viejo
            </button>
          </div>
        </div>
        {reviews.map((review) => (
          <div key={review.id}>
            <p><Review review={review}></Review></p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewSection;