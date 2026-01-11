/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0d10",
        fg: "#e5e7eb",
        muted: "#9ca3af",
        accent: "#8b5cf6"
      }
    }
  },
  plugins: []
}
