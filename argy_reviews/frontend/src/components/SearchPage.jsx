import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./ui/PostCard";

function SearchPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem("searchQuery"));
  const [visiblePosts, setVisiblePosts] = useState(12);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const storedSearchQuery = localStorage.getItem("searchQuery");
      if (storedSearchQuery !== searchQuery) {
        setSearchQuery(storedSearchQuery);
      }
    }, [searchQuery]);

    return () => {
      clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    };
  }, [searchQuery]);

  useEffect(() => {
    let url = `https://argy-reviews-production.up.railway.app/posts/filter/`;
    if (searchQuery) {
      url += `?title=${searchQuery}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Ordenar los posts alfabéticamente por el título
        const sortedPosts = data.sort((a, b) => a.title.localeCompare(b.title));
        setPosts(sortedPosts);
      })
      .catch((error) => console.error("Error en fetch:", error));
  }, [searchQuery]); // Este useEffect se activa cuando cambia searchQuery

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4 bg-gray-600 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold">Búsqueda:</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.slice(0, visiblePosts).map((post) => (
          <PostCard key={post.id} post={post} onClick={() => navigate(`/post/${post.id}`)} />
        ))}
      </div>
      {visiblePosts < posts.length && (
        <div className="flex justify-center mt-6">
          <button className="text-gray-500 dark:text-white text-lg flex items-center" onClick={() => setVisiblePosts((prev) => prev + 15)}>
            ▼ Cargar más
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
