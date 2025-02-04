import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import StarValue from "./StarValue";
import "../../../static/css/homePage.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import api from "../../api/api";

const PostSwiper = ({ posts, isLoading }) => {
  const navigate = useNavigate();
  const [images, setImages] = useState({});
  const [reviews, setReviews] = useState({});

  const getFirstImage = (postId) => {
    return api
      .get(`/posts/${postId}/images/`)
      .then((response) => {
        const imageUrl =
          response.data.length > 0 ? response.data[0].image : null;
        return { postId, imageUrl };
      })
      .catch((error) => {
        console.error(`Error loading image for post ${postId}:`, error);
        return { postId, imageUrl: null };
      });
  };

  const getReviews = (postId) => {
    return api
      .get(`/posts/${postId}/reviews/`)
      .then((response) => {
        const reviewLength =
          response.data.length > 0 ? response.data.length : 0;
        return { postId, reviewLength };
      })
      .catch((error) => {
        console.error(`Error loading reviews for post ${postId}:`, error);
        return { postId, reviewLength: null };
      });
  };

  useEffect(() => {
    if (!isLoading && posts.length > 0) {
      const fetchData = async () => {
        const imageBatch = posts.map((post) => getFirstImage(post.id));
        const reviewBatch = posts.map((post) => getReviews(post.id));

        const imageResults = await Promise.all(imageBatch);
        setImages((prevImages) => {
          const newImages = {};
          imageResults.forEach(({ postId, imageUrl }) => {
            newImages[postId] = imageUrl;
          });
          return { ...prevImages, ...newImages };
        });

        const reviewResults = await Promise.all(reviewBatch);
        setReviews((prevReviews) => {
          const newReviews = {};
          reviewResults.forEach(({ postId, reviewLength }) => {
            newReviews[postId] = reviewLength;
          });
          return { ...prevReviews, ...newReviews };
        });
      };

      fetchData();
    }
  }, [posts, isLoading]);

  const getBreakpoints = () => ({
    320: { slidesPerView: 1, spaceBetween: 2 },
    480: { slidesPerView: 2, spaceBetween: 5 },
    768: { slidesPerView: 3, spaceBetween: 10 },
    1024: { slidesPerView: 4, spaceBetween: 15 },
    1350: { slidesPerView: 5, spaceBetween: 20 },
  });

  return (
    <Swiper
      spaceBetween={20}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
      breakpoints={getBreakpoints()}
    >
      {isLoading ? (
        // 🔹 Skeleton Loader cuando `isLoading` es true
        Array(5)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index} className="relative group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 h-full animate-pulse">
                <div className="w-full h-32 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            </SwiperSlide>
          ))
      ) : posts.length === 0 ? (
        // 🔹 Si no hay posts, mostrar un mensaje
        <SwiperSlide className="w-full h-full">
          <div className="h-full w-full">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 h-full flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 text-gray-400 dark:text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  No hay publicaciones
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No se encontraron publicaciones disponibles en este momento
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ) : (
        posts.map((post) => (
          <SwiperSlide
            key={post.id}
            className="relative group transition-all hover:z-10 cursor-pointer"
          >
            <div
              className="relative group transition-all hover:scale-90 hover:z-10 cursor-pointer"
              onClick={() => navigate(`/post/${post.id}`)}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 h-full">
                {images[post.id] ? (
                  <img
                    src={images[post.id]}
                    alt={`Imagen de ${post.title}`}
                    className="w-full !h-32 object-cover rounded mb-2"
                  />
                ) : (
                  <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded mb-2 flex items-center justify-center">
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
                <h3 className="font-semibold text-sm mb-1 truncate dark:text-white text-black">
                  {post.title}
                </h3>
                <div className="flex items-center justify-start">
                  <StarValue valoracion={post.avg_ratings} />
                  <span className="text-gray-500 dark:text-gray-300 ml-2">
                    ({reviews[post.id]})
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export default PostSwiper;
