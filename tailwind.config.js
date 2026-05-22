/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-background": "var(--gray-background)",
        "gray-1200": "var(--gray-1200)",
        "gray-1100": "var(--gray-1100)",
        "gray-1000": "var(--gray-1000)",
        "gray-800": "var(--gray-800)",
        "gray-400": "var(--gray-400)",
        "gray-300": "var(--gray-300)",
        "gray-200": "var(--gray-200)",
        "gray-100": "var(--gray-100)",
      },
      boxShadow: {
        custom: "0 0 0 1px rgba(255, 255, 255, 0.1)",
        "custom-hover": "0 0 0 1px rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.social-link': {
          '@apply flex h-9 cursor-pointer select-none items-center gap-1.5 will-change-[transform,colors] rounded-full bg-gray-300 pr-4 pl-[14px] font-medium transition-[colors,transform] duration-200 ease-out hover:bg-gray-400 active:scale-[0.97]': {},
        },
        '.project-card': {
          '@apply flex flex-col items-center justify-center rounded-xl bg-gray-100 shadow-custom overflow-hidden transition-[colors,box-shadow] duration-200 ease-in-out will-change-transform hover:shadow-custom-hover border border-gray-300 hover:border-gray-400': {},
        },
      });
    },
  ],
};
