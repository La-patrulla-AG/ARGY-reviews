import React from "react";

export const ReglasPage = () => {
  const reglas = [
    "Sé respetuoso con otros usuarios y sus opiniones.",
    "Proporciona reseñas honestas basadas en experiencias reales.",
    "Evita el uso de lenguaje ofensivo o inapropiado.",
    "No publiques contenido promocional o spam.",
    "Mantén tus comentarios relevantes al tema del producto o servicio.",
    "Las críticas constructivas son bienvenidas; evita comentarios destructivos.",
    "No publiques información personal o confidencial en tus reseñas.",
    "Evita duplicar reseñas para el mismo producto o servicio.",
    "No uses múltiples cuentas para manipular calificaciones o comentarios.",
    "Reporta cualquier contenido inapropiado o que viole estas reglas.",
    "Sigue las leyes locales y los términos de servicio de la plataforma.",
    "No uses esta plataforma para resolver disputas legales o personales.",
    "Evita publicar contenido engañoso o falso.",
    "Mantén un lenguaje claro y comprensible en tus reseñas.",
    "No incluyas enlaces externos que no sean relevantes o necesarios.",
    "Sé transparente sobre cualquier conflicto de interés en tus reseñas.",
    "No intentes intimidar o acosar a otros usuarios.",
    "Proporciona detalles específicos sobre tu experiencia para ayudar a otros.",
    "Evita publicar contenido que incite al odio o la violencia.",
    "Respeta los derechos de autor al compartir información o contenido."
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Reglas de la Comunidad</h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Para mantener un espacio seguro y útil para todos, sigue estas reglas al publicar reseñas:
      </p>
      <ul className="list-none text-gray-700 space-y-4">
        {reglas.map((regla, index) => (
          <li key={index} className="text-gray-700 leading-relaxed">
            {regla}
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-500 mt-8 text-center">
        El incumplimiento de estas reglas puede resultar en la eliminación de contenido o restricciones en tu cuenta.
      </p>
    </div>
  );
};

export default ReglasPage;
