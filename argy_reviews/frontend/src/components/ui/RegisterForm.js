import "../../../static/css/homePage.css";
import React from "react";
import { Eye, EyeOff, X} from "lucide-react";
import { useState } from "react";

const RegisterForm = ({ onClose }) => {
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-96 relative">
        <h2 className="text-2xl font-bold mb-6 text-center">REGISTRARSE</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="w-full p-2 border rounded bg-white dark:bg-gray-800"
          />
           <input
            type="text"
            placeholder="Nombre de Usuario"
            className="w-full p-2 border rounded bg-white dark:bg-gray-800"
          />
          <div className="relative">
            <input
              type={mostrarContrasena ? "text" : "password"}
              placeholder="Contraseña"
              className="w-full p-2 border rounded bg-white dark:bg-gray-800"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setMostrarContrasena(!mostrarContrasena)}
            >
              {mostrarContrasena ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="relative">
            <input
              type={mostrarContrasena ? "text" : "password"}
              placeholder="Confirmar Contraseña"
              className="w-full p-2 border rounded bg-white dark:bg-gray-800"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setMostrarContrasena(!mostrarContrasena)}
            >
              {mostrarContrasena ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            REGISTRARSE
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">
            ¿Olvidó su contraseña?
          </a>
        </div>
        <div className="mt-4 text-center">
          <span>¿Ya tiene una cuenta? </span>
          <a href="#" className="text-blue-500 hover:underline">
            INICIE SESIÓN AQUÍ
          </a>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;