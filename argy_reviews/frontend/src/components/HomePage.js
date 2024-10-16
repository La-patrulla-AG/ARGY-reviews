import "../../static/css/homePage.css";
import React from "react";
import TarjetaProducto from "./ui/ProductCard";
import FormularioLogin from "./ui/LoginForm";
import FormularioRegistro from "./ui/RegisterForm";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { useState, useEffect } from "react";
import {
  Search,
  Home,
  Users,
  Star,
  Info,
  ChevronLeft,
  Github,
  Twitter,
  Mail,
  Moon,
  Sun,
  Logs,
} from "lucide-react";

const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    imagen: "/../../static/images/Peter_Griffin.png",
    categorias: ["Electrónica", "Gadgets"],
    valoracion: 4,
    numReviews: 120,
  },
  {
    id: 2,
    nombre: "Producto 2",
    imagen: "/placeholder.svg?height=200&width=200",
    categorias: ["Hogar", "Cocina"],
    valoracion: 3,
    numReviews: 85,
  },
  {
    id: 3,
    nombre: "Producto 3",
    imagen: "/placeholder.svg?height=200&width=200",
    categorias: ["Moda", "Accesorios"],
    valoracion: 5,
    numReviews: 200,
  },
  {
    id: 4,
    nombre: "Producto 4",
    imagen: "/placeholder.svg?height=200&width=200",
    categorias: ["Deportes", "Fitness"],
    valoracion: 4,
    numReviews: 150,
  },
];

const HomePage = () => {
  const [barraLateralAbierta, setBarraLateralAbierta] = useState(true);
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [modoOscuro, setModoOscuro] = useState(false);

  const toggleBarraLateral = () => setBarraLateralAbierta(!barraLateralAbierta);
  const toggleModoOscuro = () => setModoOscuro(!modoOscuro);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", modoOscuro);
  }, [modoOscuro]);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Barra lateral */}
      <aside
        className={`${
          barraLateralAbierta ? "w-64" : "w-16"
        } fixed top-0 left-0 h-full transition-all duration-200 bg-white dark:bg-gray-800 p-4`}
      >
        <div className="flex items-center justify-between mb-8">
          <h1
            className={`text-xl font-bold ${
              barraLateralAbierta ? "block" : "hidden"
            }`}
          >
            ArgyReviews
          </h1>
          <button
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={toggleBarraLateral}
          >
            {barraLateralAbierta ? <ChevronLeft /> : <Logs />}
          </button>
        </div>
        <nav>
          <ul
            className={`${
              barraLateralAbierta
                ? "opacity-100 duration-1000"
                : "opacity-0 duration-500"
            } space-y-2 `}
          >
            <li>
              <button className="flex items-center w-full p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                <Home className="mr-2" />
                {barraLateralAbierta && <span>Inicio</span>}
              </button>
            </li>
            <li>
              <button className="flex items-center w-full p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                <Users className="mr-2" />
                {barraLateralAbierta && <span>Seguidos</span>}
              </button>
              {barraLateralAbierta && (
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                      Actualizaciones
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                      Perfiles que sigues
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button className="flex items-center w-full p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                <Star className="mr-2" />
                {barraLateralAbierta && <span>Reseñas</span>}
              </button>
              {barraLateralAbierta && (
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                      Búsqueda avanzada
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button className="flex items-center w-full p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                <Info className="mr-2" />
                {barraLateralAbierta && <span>ArgyReviews</span>}
              </button>
              {barraLateralAbierta && (
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                      Privacidad
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                      Reglas del Sitio
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                      Términos y Condiciones
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                      Sé Parte de ArgyReviews
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <div
          className={`${
            barraLateralAbierta
              ? "opacity-100 duration-1000"
              : "opacity-0 duration-200"
          } absolute bottom-4 left-4 flex space-x-2`}
        >
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <Github className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <Mail className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <Twitter className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main
        className={`flex-1 p-8 transition-all duration-300 ${
          barraLateralAbierta ? "ml-64" : "ml-16"
        }`}
      >
        {" "}
        {/* Añadido ml-64 para el espacio de la barra lateral */}
        <header className="flex justify-between items-center mb-8">
          <div className="relative w-2/3">
            <input
              type="search"
              placeholder="Buscar..."
              className="w-2/3 p-2 pl-8 rounded bg-gray-200 border-gray-500 dark:border-gray-700 dark:bg-gray-800"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div>
            <button
              className="mr-2 px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
              onClick={() => setMostrarLogin(true)}
            >
              Acceder
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setMostrarRegistro(true)}
            >
              Registrarse
            </button>
          </div>
        </header>
        <h2 className="text-2xl font-bold mb-6">
          LAS MEJORES RESEÑAS HACEN MEJORES DECISIONES
        </h2>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Recientemente Reseñados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {productos.map((producto) => (
              <TarjetaProducto key={producto.id} producto={producto} />
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Mejores del Mes</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {productos.map((producto) => (
              <TarjetaProducto key={producto.id} producto={producto} />
            ))}
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-4">Recientemente Añadidos</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {productos.map((producto) => (
              <TarjetaProducto key={producto.id} producto={producto} />
            ))}
          </div>
        </section>
      </main>

      {mostrarLogin && (
        <FormularioLogin onClose={() => setMostrarLogin(false)} />
      )}
      {mostrarRegistro && (
        <FormularioRegistro onClose={() => setMostrarRegistro(false)} />
      )}

      {/* Botón de modo oscuro */}
      <button
        className="fixed bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg z-50"
        onClick={toggleModoOscuro}
      >
        {modoOscuro ? (
          <Sun className="text-yellow-400" />
        ) : (
          <Moon className="text-gray-700" />
        )}
      </button>
    </div>
  );
};

export default HomePage;


