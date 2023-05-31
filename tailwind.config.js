/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontSize: {
      '2xs': '0.65rem',
        xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  daisyui: {
    themes: false,
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ]
}