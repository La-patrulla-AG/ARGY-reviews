/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Apunta a tus archivos de React en src
    './templates/frontend/index.html', // Apunta a tu archivo de plantillas de Django
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',  // Añadir la definición de 'border'
      },
    },
  },
  plugins: [],
}


