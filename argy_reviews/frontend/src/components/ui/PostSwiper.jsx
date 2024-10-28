import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import StarValue from "./StarValue";
import "../../../static/css/homePage.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useAside } from "../context/AsideContext";

const PostSwiper = ({ posts }) => {
  const { asideIsOpen } = useAside();
  const navigate = useNavigate();

  const getBreakpoints = () => ({
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: asideIsOpen ? 2 : 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: asideIsOpen ? 3 : 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: asideIsOpen ? 4 : 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: asideIsOpen ? 4 : 5,
      spaceBetween: 20,
    },
  });

  return (
    <Swiper
      key={asideIsOpen ? "aside-open" : "aside-closed"}
      spaceBetween={20}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
      breakpoints={getBreakpoints()}
    >
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <SwiperSlide
            key={post.id}
            className="relative group transition-all hover:scale-110 hover:z-10 cursor-pointer"
          >
            <div
              className="relative group transition-all hover:scale-90 hover:z-10 cursor-pointer"
              onClick={() => {
                navigate(`/post/${post.id}`);
              }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 h-full">
                {post.imagen_url ? (
                  <img
                    src={post.imagen_url}
                    alt={post.title}
                    className="w-16 md:w-32 lg:w-48 h-12 object-cover rounded mb-2"
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
                <div className="flex items-center justify-between">
                  <StarValue valoracion={post.avg_ratings} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>
          <h3 className="text-sm font-semibold mb-4">
            No hay posts disponibles.
          </h3>
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default PostSwiper;
