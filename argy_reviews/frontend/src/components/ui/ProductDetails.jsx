import React from 'react';
import { Star, User } from 'lucide-react';
import "../../../static/css/homePage.css"

const ProductDetails = ({post}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <div className="flex">
        <div className="w-1/2 pr-4">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Product"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
        <div className="w-1/2 pl-4">
          <h2 className="text-2xl font-bold mb-2">Nombre Producto</h2>
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-current' : ''}`} />
              ))}
            </div>
            <span className="text-lg font-semibold">4.2</span>
            <span className="text-gray-500 dark:text-gray-300 ml-2">(289)</span>
          </div>
          <div className="mb-4">
            <p className="text-gray-600 dark:text-gray-100">Publicado por:</p>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>nombre del publicador</span>
            </div>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-100 mb-2">Categorías:</p>
            <div className="flex flex-wrap">
              {['categoria', 'categoria', 'categoria', 'categoria'].map((cat, index) => (
                <span key={index} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full text-sm mr-2 mb-2">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;