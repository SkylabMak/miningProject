/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      colors:{
        "primary":"#053B50",
        "secondary":"#176B87",
        "accent":"#64CCC5",
        "pink":"#EE9AE5" ,
        "black":"#272727",
        "white":"#FFFFFF",
        "shadow":"#DDDDDD"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

