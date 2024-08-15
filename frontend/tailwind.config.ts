import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '665px',
        md: '865px',
        lg: '900px',
      },
      colors: {
        'main-color': '#0D66B3',
      },
      fontFamily: {
        'cinzel-decorative': ['Cinzel Decorative', 'serif'],
        'merriweather': ['Merriweather', 'serif'],
        'cormorant-garamond': ['Cormorant Garamond', 'serif'],
        'playfair-display': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
