/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        screen1: { min: "800px" },
        screen2: { min: "320px", max: "500px" },
        screen3: { min: "500px", max: "800px" },
        screen4: { min: "400px", max: "500px" }, // Define a custom breakpoint at 900px
      },
    },
  },
  plugins: [],
};
