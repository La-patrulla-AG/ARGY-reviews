import { Eye, EyeOff, X } from "lucide-react";
import React, { useState } from "react";
import "../../../static/css/homePage.css";
import api from "../../api/api";
import { login } from "../../api/auth";
import { toast } from "react-toastify";

const RegisterForm = ({ onClose , setView }) => {
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((item) => !item)) {
      setError("Rellene todos los campos");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Ingrese un correo electrónico válido");
      return;
    }

    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (!/[!@#$%?¿¡\^&*()<>,."]/.test(formData.password)) {
      setError("La contraseña debe contener al menos un carácter especial");
      return;
    }
    if (!/[A-Z]/.test(formData.password)) {
      setError("La contraseña debe contener al menos una letra mayúscula");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setError("");

    try {
      await api.post("/register/", formData);

      // Redirigir a la página de login
      login(formData).then(() => {
        notify("Registro de usuario exitoso", "success");
        onClose();
      });
    } catch {
      setError("Error al registrar");
    }
  };

  const notify = (message, type = "success", position = "bottom-right") => {
    toast[type](message, {
      position: position,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-96 relative">
        <h2 className="text-2xl font-bold mb-6 text-center">REGISTRARSE</h2>
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Correo Electrónico"
            className="w-full p-2 border rounded bg-white dark:bg-gray-800 dark:border-gray-600 border-gray-200"
          />
          <input
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            placeholder="Nombre de Usuario"
            className="w-full p-2 border rounded bg-white dark:bg-gray-800 dark:border-gray-600 border-gray-200"
          />
          <div className="relative">
            <input
              type={mostrarContrasena ? "text" : "password"}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Contraseña"
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
          <div className="relative">
            <input
              type={mostrarContrasena ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              placeholder="Confirmar Contraseña"
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            REGISTRARSE
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline"
          onClick={() => {
            window.location.href = "https://argy-reviews-production.up.railway.app/password-reset/";
          }}>
            ¿Olvidó su contraseña?
          </a>
        </div>
        <div className="mt-4 text-center">
          <span>¿Ya tiene una cuenta? </span>
          <a href="#" className="text-blue-500 hover:underline" onClick={() => setView("login")}>
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
