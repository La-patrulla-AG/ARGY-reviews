import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./ui/PostCard"; // Importamos el componente PostCard

function SearchPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(12);
  const [filter, setFilter] = useState(null);
  const searchQuery = localStorage.getItem("searchQuery");

  useEffect(() => {
    if (searchQuery && searchQuery.trim() !== "") {
      fetch(`localhost:8000/posts/filter/?title=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
        })
        .catch((error) => console.error("Error en fetch:", error));
    }
  }, [searchQuery]);


  return (
    <div className="p-4">
      {/* Encabezado y filtro */}
      <div className="flex flex-col items-center mb-4 bg-gray-600 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Búsqueda:</h2>
        <div className="relative">
          <button
            className="bg-slate-800 text-white px-4 py-2 rounded"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filtrar
          </button>
          {showFilter && (
            <div className="absolute right-0 mt-2 bg-slate-700 shadow-md rounded w-32">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-slate-600"
                onClick={() => setFilter("Nombre")}
              >
                Nombre
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-slate-600"
                onClick={() => setFilter("Categoría")}
              >
                Categoría
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Grilla de publicaciones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredPosts.slice(0, visiblePosts).map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onClick={() => navigate(`/post/${post.id}`)}
          />
        ))}
      </div>

      {/* Botón para cargar más publicaciones */}
      {visiblePosts < filteredPosts.length && (
        <div className="flex justify-center mt-6">
          <button
            className="text-grey-500 text-lg flex items-center"
            onClick={loadMorePosts}
          >
            ▼ Cargar más
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
