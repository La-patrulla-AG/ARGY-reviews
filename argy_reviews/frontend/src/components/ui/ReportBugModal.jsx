import React, { useEffect } from "react";
import { Bug, X } from "lucide-react";

const BugReportModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [formData, setFormData] = React.useState({
    subject: "",
    message: "",
    category: 1,
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-[#1B2028] rounded-lg w-full max-w-md">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Bug className="w-5 h-5 text-gray-400" />
              <h2 className="text-xl font-semibold text-white">Reportar bug</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4">
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
                rows="4"
                className="w-full px-3 py-2 bg-[#12171E] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe el bug encontrado"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                // onClick={handleSubmit}
              >
                Enviar reporte
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BugReportModal;
