/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#66B2B2',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens:{
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

