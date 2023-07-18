/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {colors: {
      amarillo: '#F8EA65',
      lila: '#D2C3EA',
      negro: '#111111',
      blanco: '#F2F2F2',
      azul: '#4E86C1',
    },
  },screens: {
    '2xl': { max: '1535px' },
    // => @media (max-width: 1535px) { ... }
  
    xl: { max: '1279px' },
    // => @media (max-width: 1279px) { ... }
  
    lg: { min: '1115px' },
    // => @media (min-width: 1115px) { ... }
  
    md: { max: '767px' },
    // => @media (max-width: 767px) { ... }
  
    sm: { max: '639px' },
    // => @media (max-width: 639px) { ... }
  },
  },
  plugins: [],
}