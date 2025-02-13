import "../../../static/css/homePage.css";
import React from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";
import { login } from "../../api/auth";
import { toast } from "react-toastify";

const LoginForm = ({ onClose , setView, isOpen }) => {
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((item) => !item)) {
      setError("Rellene todos los campos");
      return;
    }

    setError("");
    login(formData)
      .then(() => {
        notify("Inicio de sesión exitoso.", "success");
        onClose();
      })
      .catch(() => {
        setError("Usuario o contraseña incorrectos");
        console.clear();
      });
  };

  const notify = (message, type = "success", position = "bottom-right") => {
    toast[type](message, {
      position: position,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-96 relative">
        <h2 className="text-2xl font-bold mb-6 text-center">INICIAR SESIÓN</h2>
        <form noValidate className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Usuario o email"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="w-full p-2 border rounded bg-white dark:bg-gray-800 dark:border-gray-600 border-gray-200"
          />
          <div className="relative">
            <input
              type={mostrarContrasena ? "text" : "password"}
              required
              placeholder="Contraseña"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full p-2 border rounded bg-white dark:bg-gray-800 dark:border-gray-600 border-gray-200"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setMostrarContrasena(!mostrarContrasena)}
            >
              {mostrarContrasena ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {error && (
            <p className="text-red-500 font-medium text-sm text-center">
              {error}
            </p>
          )}
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            INICIAR SESIÓN
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            className="text-blue-500 hover:underline"
            onClick={() => {
              window.location.href = "https://argy-reviews-production.up.railway.app/password-reset/";
            }}
          >
            ¿Olvidó su contraseña?
          </button>
        </div>
        <div className="mt-4 text-center">
          <span>¿No tiene una cuenta? </span>
          <a href="#" className="text-blue-500 hover:underline" onClick={() => setView("register")}>
            REGISTRARSE AQUÍ
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

export default LoginForm;
