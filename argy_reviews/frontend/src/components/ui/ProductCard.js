import "../../../static/css/homePage.css";
import React from "react";
import EstrellasValoracion from "./Stars";

const TarjetaProducto = ({ producto }) => {
  // Verificar si el producto es undefined
  if (!producto) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 h-full">
        <p className="text-center text-gray-500">Producto no disponible</p>
      </div>
    );
  }

  return (
    <div className="relative group transition-all duration-300 hover:scale-110 hover:z-10">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 h-full">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-32 object-cover rounded mb-2"
        />
        <div className="absolute top-2 left-2 flex flex-wrap gap-1 z-20">
          {producto.categorias.map((categoria, index) => (
            <span
              key={index}
              className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded"
            >
              {categoria}
            </span>
          ))}
        </div>
        <h3 className="font-semibold text-sm mb-1 truncate">
          {producto.nombre}
        </h3>
        <div className="flex items-center justify-between">
          <EstrellasValoracion valoracion={producto.valoracion} />
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {producto.numReviews} reseñas
          </span>
        </div>

        {/* Contenido visible en hover */}
        <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 opacity-100 transition-all duration-300 flex flex-col justify-between">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-32 object-cover rounded"
          />
          <div>
            <h3 className="font-semibold text-sm mb-1">{producto.nombre}</h3>
            <div className="flex items-center justify-between mb-2">
              <EstrellasValoracion valoracion={producto.valoracion} />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {producto.numReviews} reseñas
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaProducto;
