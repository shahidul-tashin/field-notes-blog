/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Lora"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Work Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      rotate: {
        '-3': '-3deg',
      },
    },
  },
  daisyui: {
    themes: [
      {
        fieldnotes: {
          "primary": "#8C2F22",
          "primary-content": "#F2ECDD",
          "secondary": "#2F6E5E",
          "secondary-content": "#F2ECDD",
          "accent": "#D9A441",
          "accent-content": "#232323",
          "neutral": "#232323",
          "neutral-content": "#F2ECDD",
          "base-100": "#F2ECDD",
          "base-200": "#EAE2CE",
          "base-300": "#DDD2B8",
          "base-content": "#232323",
          "info": "#2F6E5E",
          "success": "#2F6E5E",
          "warning": "#D9A441",
          "error": "#8C2F22",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
