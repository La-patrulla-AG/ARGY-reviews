import React, { useState } from 'react';
import { Star, Image, Bold, Italic, Underline, DollarSign, Code, Quote, AtSign } from 'lucide-react';

const ReviewSection = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">¿Qué opinas?</h3>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input 
                type="radio" 
                name="rating" 
                value={ratingValue} 
                onClick={() => setRating(ratingValue)}
                className="hidden"
              />
              <Star
                className={`w-8 h-8 cursor-pointer transition-colors duration-200 ${
                  ratingValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-400'
                }`}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-600 rounded-md resize-none"
          rows={4}
          placeholder="Escriba su reseña..."
        ></textarea>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <Image className="w-5 h-5" />
          </button>
          <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <Bold className="w-5 h-5" />
          </button>
          <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <Italic className="w-5 h-5" />
          </button>
          <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <Underline className="w-5 h-5" />
          </button>
          <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <DollarSign className="w-5 h-5" />
          </button>
          <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <Code className="w-5 h-5" />
          </button>
          <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <Quote className="w-5 h-5" />
          </button>
          <button className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <AtSign className="w-5 h-5" />
          </button>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
          Publicar
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600 dark:text-gray-300">289 comentarios</span>
        <div className="space-x-2">
          <button className="text-gray-600 hover:text-blue-500 focus:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:focus:text-blue-300">Mejor</button>
          <button className="text-gray-600 hover:text-blue-500 focus:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:focus:text-blue-300">Nuevo</button>
          <button className="text-gray-600 hover:text-blue-500 focus:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:focus:text-blue-300">Viejo</button>
        </div>
      </div>
      <div className="border-t pt-4 border-gray-300 dark:border-gray-500 ">
        <div className="flex items-start mb-4">
          <div className="mr-4">
            {/*acá va el perfil del usuario*/}
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>

          </div>
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <span className="font-semibold mr-2">PedroAsi</span>
              <span className="text-gray-500 dark:text-gray-200 text-sm">Hace 9 horas</span>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className={`w-4 h-4 ${index < 4 ? 'text-yellow-400' : 'text-gray-300'}`} />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-100">Buen producto.</p>
            <div className="flex items-center mt-2 text-gray-500 dark:text-gray-400 text-sm">
              <button className="flex items-center mr-4 hover:text-blue-500 transition-colors duration-200">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
                0
              </button>
              <button className="flex items-center hover:text-blue-500 transition-colors duration-200">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"></path>
                </svg>
                0
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;