import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 2s ease-in-out',
      },
      backgroundSize: {
        20: '20px',
      },
      gridTemplateRows: {
        subgrid: 'subgrid',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
    backgroundImage: {
      grid: 'url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBkPSJNMCAwaDIwdjIwSDB6IiAvPgo8L3N2Zz4=")',
      'soft-light': 'linear-gradient(238deg, rgba(217, 217, 217, 0.10) 0%, rgba(217, 217, 217, 0.00) 100%)',
      vignette: 'radial-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) var(--vignette-midpoint, 20%), rgba(0,0,0,1) 75%)',
    },
    borderRadius: {
      4: '0.25rem',
      20: '1.25rem',
      full: '9999px',
    },
    colors: {
      black: '#000',
      gray: {
        28: '#282828',
        30: '#303030',
        '5a': '#5a5a5a',
        a0: '#a0a0a0',
        a9: '#a9a9a9',
        aa: '#aaaaaa',
      },
      white: '#fff',
      pink: '#fa50b5',
    },
    fontFamily: {
      sans: [
        'var(--sans)',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      mono: [
        'var(--mono)',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    fontSize: {
      16: ['1rem', { lineHeight: '1.5' }],
      18: ['1.125rem', { lineHeight: '1.556' }],
      21: ['1.3125rem', { lineHeight: '1.5' }],
      24: ['1.5rem', { lineHeight: '1.5' }],
      32: ['2rem', { lineHeight: '1.15' }],
      36: ['2.25rem', { lineHeight: '1.15' }],
      48: ['3rem', { lineHeight: '1.15' }],
      64: ['4rem', { lineHeight: '1.15' }],
      // generated with https://royalfig.github.io/fluid-typography-calculator/
      'clamp-p': [
        'clamp(1rem, 0.7917rem + 0.5208vw, 1.125rem)', // 16 -> 18
        { lineHeight: 'clamp(1.5rem, 1.083rem + 1.0417vw, 1.75rem)' }, // 24 -> 28
      ],
      'clamp-sub-mono': [
        'clamp(1rem, 0.479rem + 1.302vw, 1.3125rem)', // 16 -> 21
        { lineHeight: '1.5' },
      ],
      'clamp-sub': [
        'clamp(1.125rem, 0.5rem + 1.5625vw, 1.5rem)', // 18 -> 24
        { lineHeight: 'clamp(1.75rem, 0.917rem + 2.083vw, 2.25rem);' }, // 28 -> 36
      ],
      'clamp-h1': [
        'clamp(2rem, -1.33rem + 8.33vw, 4rem)', // 32 -> 64
        { lineHeight: '1.15' },
      ],
      'clamp-h2': [
        'clamp(2rem, 0.33rem + 4.17vw, 3rem)', // 32 -> 48
        { lineHeight: '1.15' },
      ],
      'clamp-h2-alt': [
        'clamp(2rem, 1.583rem + 1.0417vw, 2.25rem);', // 32 -> 36
        { lineHeight: '1.15' },
      ],
    },
    fontWeight: {
      700: '700',
      800: '800',
    },
    letterSpacing: {
      1: '0.01em',
      2: '0.02em',
    },
    lineHeight: {
      '0': '0', // don't show space under video elements
      '1167': '1.167', // small titles
      '1330': '1.33', // footer items
      '1750': '1.75', // code
    },
    maxWidth: {
      780: '48.75rem',
      980: '61.25rem',
      1180: '73.75rem',
    },
    spacing: {
      0: '0',
      5: '0.3125rem',
      10: '0.625rem',
      15: '0.9375rem',
      20: '1.25rem',
      30: '1.875rem',
      40: '2.5rem',
      50: '3.125rem',
      60: '3.75rem',
      80: '5rem',
      100: '6.25rem',
      120: '7.5rem',
      150: '9.375rem',
      200: '12.5rem',
    },
    supports: {
      subgrid: 'grid-template-rows: subgrid',
      clamp: 'font-size: clamp(1rem, 2vw, 3rem)',
    },
  },
  plugins: [],
};
export default config;
