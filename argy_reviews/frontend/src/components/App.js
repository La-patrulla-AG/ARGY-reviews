import '../tailwind.css';
import React from "react";
import { createRoot } from "react-dom/client";

import { useState, useEffect } from 'react'
import { Search, Home, Users, Star, Info, ChevronLeft, ChevronRight, Github, Twitter, Mail, Eye, EyeOff, Moon, Sun } from 'lucide-react'

const productos = [
  { id: 1, nombre: "Producto 1", imagen: "/../../static/images/Peter_Griffin.png", categorias: ["Electrónica", "Gadgets"], valoracion: 4, numReviews: 120 },
  { id: 2, nombre: "Producto 2", imagen: "/placeholder.svg?height=200&width=200", categorias: ["Hogar", "Cocina"], valoracion: 3, numReviews: 85 },
  { id: 3, nombre: "Producto 3", imagen: "/placeholder.svg?height=200&width=200", categorias: ["Moda", "Accesorios"], valoracion: 5, numReviews: 200 },
  { id: 4, nombre: "Producto 4", imagen: "/placeholder.svg?height=200&width=200", categorias: ["Deportes", "Fitness"], valoracion: 4, numReviews: 150 },
];

function EstrellasValoracion({ valoracion }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${index < valoracion ? "text-yellow-400 fill-current" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

function TarjetaProducto({ producto }) {
  return (
    <div className="relative group">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md h-40 transition-all duration-300 group-hover:opacity-0"></div>
      <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="flex flex-wrap gap-1 mb-2">
          {producto.categorias.map((categoria, index) => (
            <span key={index} className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded">
              {categoria}
            </span>
          ))}
        </div>
        <img src={producto.imagen} alt={producto.nombre} className="w-full h-24 object-cover rounded mb-2" />
        <div className="flex items-center justify-between">
          <EstrellasValoracion valoracion={producto.valoracion} />
          <span className="text-sm text-gray-600 dark:text-gray-400">{producto.numReviews} reseñas</span>
        </div>
      </div>
    </div>
  );
}

function FormularioLogin({ onClose }) {
  const [mostrarContrasena, setMostrarContrasena] = useState(false)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-96 relative">
        <h2 className="text-2xl font-bold mb-6 text-center">INICIAR SESIÓN</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Correo Electrónico" className="w-full p-2 border rounded" />
          <div className="relative">
            <input 
              type={mostrarContrasena ? "text" : "password"} 
              placeholder="Contraseña" 
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setMostrarContrasena(!mostrarContrasena)}
            >
              {mostrarContrasena ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            INICIAR SESIÓN
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">¿Olvidó su contraseña?</a>
        </div>
        <div className="mt-4 text-center">
          <span>¿No tiene una cuenta? </span>
          <a href="#" className="text-blue-500 hover:underline">REGISTRARSE AQUÍ</a>
        </div>
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [barraLateralAbierta, setBarraLateralAbierta] = useState(true)
  const [mostrarLogin, setMostrarLogin] = useState(false)
  const [modoOscuro, setModoOscuro] = useState(false)

  const toggleBarraLateral = () => setBarraLateralAbierta(!barraLateralAbierta)
  const toggleModoOscuro = () => setModoOscuro(!modoOscuro)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', modoOscuro)
  }, [modoOscuro])

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Barra lateral */}
      <aside className={`${barraLateralAbierta ? 'w-64' : 'w-16'} transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 p-4`}>
        <div className="flex items-center justify-between mb-8">
          <h1 className={`text-xl font-bold ${barraLateralAbierta ? 'block' : 'hidden'}`}>ArgyReviews</h1>
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" onClick={toggleBarraLateral}>
            {barraLateralAbierta ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        <nav>
          <ul className="space-y-2">
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
                  <li><button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Actualizaciones</button></li>
                  <li><button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Perfiles que sigues</button></li>
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
                  <li><button className="w-full text-left p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Búsqueda avanzada</button></li>
                </ul>
              )}
            </li>
            <li>
              <button className="flex items-center w-full p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                <Info className="mr-2" />
                {barraLateralAbierta && <span>ArgyReviews</span>}
              </button>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-4 left-4 flex space-x-2">
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
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <div className="relative">
            <input type="search" placeholder="Buscar..." className="w-64 p-2 pl-8 rounded border dark:border-gray-700 dark:bg-gray-800" />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div>
            <button className="mr-2 px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600" onClick={() => setMostrarLogin(true)}>Acceder</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Registrarse</button>
          </div>
        </header>

        <h2 className="text-2xl font-bold mb-6">LAS MEJORES RESEÑAS HACEN MEJORES DECISIONES</h2>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Recientemente Reseñados</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {productos.map(producto => (
              <TarjetaProducto key={producto.id} producto={producto} />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Mejores del Mes</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {productos.map(producto => (
              <TarjetaProducto key={producto.id} producto={producto} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Recientemente Añadidos</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {productos.map(producto => (
              <TarjetaProducto key={producto.id} producto={producto} />
            ))}
          </div>
        </section>
      </main>

      {mostrarLogin && <FormularioLogin onClose={() => setMostrarLogin(false)} />}

      {/* Botón de modo oscuro */}
      <button 
        className="fixed bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg"
        onClick={toggleModoOscuro}
      >
        {modoOscuro ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
      </button>
    </div>
  )
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App tab="home" />);
