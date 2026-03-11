/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#A556F8',
        'secondary-purple': '#4922E5',
        'dark-bg': '#020202',
        'light-text': '#FFFFFF',
      }
    },
  },
  plugins: [],
}