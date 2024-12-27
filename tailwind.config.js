/** @type {import('tailwindcss').Config} */

import plugin from "flowbite/plugin"

export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    // "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': {  
          '50': '#f6f4fe',
          '100': '#eeecfb',
          '200': '#dfdbf9',
          '300': '#c6bef4',
          '400': '#aa99ec',
          '500': '#8c6fe3',
          '600': '#7548d5',
          '700': '#6b3ec3',
          '800': '#5933a4',
          '900': '#4b2c86',
          '950': '#2e1b5a',
        },
      },
      fontFamily: {
        sans: [
          "Poppins", "sans-serif"
        ],
      },
    },
  },
  plugins: [
    // plugin,
    require('@tailwindcss/forms'),
  ],
}

