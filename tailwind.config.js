/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['var(--font-heading)', 'sans-serif'],
        'body': ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        // Palette principale
        'primary': {
          50: '#FDF5F3',
          100: '#FAEBE6',
          200: '#F2D1C4',
          300: '#EAB7A2',
          400: '#E2945D',
          500: '#E07A5F',  // Couleur principale
          600: '#D85A3A',
          700: '#B8472A',
          800: '#983A20',
          900: '#7A2E19',
        },
        'secondary': {
          50: '#FDFCF7',
          100: '#F9F6E8',
          200: '#F4F1DE',  // Couleur secondaire
          300: '#EFEBCE',
          400: '#EDE8C8',
          500: '#E5DFB7',
          600: '#D4CAA0',
          700: '#C4B889',
          800: '#A69B75',
          900: '#8B8263',
        },
        'third': {
          50: '#F2F2F5',
          100: '#E8E9ED',
          200: '#D1D3DB',
          300: '#B5B8C5',
          400: '#9094A8',
          500: '#6B6F8A',
          600: '#5A5E7A',  // Third light
          700: '#3D405B',  // Couleur tertiaire
          800: '#2A2D42',
          900: '#1F212E',
        },
        // Couleurs de glassmorphisme
        'glass': {
          'light': 'rgba(244, 241, 222, 0.2)',
          'medium': 'rgba(244, 241, 222, 0.3)',
          'strong': 'rgba(244, 241, 222, 0.4)',
        },
        // Couleurs de statut
        'status': {
          'success': '#81C784',
          'warning': '#E07A5F',  // Notre primary
          'error': '#E57373',
          'info': '#3D405B',     // Notre third
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E07A5F, #D85A3A)',
        'gradient-secondary': 'linear-gradient(135deg, #F4F1DE, #EDE8C8)',
        'gradient-third': 'linear-gradient(135deg, #3D405B, #5A5E7A)',
        'gradient-warm': 'linear-gradient(135deg, #E8937A, #E07A5F)',
        'gradient-cool': 'linear-gradient(135deg, #3D405B, #5A5E7A)',
        'gradient-hero': 'linear-gradient(135deg, #E8937A 0%, #F4F1DE 50%, #F7F5E8 100%)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(224, 122, 95, 0.15)',
        'glass-lg': '0 12px 40px rgba(224, 122, 95, 0.25)',
        'glass-primary': '0 8px 24px rgba(224, 122, 95, 0.3)',
        'glass-secondary': '0 8px 24px rgba(61, 64, 91, 0.2)',
      },
      borderColor: {
        'glass-light': 'rgba(224, 122, 95, 0.15)',
        'glass-medium': 'rgba(224, 122, 95, 0.25)',
        'glass-strong': 'rgba(224, 122, 95, 0.35)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '-10': '-10',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
};