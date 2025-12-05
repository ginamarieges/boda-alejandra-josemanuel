/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        aegean: ['tan-aegean', 'sans-serif'],
        alumni: ['Alumni Sans Pinstripe', 'sans-serif'],
        lexend: ['Lexend Mega', 'sans-serif'],
        zalando: ['Zalando Sans Expanded', 'sans-serif'],
        mono: ['Major Mono Display', 'sans-serif'],
      },
      colors: {
        // primary: '#0000FF',
        primary: '#000000',
      },
      maxWidth: {
        weddingContainer: '900px',
      },
    },
  },
  plugins: [],
};
