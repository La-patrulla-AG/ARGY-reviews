import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...imageUrls]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ title, description, images });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">Crear Post</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Título<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md h-40 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Escribe tu descripción aquí..."
          />
        </div>

        <div className="border-t pt-4 border-gray-300 dark:border-gray-500 ">
          <label className="block text-sm font-medium mb-2">Imagen</label>
          <div className="flex flex-wrap gap-4">
            {images.map((img, index) => (
              <div key={index} className="relative w-32 h-40">
                <img
                  src={img}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover border rounded-md"
                />
              </div>
            ))}
            <label className="w-32 h-40 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors">
              <div className="text-center text-sm text-gray-600">
                <p>Haz click o arrastra</p>
                <p>para añadir archivos</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                multiple
              />
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
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