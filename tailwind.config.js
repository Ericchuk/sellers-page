/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'headings': ['"Cormorant Upright"'],
        'body': ['"Open Sans"'],
        'button': ['Heebo']
      },
    },
  },
  plugins: [],
}

