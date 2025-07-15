/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.md',
  ],
  safelist: [
    'bg-gray-200',
    'text-gray-800',
    'dark:bg-gray-600',
    'dark:text-gray-100',
    'bg-blue-100',
    'text-blue-800',
    'dark:bg-blue-800',
    'dark:text-blue-200',
    'hover:bg-blue-200',
    'dark:hover:bg-blue-700',
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-indigo-500',
    'bg-pink-500',
    'bg-teal-500',
    'bg-orange-500',
    'text-white',
    'rounded-full', // react-pill 컴포넌트의 라운드 보더를 위해 추가
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
