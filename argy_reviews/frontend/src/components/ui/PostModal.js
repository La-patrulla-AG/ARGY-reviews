import "../../../static/css/homePage.css";
import React from "react";
import StarValue from "./StarValue";
import { useNavigate } from "react-router-dom";

const PostModal = ({ post }) => {
  const navigate = useNavigate();

  // Verificar si el post es undefined
  if (!post) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 h-full">
        <p className="text-center text-gray-500">post no disponible</p>
      </div>
    );
  }

  return (
    console.log("holi")
  );
};

export default PostModal;
