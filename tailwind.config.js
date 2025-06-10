/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ['"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'lines': "url('src/assets/Lines.svg')",
        'dots': "url('src/assets/Dots.svg')"
      },
      colors:{
        'primary': '#C778DD',
        'gray': '#ABB2BF',
        'background': '#282C33',
      }
    },
  },
  plugins: [],
}

