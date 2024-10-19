import "../../static/css/homePage.css";
import React from "react";
import PostModal from "./ui/PostModal";

const posts = [
  {
    id: 1,
    nombre: "post 1",
    imagen: "/../../static/images/Peter_Griffin.png",
    categorias: ["Electrónica", "Gadgets"],
    valoracion: 4,
    numReviews: 120,
  },
  {
    id: 2,
    nombre: "post 2",
    imagen: "/placeholder.svg?height=200&width=200",
    categorias: ["Hogar", "Cocina"],
    valoracion: 3,
    numReviews: 85,
  },
  {
    id: 3,
    nombre: "post 3",
    imagen: "/placeholder.svg?height=200&width=200",
    categorias: ["Moda", "Accesorios"],
    valoracion: 5,
    numReviews: 200,
  },
  {
    id: 4,
    nombre: "post 4",
    imagen: "/placeholder.svg?height=200&width=200",
    categorias: ["Deportes", "Fitness"],
    valoracion: 4,
    numReviews: 150,
  },
];

const HomePage = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        LAS MEJORES RESEÑAS HACEN MEJORES DECISIONES
      </h2>
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Recientemente Reseñados</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <PostModal key={post.id} post={post} />
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Mejores del Mes</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <PostModal key={post.id} post={post} />
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-4">Recientemente Añadidos</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <PostModal key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
