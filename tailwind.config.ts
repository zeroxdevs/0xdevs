import type { Config } from 'tailwindcss';
import { colorPalette } from './src/settings';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '3xl': { max: '2560px' },
      // => @media (max-width: 2560px) { ... }

      '2xl': { max: '1735px' },
      // => @media (max-width: 1735px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      '2md': { max: '940px' },

      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      xs: { max: '450px' },
      // => @media (max-width: 450px) { ... }
      xxs: { max: '400px' },
      // => @media (max-width: 400px) { ... }
      xxxs: { max: '350px' },
      // => @media (max-width: 400px) { ... }
    },
    extend: {
      colors: colorPalette(),
    },
  },
  plugins: [],
};
export default config;
