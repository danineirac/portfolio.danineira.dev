/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        card: "#111827",
        neon: "#38BDF8",
        neondark: "#0EA5E9",
        muted: "#9CA3AF",
        soft: "#E5E7EB",
      },
    },
  },
  plugins: [],
}
