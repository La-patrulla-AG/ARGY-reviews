import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./ui/PostCard";
import CategorySelector from "./ui/CategorySelector";

function SearchPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const searchQuery = localStorage.getItem("searchQuery");
  const [visiblePosts, setVisiblePosts] = useState(12);

  // Obtener categorías del localStorage
  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("postCategories")) || [];
    setCategories(storedCategories);
  }, []);

  // Obtener posts filtrados por título y categorías
  useEffect(() => {
    if (searchQuery && searchQuery.trim() !== "") {
      const categoryIds = selectedCategories.map((category) => category.id);
      const queryParams = new URLSearchParams();

      queryParams.append('title', searchQuery); // Filtro por título
      if (categoryIds.length > 0) {
        queryParams.append('categories', categoryIds.join(',')); // Filtro por categorías
      }

      fetch(`http://localhost:8000/posts/filter/?${queryParams.toString()}`)
        .then((response) => response.json())
        .then((data) => {
          const sortedPosts = data.sort((a, b) => a.title.localeCompare(b.title));
          setPosts(sortedPosts);
        })
        .catch((error) => console.error("Error en fetch:", error));
    }
  }, [searchQuery, selectedCategories]);

  // Manejar el cambio de categorías seleccionadas
  const handleCategoryChange = (newSelectedCategories) => {
    // Buscar las categorías completas en el localStorage usando los ids
    const fullCategories = newSelectedCategories.map((id) =>
      categories.find((category) => category.id === id)
    );
    setSelectedCategories(fullCategories);
  };

  return (
    <div className="p-4">
      {/* Encabezado y filtro */}
      <div className="flex justify-between items-center mb-4 bg-gray-600 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold">Búsqueda:</h2>

        {/* Selector de categorías */}
        <CategorySelector
          selectedCategories={selectedCategories.map((category) => category.id)}
          onChange={handleCategoryChange}
          showDefaultTags={false}  
        />
      </div>

      {/* Etiquetas de categorías seleccionadas */}
      <div className="flex flex-wrap gap-2 mb-4">
        {selectedCategories.map((category) => (
          <div
            key={category.id}
            className="flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full border border-gray-400 dark:border-gray-500"
          >
            <span className="text-sm">{category.name}</span>
            <button
              className="ml-2 text-xs text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-transform transform hover:scale-110"
              onClick={() =>
                setSelectedCategories(
                  selectedCategories.filter((c) => c.id !== category.id)
                )
              }
            >
              ✖
            </button>
          </div>
        ))}
      </div>

      {/* Grilla de publicaciones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.slice(0, visiblePosts).map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onClick={() => navigate(`/post/${post.id}`)}
          />
        ))}
      </div>

      {/* Botón para cargar más publicaciones */}
      {visiblePosts < posts.length && (
        <div className="flex justify-center mt-6">
          <button
            className="text-gray-500 dark:text-white text-lg flex items-center"
            onClick={() => setVisiblePosts((prev) => prev + 15)}
          >
            ▼ Cargar más
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
