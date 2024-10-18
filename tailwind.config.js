/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'van-dyke': '#352526',
      'liver': '#594545',
      'rose-taupe': '#815B5B',
      'isabelline': '#F2F1EC',
      'dun': '#EADEC7',
      'old-lace': '#FFF8EA',
      'persian-plum': '#6A0D24',
      'steel-teal': '#628C8C',
    },
    fontFamily: {
      'roboto': ['"Roboto", sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

