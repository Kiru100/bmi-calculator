/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily:{
        "Inter-Normal" : ["Inter", "sans-serif"],
        "Inter-SemiBold": ["Inter-SemiBold", "sans-serif"],
      },
      colors:{
        "link-water" : "#D6E6FE",
        "gunmetal" : "#253347",
        "dark-electric-blue" : "#5E6E85"
      }
    },
  },
  plugins: [],
}

