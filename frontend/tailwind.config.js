const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  /*   important: true, */
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "// Добавлены расширения",
    "если ты используешь React",
    "./node_modules/@nextui-org/theme/dist/components/(radio|select|listbox|divider|popover|button|ripple|spinner|scroll-shadow).js"
  ],
    theme: {
      extend: {
        keyframes: {
          cursor: {
            '0%, 100%': { borderColor: 'transparent' },
            '50%': { borderColor: 'white' },
          },
          typing: {
            '0%, 50%': { width: '0ch' }, // Начало и середина - 0 символов
            '50%, 100%': { width: '18ch' }, // С середины до конца - полная ширина текста
          },
          pulse: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.5 },
          },
          rotate: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          scale: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.2)' },
          },
          bounce: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-15px)' },
          },
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          slideInLeft: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
          },
          flash: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
        },
        inset: {
          '0p': '0%', // Добавляем кастомное значение bottom: 0%
        },
        animation: {
          cursor: 'cursor 0.75s step-end infinite',
          typing: 'typing 5s steps(29) infinite',
          deleteText: 'deleteText 5s steps(29) infinite',
          pulse: 'pulse 2s infinite',
          rotate: 'rotate 3s linear infinite',
          scale: 'scale 1.5s ease-in-out infinite',
          bounce: 'bounce 1s infinite',
          fadeIn: 'fadeIn 1.5s ease-in forwards',
          slideInLeft: 'slideInLeft 1s ease-out forwards',
          wiggle: 'wiggle 1s ease-in-out infinite',
          flash: 'flash 2s infinite',
        },
      },
      screens: {
        'xs': '320px', // добавление кастомного брейкпоинта
        'xm': '480px', // добавление кастомного брейкпоинта
        'md': '768px', // Средние экраны
        'lg': '1024px', // Большие экраны
        'xl': '1280px', // Очень большие экраны
        '2xl': '1536px', // Экстра большие экраны
      },
    },
  plugins: [nextui()],
  }