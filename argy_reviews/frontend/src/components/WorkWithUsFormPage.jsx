import React, { useState } from "react";

const WorkWithUsFormPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    cargo: "",
    comentarios: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por postularte! Nos pondremos en contacto pronto.");
    setFormData({
      nombre: "",
      email: "",
      cargo: "",
      comentarios: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
        Únete a ArgyReviews
      </h1>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
        Si estás interesado en formar parte del equipo de ArgyReviews, por favor completa el siguiente formulario.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="nombre">
            Nombre Completo
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500"
            placeholder="Tu nombre completo"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500"
            placeholder="Tu correo electrónico"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="cargo">
            Cargo Deseado
          </label>
          <input
            type="text"
            id="cargo"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500"
            placeholder="El cargo que deseas solicitar"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="comentarios">
            Comentanos tus Capacidades
          </label>
          <textarea
            id="comentarios"
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            className="w-full p-3 border dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500"
            rows="4"
            placeholder="Cuéntanos por qué quieres trabajar con nosotros"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Enviar Solicitud
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkWithUsFormPage;
