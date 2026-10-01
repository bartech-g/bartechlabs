import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        paper: '#f4f2ee',
        surface: '#faf9f6',
        line: {
          DEFAULT: '#e6e3dd',
          soft: '#efece7',
          strong: '#d9d5ce'
        },
        ink: {
          DEFAULT: '#2b2a28',
          strong: '#1f1e1c'
        },
        body: '#3d3b37',
        subtle: '#55524c',
        // Slightly darker than the design's #77736c to reach 4.5:1 on surface
        muted: '#6f6b64'
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Archivo', 'sans-serif'],
        mono: ['"Courier New"', 'monospace']
      },
      maxWidth: {
        page: '1200px'
      }
    }
  }
} satisfies Config
