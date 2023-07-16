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
    xl: { max: '1279px' },
    // => @media (max-width: 1279px) { ... }

    lg: { max: '1200px' },
    // => @media (max-width: 1023px) { ... }

    md: { max: '991px' },
    // => @media (max-width: 767px) { ... }

    sm: { max: '767px' },
    // => @media (max-width: 639px) { ... }
  },
  },
  plugins: [],
}

