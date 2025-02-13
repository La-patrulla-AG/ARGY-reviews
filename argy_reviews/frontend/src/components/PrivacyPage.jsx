import React, { useState } from "react";

const PrivacyPage = () => {
  const [aceptado, setAceptado] = useState(false);

  const manejarAceptacion = () => {
    setAceptado(!aceptado);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center  text-gray-800 mb-4">Política de Privacidad</h1>
      <p className="text-lg text-center dark:text-gray-300 text-gray-600 mb-8">
        Queremos que te sientas seguro al utilizar nuestro sitio web. A continuación, te explicamos cómo
        manejamos tus datos personales y tu privacidad.
      </p>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">1. Información que Recopilamos</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Recopilamos información personal cuando te registras en nuestro sitio, como tu nombre, dirección de correo electrónico y preferencias de comunicación.
          También podemos recopilar datos de navegación como direcciones IP y cookies para mejorar tu experiencia en el sitio.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">2. Uso de la Información</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          La información que recopilamos se utiliza para mejorar nuestros servicios, personalizar tu experiencia y enviarte actualizaciones o notificaciones importantes relacionadas con el sitio.
          No compartimos tu información personal con terceros sin tu consentimiento, salvo en los casos necesarios para cumplir con la ley.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">3. Cookies</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Utilizamos cookies para almacenar información relacionada con tus preferencias y tu actividad en el sitio. Esto nos permite mejorar la funcionalidad y la personalización del sitio.
          Puedes gestionar las preferencias de cookies a través de tu navegador.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">4. Seguridad</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Tomamos medidas de seguridad razonables para proteger tu información personal de accesos no autorizados, alteraciones o divulgaciones. Sin embargo, ninguna transmisión de datos por internet es 100% segura, por lo que no podemos garantizar la seguridad absoluta.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">5. Derechos de los Usuarios</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Tienes el derecho de acceder, corregir y eliminar cualquier información personal que tengamos sobre ti. Si deseas ejercer alguno de estos derechos, por favor, contáctanos.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">6. Cambios en la Política de Privacidad</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Las actualizaciones serán publicadas en esta página. Te recomendamos que revises regularmente la política para estar al tanto de cualquier cambio.
        </p>

        <div className="mt-8">
          <label className="inline-flex items-center text-gray-700">
            <input
              type="checkbox"
              checked={aceptado}
              onChange={manejarAceptacion}
              className="form-checkbox text-blue-600 rounded-md"
            />
            <span className="ml-2  dark:text-gray-400">Acepto la política de privacidad</span>
          </label>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            className={`px-6 py-2 rounded-lg  text-white ${aceptado ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
            disabled={!aceptado}
            onClick={() => alert('¡Gracias por aceptar nuestra política de privacidad!')}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
