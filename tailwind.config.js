/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        second: ["var(--second-font)"],
      },
      colors: {
        tirquoize: "#31eace",
        skyblue: "#2a2f34",
      },
      keyframes: {
        flash: {
          "0%": { transform: "translate(-50%, -50%) scale(0)", opacity: "0.5" },
          "100%": {
            transform: "translate(-50%, -50%) scale(10)",
            opacity: "0",
          },
        },
      },
      animation: {
        flash: "flash 0.4s ease-out",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
