import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      grid: 'url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBkPSJNMCAwaDIwdjIwSDB6IiAvPgo8L3N2Zz4=")',
    },
    borderRadius: {
      4: '0.25rem',
      full: '9999px',
    },
    colors: {
      black: '#000',
      gray: {
        a9: '#a9a9a9',
      },
      white: '#fff',
      pink: {
        'dark-30': '#311023',
        DEFAULT: '#fa50b5',
      },
    },
    fontFamily: {
      sans: ['var(--sans)'],
      mono: ['var(--mono)'],
    },
    fontSize: {
      '16-mono': ['1rem', { lineHeight: '2', letterSpacing: '0.02em' }],
      18: ['1.125rem', { lineHeight: '1.56', letterSpacing: '-0.02em' }],
      '21-mono': ['1.3125rem', { lineHeight: '1.71' }],
      24: ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.02em' }],
      48: '3rem',
      64: ['4rem', { lineHeight: '1.15' }],
    },
    maxWidth: {
      780: '48.75rem',
    },
    spacing: {
      0: '0',
      10: '0.625rem',
      20: '1.25rem',
      30: '1.875rem',
      50: '3.125rem',
      60: '3.75rem',
      100: '6.25rem',
      150: '9.375rem',
    },
  },
  plugins: [],
};
export default config;
