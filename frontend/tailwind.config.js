/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".src/App.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat'],
        Frau: ['Fraunces']
      },
      colors: {
        'dc': "hsl(158, 36%, 37%)",
        'cream': "hsl(30, 38%, 92%)",
      },
      letterSpacing: {
        "widee": "0.4em"
      },
      screens: {
        'xs': '300px'
      }
    },
  },
  plugins: [],
}

