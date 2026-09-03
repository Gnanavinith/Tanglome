/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body: ['"Satoshi"', 'sans-serif'],
      },
      colors: {
        ink: '#0A0A0A',
        paper: '#FFFFFF',
        violet: {
          DEFAULT: '#6D28D9',
          light: '#8B5CF6',
          deep: '#3B1877',
        },
      },
    },
  },
  plugins: [],
}
