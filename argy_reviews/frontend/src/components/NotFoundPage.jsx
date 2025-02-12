import { useNavigate } from 'react-router-dom';
import { FileQuestion, Home } from 'lucide-react';
import React from 'react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <FileQuestion className="w-24 h-24 mb-8 text-gray-400 dark:text-gray-500 animate-pulse" />
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        404 - Página no encontrada
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        <Home className="w-5 h-5" />
        <span>Volver al Inicio</span>
      </button>
    </div>
  );
};

export default NotFound;