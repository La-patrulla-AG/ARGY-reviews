import React from "react";
import { X } from "lucide-react";
import useReportCategories from "../hooks/useReportCategories";
import api from "../../api/api";

const ReportModal = ({ isOpen, onClose, report, setReport }) => {
  const { posts, users, reviews } = useReportCategories();

  const categoryMap = {
    9: posts,
    10: users,
    11: reviews,
  };
  
  const selectedCategories = categoryMap[report.reported_content_type] || [];

  const typeMap = {
    9: "post",
    10: "usuario",
    11: "comentario",
  };
  
  const reportedType = typeMap[report.reported_content_type] || "desconocido";
  

  const handleSelection = (e) => {
    const selectedCategory = e.target.value;
    setReport((prevReport) => ({
      ...prevReport,
      category: selectedCategory,
    }));
  };

  const handleReportSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/reports/", report);
      console.log("Reporte creado!");
    } catch (error) {
      console.error(error);
    } finally {
      setReport({
        reported_content_type: "",
        reported_object_id: "",
        category: "",
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-96 max-w-md mx-4">
        <div className="flex justify-between items-center pr-4 pl-4 pt-4 pb-5">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {`Denunciar ${
              reportedType
            }`}
          </h2>

          <button
            onClick={() => {
              setReport({
                reported_content_type: "",
                reported_object_id: "",
                category: "",
              });
              onClose(); // Llama a la función para cerrar el modal
            }}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleReportSubmit}>
          <div className="pl-4 pr-4 max-h-[50vh] overflow-y-auto">
            <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
              ¿Qué sucede?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Comprobaremos que se cumplan todos los Lineamientos de la
              Comunidad, así que no te preocupes por hacer la elección perfecta.
            </p>
            <div className="space-y-2">
              {selectedCategories.map((reportCategory) => (
                <label
                  key={reportCategory.id}
                  className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md cursor-pointer"
                >
                  <input
                    id="default-radio-1"
                    type="radio"
                    name="report-reason"
                    onChange={handleSelection}
                    value={reportCategory.id}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 rounded-full"
                  />

                  <span className="text-base text-gray-700 dark:text-gray-300">
                    {reportCategory.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="pl-4 pr-4 pb-4">
            <button
              className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:dark:bg-blue-800 dark:hover:bg-blue-800 transition-colors"
              disabled={!report.category}
              type="submit"
            >
              Denunciar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportModal;
