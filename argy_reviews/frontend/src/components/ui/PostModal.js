import "../../../static/css/homePage.css";
import React from "react";
import StarValue from "./StarValue";
import 'flowbite';
import { useNavigate } from "react-router-dom";

const PostModal = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(post.id);
    navigate(`/post/${post.id}`);
  }

  // Verificar si el post es undefined
  if (!post) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 h-full">
        <p className="text-center text-gray-500">post no disponible</p>
      </div>
    );
  }

  return (
    <div className="relative group transition-all duration-300 hover:scale-110 hover:z-10 cursor-pointer" onClick={handleClick}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 h-full">
        <img
          src={post.imagen}
          alt={post.nombre}
          className="w-full h-32 object-contain rounded mb-2"
        />
        <div className="absolute top-2 left-2 flex flex-wrap gap-1 z-20">
          {post.categorias.map((categoria, index) => (
            <span
              key={index}
              className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded"
            >
              {categoria}
            </span>
          ))}
        </div>
        <h3 className="font-semibold text-sm mb-1 truncate">
          {post.nombre}
        </h3>
        <div className="flex items-center justify-between">
          <StarValue valoracion={post.valoracion} />
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {post.numReviews} reseñas
          </span>
        </div>

        {/* Contenido visible en hover */}
        <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 opacity-100 transition-all duration-300 flex flex-col justify-between">
          <img
            src={post.imagen}
            alt={post.nombre}
            className="w-full h-32 object-contain rounded"
          />
          <div>
            <h3 className="font-semibold text-sm mb-1">{post.nombre}</h3>
            <div className="flex items-center justify-between mb-2">
              <StarValue valoracion={post.valoracion} />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {post.numReviews} reseñas
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
