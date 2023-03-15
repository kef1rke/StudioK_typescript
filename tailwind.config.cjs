/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		colors: {
			bg2: '#61472F',
			bg3: '#8B7450'
		},
		extend: {
			backgroundImage: {
				'hero-header': "url('static\background-image.jpg')"
			}
			// fontFamily: {
			// 	sans: ['Red-Hat', 'src/fontRed_Hat_Display.zip']
			// }
		}
	},
	plugins: []
};
