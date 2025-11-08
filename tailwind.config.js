/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: '#0A0A1A',
        ether: '#4A90E2',
        deep: '#2D1B69',
        soft: '#E5E7FF',
      },
    },
  },
  plugins: [],
}
