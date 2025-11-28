/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#8F7CFF", 
          start: "#4F9CFF",
          end: "#C76BFF",
          accent: "#3DF5FF",
        },

        ui: {
          bg: "#FFFFFF",
          soft: "#F5F8FF",
          highlight: "#EBF2FF",
          input: "#E6EEFF",
        },

        textColor: {
          base: "#0F172A",
          secondary: "#475569",
          muted: "#94A3B8",
        },

        state: {
          success: "#3BF8A0",
          warning: "#FFEB3B",
          error: "#FF6F6F",
        }
      },

      boxShadow: {
        soft: "0px 4px 18px rgba(143,124,255,0.2)",
        glow: "0px 0px 15px rgba(77,177,255,0.35)",
        strong: "0px 10px 30px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        base: "14px",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};