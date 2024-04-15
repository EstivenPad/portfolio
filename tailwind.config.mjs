import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: { 
			'russian_violet': { DEFAULT: '#3a015c', 100: '#0c0012', 200: '#170024', 300: '#230137', 400: '#2e0149', 500: '#3a015c', 600: '#6f02ae', 700: '#a207fc', 800: '#c159fd', 900: '#e0acfe' }, 
			'russian_violet': { DEFAULT: '#32004f', 100: '#0a000f', 200: '#13001f', 300: '#1d002e', 400: '#27003d', 500: '#32004f', 600: '#6700a3', 700: '#9e00fa', 800: '#bf52ff', 900: '#dfa8ff' }, 
			'russian_violet': { DEFAULT: '#220135', 100: '#07000b', 200: '#0e0016', 300: '#150121', 400: '#1c012c', 500: '#220135', 600: '#5c0390', 700: '#9505e9', 800: '#bb4dfb', 900: '#dda6fd' }, 
			'dark_purple': { DEFAULT: '#190028', 100: '#050008', 200: '#0a0010', 300: '#100018', 400: '#150021', 500: '#190028', 600: '#550087', 700: '#9100e4', 800: '#ba43ff', 900: '#dda1ff' }, 
			'dark_purple': { DEFAULT: '#11001c', 100: '#030005', 200: '#06000a', 300: '#09000f', 400: '#0c0014', 500: '#11001c', 600: '#49007a', 700: '#8400db', 800: '#b13dff', 900: '#d89eff' },
			'lightest_slate': '#ccd6f6',
			'light_slate': '#a8b2d1',
			'slate': '#8892b0'
	 	},
		fontFamily: {
			sans: ['Poppins', ...defaultTheme.fontFamily.sans],
		}
	},
	plugins: [],
}
