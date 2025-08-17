import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark_bg: '#1e1e1e',
        dark_border: '#37373d',
        dark_2_border: '#1e1e1e',
        topbar_dark_bg: '#323233',
        activity_dark_bg: '#252526',
        about_me_green: '#7ee787',
        about_me_blue: '#008bc9',
        work_experience_orange: '#ffa28b',
        work_experience_brown: '#412a25',
        skills_purple: '#939aff',
        my_work_yellow: '#ffdc8b',
        white: '#FFF',
        'red-500': '#E51400',
        'gray-200': '#292E42',
        'gray-300': '#36394A',
        'gray-500': '#8c8c8c',
        'blue-100': '#3DB9C9',
        'blue-300': '#3D59A1',
        'blue-800': '#282E44',
      },
    },
  },
  plugins: [],
};
export default config;
