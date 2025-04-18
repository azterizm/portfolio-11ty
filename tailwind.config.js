/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,md,njk,ejs,pug,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#0001E6',
        secondary: '#E6E500',
        background: '#F3F3FF',
        white: '#F3F3FF',
        black: '#000040',
        'pure-white': '#ffffff',
        'pure-black': '#000000'
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
        'hero': ['12rem', { lineHeight: '1' }],
        'display': ['16rem', { lineHeight: '1' }],
      },
      screens: {
        'xs': '30rem',
        '2xl': '100rem',
        '3xl': '120rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

