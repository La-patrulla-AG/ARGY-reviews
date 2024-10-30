import React from 'react';
import { Check, Pencil } from 'lucide-react';



const MyPost = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                {post.verified && (
                  <span className="flex items-center text-green-600 text-sm">
                    <Check size={16} className="mr-1" />
                    Verificado
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-1.5 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors"
              >
                Ver publicación
              </button>
              <button
                className="px-4 py-1.5 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
              >
                Eliminar
              </button>
              <button
                className="p-1.5 text-green-600 hover:bg-green-50 rounded transition-colors"
              >
                <Pencil size={20} />
              </button>
            </div>
          </div>
          <p className="text-gray-600 mt-2 line-clamp-2">{post.content}</p>
        </div>
      </div>
    </div>
  );
}

export default MyPost;