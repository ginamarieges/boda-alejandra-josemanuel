/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        aegean: ['tan-aegean', 'sans-serif'],
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
