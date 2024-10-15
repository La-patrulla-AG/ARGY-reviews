/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Apunta a tus archivos de React en src
    './templates/frontend/index.html', // Apunta a tu archivo de plantillas de Django
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


