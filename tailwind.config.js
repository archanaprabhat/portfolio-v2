/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-background": "#000000",
        "gray-1200": "#ebebeb",
        "gray-1100": "#b5b5b5",
        "gray-1000": "#737373",
        "gray-800": "#525252",
        "gray-400": "#404040",
        "gray-300": "#262626",
        "gray-200": "#1f1f1f",
        "gray-100": "#171717",
      },
      boxShadow: {
        custom: "0 0 0 1px rgba(255, 255, 255, 0.1)",
        "custom-hover": "0 0 0 1px rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
