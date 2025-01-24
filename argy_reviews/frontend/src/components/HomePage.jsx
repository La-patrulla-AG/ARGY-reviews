import "../../static/css/homePage.css";
import React, { useState, useEffect } from "react";
import PostSwiper from "./ui/PostSwiper";
import axios from "axios";

const HomePage = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [bestPosts, setBestPosts] = useState([]);
  const [recentlyReviewedPosts, setRecentlyReviewedPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/carousels/")
      .then((response) => {
        const { recent_posts, best_posts, recently_reviewed_posts } =
          response.data;
        setRecentPosts(recent_posts);
        setBestPosts(best_posts);
        setRecentlyReviewedPosts(recently_reviewed_posts);
      })
      .catch((error) => {
        console.error("Error loading homepage posts:", error);
      });
  }, []);


  return (
    <div className="container mx-auto px-4 py-0 max-w-8xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
        LAS MEJORES RESEÑAS PARA LAS MEJORES DECISIONES
      </h2>
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300 ">
          Recientemente Reseñados
        </h3>
        <PostSwiper posts={recentlyReviewedPosts} />
      </section>
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          Mejores del Mes
        </h3>
        <PostSwiper posts={bestPosts} />
      </section>
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          Recientemente Añadidos
        </h3>
        <PostSwiper posts={recentPosts} />
      </section>
    </div>
  );
};

export default HomePage;
