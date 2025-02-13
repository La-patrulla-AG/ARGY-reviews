import { Filter, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import api from "../api/api.js";
import { useMe } from "./hooks/useMe.js";
import MyPost from "./ui/MyPost.jsx";
import { is } from "date-fns/locale";

const FILTER_OPTIONS = [
  "Todas",
  "Este mes",
  "Mes pasado",
  "Este año",
  "2023",
  "2022",
  "2021",
  "2020",
];

const MyPostsPage = () => {
  const [searchTerm, setSearchTerm] = useState(""); //controla dinámicamente el estado de la barra de búsqueda
  const [filterOpen, setFilterOpen] = useState(false); //Settea por default como cerrado el filtro y controla este aspecto
  const [selectedFilter, setSelectedFilter] = useState("Todas"); //settea por default la opción Todas en el filtro y controla su estado
  const [postsId, setPostsId] = useState([]); //para guardar los ids de los posts del usuario
  const [updatePosts, setUpdatePosts] = useState(false); //Para actualizar los posts que se muestran si elimino un post
  const [postsData, setPostsData] = useState({}); // Objeto para guardar titulos de los posts

  const { user } = useMe();

  useEffect(() => {
    api
      .get(`/profile/${user?.id}/`)
      .then((response) => setPostsId(response.data.posts))
      .catch((err) => console.log("Error loading data", err));
  }, [user?.id, updatePosts]);

  useEffect(() => {
    if (!!postsId) {
      const fetchPostsData = async () => {
        try {
          const posts = {};

          // Hacer solicitudes para cada postId
          await Promise.allSettled(
            postsId.map(async (id) => {
              const response = await api.get(`/posts/${id}/`);
              posts[id] = response.data.title; // Guardar el título del post
            })
          );

          // Actualizar el estado con los datos obtenidos
          setPostsData(posts);
        } catch (error) {
          console.error("Error fetching post data:", error);
        }
      };
      fetchPostsData();
    }
    // Función para cargar los titulos de los posts
  }, [postsId]);

  const filteredPosts = searchTerm
    ? postsId.filter((id) =>
        postsData[id]?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : postsId;

  return (
    <>
      <h1 className="text-4xl font-bold mb-6 dark:text-white text-black">
        Mis publicaciones
      </h1>

      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg pt-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="relative flex-1 max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Buscar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:ring-2  dark:border-gray-700 dark:bg-gray-800 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white rounded-md border dark:bg-gray-800 border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <Filter size={20} />
              {selectedFilter}
            </button>

            {filterOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-800 z-10">
                {FILTER_OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedFilter(option);
                      setFilterOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-100 first:rounded-t-md last:rounded-b-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-sm text-gray-600">
          {!!postsId ? postsId.length : 0} publicaciones
        </div>
      </div>

      <div className="space-y-4">
        {!!postsId ? filteredPosts.map((postId) => (
          <div key={postId}>
            <div>
              <MyPost postId={postId} setUpdatePosts={setUpdatePosts}></MyPost>
            </div>
          </div>
        )) :(<div>No hay publicaciones</div>)}
      </div>
    </>
  );
};

export default MyPostsPage;
