/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fef6f9',
        primary: '#E94496',     // rosa pastel
        secondary: '#c4b5fd',   // lila suave
        accent: '#fcd34d',      // amarillo cálido
        text: '#2e2e2e',        // gris oscuro legible
        peachy: '#F79064',      // melocotón
        turquesa: '#ABF5E4',     //turquesa pastel
        greenish: '#BFF5C6'     // verdecito
      },
      fontFamily: {
      sans: ['"Noto Sans"', 'sans-serif'],
      fancy: ['"Dancing Script"', 'cursive']
      },
      backgroundImage: {
        'cat-pattern': "url('/src/assets/bg-cats.png')", // lo usarás después
      },
      boxShadow: {
        cute: '0 4px 6px rgba(249, 168, 212, 0.3)',
      },

    },
  },
  plugins: [],
};