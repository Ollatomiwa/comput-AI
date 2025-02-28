/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", ",/src/**/*.{vue, js, ts}"],
  theme: {
    extend: {
      colors: {
        "dodgeroll-gold": '#F79F1A',
        "apple-green": "#046E1B",
        "dire-wolf": "#29272727",
      },
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
