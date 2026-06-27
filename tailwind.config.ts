import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          DEFAULT: '#f59e0b',
          light:   '#fbbf24',
          dark:    '#d97706',
        },
        surface: '#f8fafc',
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'float-alt':   'floatAlt 8s ease-in-out infinite',
        'blob':        'blob 14s ease-in-out infinite',
        'shimmer':     'shimmer 2.5s linear infinite',
        'marquee':     'marquee 32s linear infinite',
        'spin-slow':   'spin 20s linear infinite',
        'wa-pulse':    'waPulse 2.4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-16px)' },
        },
        floatAlt: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        blob: {
          '0%,100%': { borderRadius: '42% 58% 63% 37% / 41% 44% 56% 59%' },
          '50%':     { borderRadius: '60% 40% 34% 66% / 63% 57% 43% 37%' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        waPulse: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.55)' },
          '50%':     { boxShadow: '0 0 0 16px rgba(37,211,102,0)' },
        },
      },
      boxShadow: {
        'card':       '0 4px 24px -8px rgba(30,64,175,0.12), 0 1px 4px rgba(0,0,0,0.04)',
        'card-hover': '0 16px 48px -12px rgba(30,64,175,0.22), 0 4px 12px rgba(0,0,0,0.06)',
        'blue-sm':    '0 4px 16px -4px rgba(59,130,246,0.4)',
        'blue':       '0 8px 30px -6px rgba(59,130,246,0.5)',
        'blue-lg':    '0 16px 50px -10px rgba(59,130,246,0.5)',
        'glass':      '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.preserve-3d':      { 'transform-style': 'preserve-3d' },
        '.perspective-800':  { perspective: '800px' },
        '.perspective-1000': { perspective: '1000px' },
        '.perspective-1200': { perspective: '1200px' },
        '.backface-hidden':  { 'backface-visibility': 'hidden' },
        '.text-gradient': {
          background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-amber': {
          background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.bg-grid-blue': {
          'background-image':
            'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)',
          'background-size': '44px 44px',
        },
      })
    },
  ],
}

export default config
