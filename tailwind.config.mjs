/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        meaCulpa: ['"Mea Culpa"', 'cursive'],
      },
      colors: {
        primary: '#0000FF',
      },
      maxWidth: {
        weddingContainer: '900px',
      },
    },
  },
  plugins: [],
};
