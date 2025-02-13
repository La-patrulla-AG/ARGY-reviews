import React, { useState, useEffect } from "react";
import { Bug, X } from "lucide-react";
import axios from "axios";
import SolvingTickets from "./solvingTicketsForm";
import Cookies from "js-cookie";


const BugReportModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    category: 1,
  });
  const [token, setToken] = useState(null)
  useEffect(() => {
    if (Cookies.get("st")) {
      setIsAuthenticated(true);
      setToken(Cookies.get("st"))
      
    }
  }, []);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(token)
    try {
      // Primera petición para crear el ticket
      const ticketResponse = await axios.post(
        "http://127.0.0.1:8001/api/tickets/",
        {
          asunto: formData.subject,
          categoria: formData.category,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      const ticketId = ticketResponse.data.id;

      // Segunda petición para crear el mensaje del ticket
      await axios.post(
        "http://127.0.0.1:8001/api/ticket-messages/",
        {
          mensaje: formData.message,
          ticket: ticketId,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      // Limpia el formulario y cierra el modal
      setFormData({
        subject: "",
        message: "",
        category: 1,
      });
      onClose();
    } catch (error) {
      console.error("Error al enviar el reporte de bug:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-[#1B2028] rounded-lg w-full max-w-md">
        <div className="p-6">
          {!isAuthenticated ? (
            // Si el usuario no está autenticado, mostramos el modal de SolvingTickets
            <SolvingTickets
              onAuthenticated={handleAuthenticated}
              onClose={onClose}
            />
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Bug className="w-5 h-5 text-gray-400" />
                  <h2 className="text-xl font-semibold text-white">
                    Reportar bug
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#12171E] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Escribe el asunto"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 bg-[#12171E] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe el bug encontrado"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Enviar reporte
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BugReportModal;
