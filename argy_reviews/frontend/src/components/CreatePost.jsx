import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ImagePreview from "./ui/ImagePreview";
import axios from "axios";
import { useAuth } from "./context/AuthContext";

const CreatePost = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const navigate = useNavigate();

  const handleImageUpload = (files) => {
    const imageFiles = Array.from(files).filter((file) =>
      file.type.startsWith("image/")
    );
    const imageUrls = imageFiles.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...imageUrls]);
  };

  const handleFileInput = (e) => {
    handleImageUpload(e.target.files);
  };

  const handleDeleteImage = (indexToDelete) => {
    setImages((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    handleImageUpload(files);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("content", formData.content);

    // Si tienes imágenes, agrégalas a FormData
    images.forEach((image, index) => {
      data.append(`image_${index}`, image);
    });

    console.log(data);
    try {
      const response = await axios.post(
        "/posts/",
        {
          title: formData.title,
          content: formData.content,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Post creado exitosamente", response.data);
    } catch (error) {
      console.error("Error:", error);
      setError("Registration failed.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-0 max-w-8xl">
      <h1 className="text-4xl font-bold mb-6 dark:text-white text-black">
        Crear Post
      </h1>

      <form
        onSubmit={handleSubmit}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="space-y-6"
      >
        <div>
          <label className="block text-lg font-medium mb-2 dark:text-white text-black">
            Título
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 dark:border-gray-600 border-gray-300"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2 dark:text-white text-black">
            Descripción
          </label>
          <textarea
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            className="w-full p-2 borde rounded-md h-40 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 dark:border-gray-600 border-gray-300"
            placeholder="Escribe tu descripción aquí..."
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2 dark:text-white text-black">
            Imagen
          </label>
          <div className="flex flex-wrap gap-4">
            {images.map((img, index) => (
              <ImagePreview
                key={index}
                image={img}
                index={index}
                onDelete={handleDeleteImage}
              />
            ))}
            <label
              className={`w-36 h-48 border-2 border-dashed rounded-md flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                isDragging
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-blue-500"
              }`}
            >
              <div className="text-center text-sm text-gray-600 dark:text-gray-200">
                <p>Haz click o arrastra</p>
                <p>para añadir archivos</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
                multiple
              />
            </label>
          </div>
        </div>

        <div className="border-t flex justify-end space-x-4 pt-4 border-gray-300 dark:border-gray-500">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-md transition-colors border
            hover:bg-gray-300 dark:hover:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-white "
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
