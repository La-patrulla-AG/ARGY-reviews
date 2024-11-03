import React, { useEffect, useState } from "react";
import axios from "axios";
import { Check, Pencil, X, Ellipsis} from "lucide-react";

const MyPost = ({ postId }) => {
  const [image, setImage] = useState({});
  const [post, setPost] = useState({});

  const getPostData = (postId) => {
    return axios
      .get(`/posts/${postId}/`)
      .then((response) => {
        const { title, content, created_at, verification_state } =
          response.data;
        return { title, content, created_at, verification_state };
      })
      .catch((error) => {
        console.error(`Error loading post ${postId}:`, error);
        return {
          title: null,
          content: null,
          created_at: null,
          verification_state: null,
        };
      });
  };

  const getFirstImage = (postId) => {
    return axios
      .get(`/posts/${postId}/images/`)
      .then((response) => {
        const imageUrl =
          response.data.length > 0 ? response.data[0].image : null;
        return { imageUrl };
      })
      .catch((error) => {
        console.error(`Error loading image for post ${postId}:`, error);
        return { imageUrl: null };
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizamos las dos peticiones en paralelo
        const [postResults, imageResults] = await Promise.all([
          getPostData(postId),
          getFirstImage(postId),
        ]);

        setPost(postResults);
        setImage(imageResults);
      } catch (error) {
        console.error("Error fetching post or image data:", error);
      }
    };

    fetchData();
  }, [postId]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-4 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <img
          src={image.imageUrl}
          alt={`Imagen de ${post.title}`}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                  {post.title}
                </h3>
                {() => {
                  switch (post.verification_state) {
                    case 1:
                      return (
                        <span className="flex items-center text-green-600 dark:text-green-500 text-sm">
                          <Check size={16} className="mr-1" />
                          Verificado
                        </span>
                      );
                    case 2:
                      return (
                        <span className="flex items-center text-orange-600 dark:text-orange-500 text-sm">
                          <Ellipsis size={16} className="mr-1" />
                          Pendiente
                        </span>
                      );
                    case 3:
                      return (
                        <span className="flex items-center text-red-600 dark:text-red-500 text-sm">
                          <X size={16} className="mr-1" />
                          Rechazado
                        </span>
                      );
                    default:
                      return console.log("Verification state switch error.");
                  }
                }}

                {/* {post.verification_state ? (
                  <span className="flex items-center text-green-600 dark:text-green-500 text-sm">
                    <Check size={16} className="mr-1" />
                    Verificado
                  </span>
                ) : (
                  <span className="flex items-center text-green-600 dark:text-green-500 text-sm">
                    <Check size={16} className="mr-1" />
                    Verificado
                  </span>
                )} */}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                {post.created_at}
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-600 transition-colors">
                Ver publicación
              </button>
              <button className="px-4 py-1.5 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 dark:bg-red-800 dark:hover:bg-red-600 transition-colors">
                Eliminar
              </button>
              <button className="p-1.5 text-green-600 hover:bg-green-100 dark:hover:bg-green-950 dark:text-green-500 rounded transition-colors">
                <Pencil size={20} />
              </button>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2.5 line-clamp-2">
            {post.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
