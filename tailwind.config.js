/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffc107", // Construction Yellow
        secondary: "#212121", // Dark Gray
        accent: "#f57c00",
        dark: "#1a1a1a",
        light: "#f5f5f5"
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
        heading: ['"Lato"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px',
        },
      }
    },
  },
  plugins: [],
}
