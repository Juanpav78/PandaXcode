/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'primary': '#B13D14',
				'secondary': '#9C1A04',
				'blacking': '#171717',
				'withing': '#F5EFEE',
				'outscope': '#717171'
			}
		},
	},
	plugins: [],
}
