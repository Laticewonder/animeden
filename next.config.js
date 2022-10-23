/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  images: {
    domains: ["s4.anilist.co", "gogocdn.net"]
  },
  theme: {
    extend: {
    },
  },
  plugins: [],
}