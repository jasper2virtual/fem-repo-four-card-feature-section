/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
      },
      screens:{
        'mobile': '375px',
        'tablet': '768px',
        'desktop': '1440px',
      },
      colors:{
        primary:{
          red: 'hsl(0, 78%, 62%)',
          cyan: 'hsl(180, 62%, 55%)',
          orange: 'hsl(34, 97%, 64%)',
          blue: 'hsl(212, 86%, 64%)',
        },
        neutral:{
          'very-dark-blue': 'hsl(234, 12%, 34%)',
          'grayish-blue': 'hsl(229, 6%, 66%)',
          'very-light-gray': 'hsl(0, 0%, 98%)',
        }
      }
    },
  },
  plugins: [],
  safelist:[
    'border-t-primary-red',
    'border-t-primary-cyan',
    'border-t-primary-orange',
    'border-t-primary-blue',
  ]
}

