/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/stwui/**/*.{svelte,js,ts,html}'
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
    },
    container: { center: true },
    extend: {},
  },
  plugins: [
    require('stwui/plugin')
  ],
}

