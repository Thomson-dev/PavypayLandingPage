/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 

    Screens:{
      xs:"360px",
      sm: '#480px',
      md: '768px',
      lg:'976px',
      xl: '1440px',
    },
    extend: {
        colors:{
          LightBlue:"#1565D8", 
          btnBlue: '#011b33',
          Darkgreen:'#011B33'
            
        }
    },
  },
  plugins: [],
}