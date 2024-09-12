/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('../image/')",
      },
    },
  },
  plugins: [],
}

