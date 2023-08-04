/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-nesting'), // Enable CSS nesting plugin
    require('tailwindcss'),     // Tailwind CSS
    // Other plugins if needed
  ]
}

