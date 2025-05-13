/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'], // Optional secondary font
      },
      colors: {
        primary: '#1F3A93',   // Navy
        accent: '#D4AF37',    // Gold
        text: '#2C3E50',      // Charcoal
        background: '#F8F9FA',// Light gray-white
      },
    },
  },
  plugins: [],
}
