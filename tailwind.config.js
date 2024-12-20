/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
}

