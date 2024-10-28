import React, { useState, useEffect } from "react";
import axios from "axios";

const ReportModal = ({ isOpen, onClose, objectType }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [customReport, setCustomReport] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reportData = {
      category: selectedOption,
      customReport,
      objectType,
    };

    // Enviar reporte al backend
    axios.post("/reports/", reportData)
      .then(response => {
        console.log("Reporte enviado:", response.data);
        onClose();
      })
      .catch(error => {
        console.error("Error al enviar el reporte:", error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Enviar Reporte</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Categoría del Reporte:
            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
              <option value="">Seleccione una opción</option>
              {options.map(option => (
                <option key={option.id} value={option.id}>{option.name}</option>
              ))}
            </select>
          </label>
          <label>
            Reporte Personalizado:
            <textarea value={customReport} onChange={(e) => setCustomReport(e.target.value)} />
          </label>
          <button type="submit">Enviar Reporte</button>
        </form>
      </div>
    </div>
  );
};

export default ReportModal;