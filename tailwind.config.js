/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        bgPrimary: "#d1e3ff",
        bgSecondary: "#fd7e14"
      }
    },
  },
  plugins: [],
}

