/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        store: ["rgba(45, 57, 73, 0.04)"],
      },
      backgroundImage: {
        layerStaite: ["linear-gradient(270deg, #8C939B 0%, #243040 100%)"],
        Shopping: ["linear-gradient(180deg, #243040 0%, #8B929B 100%)"],
        brownRang: ["linear-gradient(270deg,#925a37 0%, #BD7D41 100%)"],
      },
    },
  },
  plugins: [],
};
