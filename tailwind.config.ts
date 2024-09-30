import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        geistSans: ['var(--font-geist-sans)'],
        geistMono: ['var(--font-geist-mono)'],
        pretendard: ['var(--font-pretendard)'],
      },
      padding: {
        'safe-left': 'max(1.5rem, env(safe-area-inset-left))',
        'safe-right': 'max(1.5rem, env(safe-area-inset-right))',
      },
      maxWidth: {
        page: '1072px',
      },
      keyframes: {
        enter: {
          '0%': { opacity: '0', transform: 'translateY(1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        enter: 'enter 0.6s both',
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
              paddingLeft: '0.25rem',
            },
            'code::after': {
              content: '""',
              paddingRight: '0.25rem',
            },
            'pre code': {
              fontFamily: 'var(--font-geist-mono)',
            },
            a: {
              wordBreak: 'break-all',
            },
            code: {
              fontFamily: 'var(--font-geist-mono)',
              fontWeight: 'inherit',
              backgroundColor: 'hsl(var(--secondary))',
              borderRadius: 'calc(var(--radius) - 4px)',
            },
          },
        },
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  safelist: ['pl-4', 'pl-8'],
};
export default config;
