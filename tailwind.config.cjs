const { SemicolonPreference } = require('typescript')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		screens:{
			'md': '768px',
			'lg': '1300px',
		},
		colors: {
			'pele': '#fbd1a2',
			'dark-pele': '#f79256',
			'jade': '#7dcfb6',
			'dark-orange': '#ee6c4d',
			'dark-blue': '#3d5a80',
			'grey-blue': '#3d5a80',
			'light-blue': '#e0fbfc',
			'black-blue': '#293241',
			'nav-blue':'#BAE4E5',
			'black':'#000000'
		},
		extend: {
			fontFamily: {
				mich: ['Michroma', 'sans-serif'],
				orb: ['Orbitron'],
				space:['Space Mono','sans-serif'],
				tenor:['Tenor+Sans','sans-serif']
				
				
			},
		},
		keyframes: {
			slide: {
				'0%': { transform: 'translate(0)' },
				'100%': { transform: 'translate(-3840px)' }
			}
		},
	},
	plugins: [],
}
