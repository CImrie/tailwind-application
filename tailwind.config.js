/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'brand': 'Gilroy, sans-serif',
        'handwritten': 'Gochi Hand',
      },
      colors: {
        'cf-gray': {
          500: '#444444',
        }
      },
      width: {
        'content': '1182px',
      }
    },
  },
  plugins: [],
}

