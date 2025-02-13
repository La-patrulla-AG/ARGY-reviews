import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { X, Eye, EyeOff } from "lucide-react";

const SolvingTickets = ({ initialMode = "login", onClose }) => {
  // Si no hay cookie, forzamos el modo de registro
  const [currentMode, setCurrentMode] = useState(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!Cookies.get("st")) {
      setCurrentMode("register");
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      if (currentMode === "login") {
        // Login: enviamos username y password
        const loginRes = await axios.post("http://127.0.0.1:8001/api/login/", {
          username: formData.username,
          password: formData.password,
        });
        const token = loginRes.data.token;
        // Guardamos el token en la cookie
        Cookies.set("st", token, { expires: 7 });
        onClose();
      } else {
        // Registro: enviamos username, email y password
        await axios.post("http://127.0.0.1:8001/api/usuarios/", {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
        // Luego de registrarse, logueamos al usuario
        const loginRes = await axios.post("http://127.0.0.1:8001/api/login/", {
          username: formData.username,
          password: formData.password,
        });
        const token = loginRes.data.token;
        Cookies.set("st", token, { expires: 7 });
        onClose();
      }
    } catch (error) {
      console.error("Error en autenticación:", error);
      setErrorMsg(
        currentMode === "login"
          ? "Error al iniciar sesión. Verifica tus credenciales."
          : "Error al registrarse. Inténtalo nuevamente."
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-[#1a1f2e] rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-6">
            {currentMode === "login"
              ? "Acceder a SolvingTickets"
              : "Registrarse en SolvingTickets"}
          </h2>

          {errorMsg && (
            <p className="mb-4 text-center text-red-500 text-sm">{errorMsg}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="username"
                placeholder="Usuario"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-[#2a2f3e] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {currentMode === "register" && (
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-[#2a2f3e] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            )}

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-[#2a2f3e] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-10"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition-colors"
            >
              {currentMode === "login" ? "Iniciar Sesión" : "Registrarse"}
            </button>
          </form>

          {currentMode === "login" ? (
            <div className="mt-4 text-center text-sm text-gray-400">
              <a href="#" className="hover:text-white">
                ¿Olvidó su contraseña?
              </a>
              <p className="mt-2">
                ¿No tiene una cuenta?{" "}
                <a
                  href="#"
                  onClick={() => setCurrentMode("register")}
                  className="text-blue-500 hover:text-blue-400"
                >
                  Registrarse aquí
                </a>
              </p>
            </div>
          ) : (
            <div className="mt-4 text-center text-sm text-gray-400">
              ¿Ya tiene una cuenta?{" "}
              <a
                href="#"
                onClick={() => setCurrentMode("login")}
                className="text-blue-500 hover:text-blue-400"
              >
                Iniciar sesión
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolvingTickets;
