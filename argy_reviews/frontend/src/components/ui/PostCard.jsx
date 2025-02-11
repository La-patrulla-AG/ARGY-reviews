import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StarValue from "./StarValue";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(""); // Estado para almacenar la URL de la imagen

    console.log("id:", post.id)

  useEffect(() => {

        fetch(`http://localhost:8000/posts/${post.id}/images/`, setImageUrl);
      }, [post.id]);

  console.log("urlimagen:", imageUrl); // Muestra en consola la URL de la imagen cargada

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer hover:scale-95 transition"
      onClick={() => navigate(`/post/${post.id}`)} // Navega a la página del post al hacer clic
    >
      {imageUrl ? (
        <img
          src={imageUrl} // Muestra la imagen si está disponible
          alt={post.title}
          className="w-full h-48 object-cover rounded-md"
        />
      ) : (
        <div className="bg-gray-300 h-48 w-full rounded-md"></div> 
      )}
      <h3 className="font-semibold text-sm mt-2 dark:text-white text-black truncate">
        {post.title} 
      </h3>
      <div className="flex items-center mt-1">
        <StarValue valoracion={post.avg_ratings} /> 
        <span className="text-gray-500 dark:text-gray-300 ml-2">
          ({post.reviews || 0}) 
        </span>
      </div>
    </div>
  );
}

export default PostCard;
