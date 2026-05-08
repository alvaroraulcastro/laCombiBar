/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'combi-dark': '#000000',
        'combi-green': '#5D8A66',
        'combi-cream': '#FFFFFF',
      },
    },
  },
  plugins: [],
}