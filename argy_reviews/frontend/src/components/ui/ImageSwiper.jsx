import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSwiper = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop={false}  // evita el loop
      spaceBetween={10} // espacio entre slides
      slidesPerView={1} // solo un slide visible a la vez
      className="max-w-lg max-h-96" // límite de tamaño del swiper
    >
      {images.map((image) => (
        <SwiperSlide key={image.id} className="flex justify-center content-around">
          <img
            src={image.image}
            alt="Product"
            className="w-full max-h-96 object-contain rounded-lg" // ajustes de tamaño
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;