import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StarValue from "./StarValue";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(""); // Estado para almacenar la URL de la imagen



  useEffect(() => {
    // Realizamos la petición y actualizamos el estado con la URL de la imagen
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://astonishing-enjoyment-production.up.railway.app/posts/${post.id}/images/`);
        if (response.ok) {
          const data = await response.json();

          // Verificamos si la respuesta es un array y tomamos la primera imagen
          if (Array.isArray(data) && data.length > 0) {
            setImageUrl(data[0].image); // Usamos el campo `image` del primer objeto en el array
          } else {
            console.error("No se encontró ninguna imagen en la respuesta");
          }
        } else {
          console.error("Error fetching image");
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    // Llamamos a la función para hacer la petición
    fetchImage();
  }, [post.id]); // Se ejecuta cada vez que cambia `post.id`


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
};

export default PostCard;
