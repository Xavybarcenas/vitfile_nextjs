/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    
    './pages/**/*.{js,ts,jsx,tsx}',
    './componentes/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }
      
      'md': '375px',
      // => @media (min-width: 275px) { ... }
  
      'l': '425px',
      // => @media (min-width: 425px) { ... }

      'ls': '768px',
      // => @media (min-width: 768px) { ... }
      
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'hd': '1080px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
