import React, { useState } from 'react';

const TermsAndConditionsPage = () => {
  const [aceptado, setAceptado] = useState(false);

  const manejarAceptacion = () => {
    setAceptado(!aceptado);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Términos y Condiciones</h1>
      <p className="text-lg text-center text-gray-600 mb-8">Bienvenido a nuestra página de reseñas. Lea atentamente los siguientes términos y condiciones antes de usar nuestro servicio.</p>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">1. Introducción</h2>
        <p className="text-gray-700 leading-relaxed">
          Al acceder y utilizar nuestra página web de reseñas, usted acepta cumplir con los términos y condiciones establecidos en este documento. Si no está de acuerdo con alguno de los términos, le recomendamos que no continúe usando el sitio web.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">2. Uso del Servicio</h2>
        <p className="text-gray-700 leading-relaxed">
          Nuestro servicio de reseñas está diseñado para que los usuarios puedan compartir sus opiniones sobre productos y servicios. Está prohibido el uso malintencionado del servicio, incluyendo la publicación de reseñas falsas, difamatorias o inapropiadas.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">3. Responsabilidad del Usuario</h2>
        <p className="text-gray-700 leading-relaxed">
          Usted es el único responsable del contenido que publique en nuestra plataforma. Asegúrese de que sus reseñas sean verídicas, respetuosas y que no infrijan los derechos de propiedad intelectual de terceros.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">4. Moderación de Contenido</h2>
        <p className="text-gray-700 leading-relaxed">
          Nos reservamos el derecho de eliminar cualquier contenido que infrinja nuestras políticas, que sea ofensivo, difamatorio o que no cumpla con los estándares de la comunidad. Esto incluye reseñas sobre productos o servicios que puedan resultar inapropiadas para nuestra audiencia.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">5. Modificaciones de los Términos</h2>
        <p className="text-gray-700 leading-relaxed">
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Cualquier cambio será publicado en esta misma página. Le recomendamos que revise estos términos regularmente para mantenerse actualizado sobre cualquier modificación.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">6. Aceptación de los Términos</h2>
        <p className="text-gray-700 leading-relaxed">
          Al hacer clic en "Aceptar", usted confirma que ha leído, comprendido y acepta todas las disposiciones de este documento. Si en algún momento no está de acuerdo con los términos, deberá cesar el uso del servicio inmediatamente.
        </p>
        
        <div className="mt-8">
          <label className="inline-flex items-center text-gray-700">
            <input
              type="checkbox"
              checked={aceptado}
              onChange={manejarAceptacion}
              className="form-checkbox text-blue-600 rounded-md"
            />
            <span className="ml-2">Acepto los términos y condiciones</span>
          </label>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            className={`px-6 py-2 rounded-lg text-white ${aceptado ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
            disabled={!aceptado}
            onClick={() => alert('¡Gracias por aceptar los términos!')}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
