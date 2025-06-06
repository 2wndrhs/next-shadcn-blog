/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              wordBreak: 'break-all',
            },
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
            code: {
              fontFamily: 'var(--font-geist-mono)',
              fontWeight: 'inherit',
              backgroundColor: 'var(--secondary)',
              borderRadius: 'var(--radius-sm)',
            },
          },
        },
      },
    },
  },
};
