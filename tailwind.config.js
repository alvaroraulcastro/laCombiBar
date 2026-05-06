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
        'combi-orange': '#FF6B35',
        'combi-yellow': '#F7C548',
        'combi-dark': '#1A1A2E',
        'combi-cream': '#FFF5E6',
      },
    },
  },
  plugins: [],
}
