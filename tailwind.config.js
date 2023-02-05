/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    backgroundColor:{
      darki: '#030B19',
      fre: '#3A68B8',
      fhg: '#09111E',
      transparent: 'transparent'
    },
    fontFamily:{
      OpenSans:["'Open Sans', sans-serif;"],
    },
    textColor:{
      kls: '#00ABFF',
      ins: '#3A68B8'
    },
    borderColor:{
      bof: '#3A68B8',
    },
  },
  plugins: [],
}
