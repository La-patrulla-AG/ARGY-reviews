import React, { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import MyPost from "./ui/MyPost.jsx";
import axios from "axios";
import { useAuth } from "./context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const MOCK_POSTS = [
  {
    id: "1",
    date: "15 de julio",
    title: "Calculadora Científica Pro",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis diam vel est scelerisque suscipit vitae ut purus. Cras vel leo in augue rhoncus pharetra.",
    imageUrl:
      "https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&q=80&w=240",
    verified: true,
  },
  {
    id: "2",
    date: "17 de diciembre de 2023",
    title: "Smartphone X12",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis diam vel est scelerisque suscipit vitae ut purus.",
    imageUrl:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=240",
    verified: true,
  },
  {
    id: "3",
    date: "30 de junio de 2023",
    title: "Laptop Pro Max",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis diam vel est scelerisque suscipit vitae ut purus.",
    imageUrl:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=240",
    verified: true,
  },
  {
    id: "4",
    date: "6 de noviembre de 2022",
    title: "Gaming Console Elite",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis diam vel est scelerisque suscipit vitae ut purus.",
    imageUrl:
      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&q=80&w=240",
    verified: true,
  },
];

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
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Todas");
  const [postsId, setPostsId] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`/profile/${user?.id}/`, {
        headers: {
          Authorization: `Token ${user?.token}`,
        },
      })
      .then((response) => {
        setPostsId(response.data);
      })
      .catch((err) => {
        console.log("Error loading data", err);
      });
  }, [user?.id]);

  // const handleView = (id) => {
  //   console.log("View post:", id);
  // };

  // const handleDelete = (id) => {
  //   console.log("Delete post:", id);
  // };

  // const handleEdit = (id) => {
  //   console.log("Edit post:", id);
  // };

  return (
    <div className="container mx-auto px-4 py-0 max-w-8xl">
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
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                {FILTER_OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedFilter(option);
                      setFilterOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-sm text-gray-600">
          {postsId.length} publicaciones
        </div>
      </div>

      <div className="space-y-4">
        {postsId.map((postId) => (
          <div key={postId}>
            <div>
              <MyPost postId={postId}></MyPost>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPostsPage;
