// SearchPage.jsx
import React, { useState, useEffect } from "react";

function SearchPage() {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        console.log("searchQuery ha cambiado:", searchQuery);  // Verificar valor de searchQuery
        if (searchQuery.trim() != "") {  // Asegurarse de que searchQuery no esté vacío
            console.log("Ejecutando fetch");
            fetch(`http://localhost:8000/posts/search/${searchQuery}`)
                .then(response => response.json())
                .then(data => setPosts(data));
            console.log("data");
        }
    }, [searchQuery]);// Se ejecuta cada vez que searchQuery cambia

    
    return (
    
        <div className="p-4">

            <ul className="mt-4">
                {posts.map((post) => (
                              <SwiperSlide
                              key={post.id}
                              className="relative group transition-all hover:z-10 cursor-pointer"
                            >
                              <div
                                className="relative group transition-all hover:scale-90 hover:z-10 cursor-pointer"
                                onClick={() => navigate(`/post/${post.id}`)}
                              >
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 h-full">
                                  {images[post.id] ? (
                                    <img
                                      src={images[post.id]}
                                      alt={`Imagen de ${post.title}`}
                                      className="w-full !h-32 object-cover rounded mb-2"
                                    />
                                  ) : (
                                    <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded mb-2 flex items-center justify-center">
                                      <svg
                                        className="w-16 md:w-32 lg:w-48 h-12 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                      </svg>
                                    </div>
                                  )}
                                  <h3 className="font-semibold text-sm mb-1 truncate dark:text-white text-black">
                                    {post.title}
                                  </h3>
                                  <div className="flex items-center justify-start">
                                    <StarValue valoracion={post.avg_ratings} />
                                    <span className="text-gray-500 dark:text-gray-300 ml-2">
                                      ({reviews[post.id]})
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                            )
                        )
                    }
            </ul>
        </div>
    );
}

export default SearchPage;