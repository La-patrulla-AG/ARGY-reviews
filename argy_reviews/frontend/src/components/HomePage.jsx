import React from "react";
import "../../static/css/homePage.css";
import { usePosts } from "./hooks/usePosts";
import PostSwiper from "./ui/PostSwiper";

const HomePage = () => {
  const {
    recent_posts,
    best_posts,
    recently_reviewed_posts,
    bayesian_ranked_posts,
    isLoading,
  } = usePosts();

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
        LAS MEJORES RESEÑAS PARA LAS MEJORES DECISIONES
      </h2>
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          Mejores Puntuados
        </h3>
        <PostSwiper posts={bayesian_ranked_posts} isLoading={isLoading} />
      </section>
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300 ">
          Recientemente Reseñados
        </h3>
        <PostSwiper posts={recently_reviewed_posts} isLoading={isLoading} />
      </section>
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          Mejores del Mes
        </h3>
        <PostSwiper posts={best_posts} isLoading={isLoading} />
      </section>
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          Recientemente Añadidos
        </h3>
        <PostSwiper posts={recent_posts} isLoading={isLoading} />
      </section>
    </>
  );
};

export default HomePage;
