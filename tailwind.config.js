function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue) {
			return `rgba(var(${variableName}), ${opacityValue})`
		}
		return `rgb(var(${variableName}))`
	}
}
module.exports = {
	// purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			textColor: {
				skin: {
					base: 'var(--color-text-base)',
					muted: 'var(--color-text-muted)',
					inverted: 'var(--color-text-inverted)'
				}
			},
			backgroundColor: {
				skin: {
					fill: 'var(--color-fill)',
					'button-accent': 'var(--color-button-accent)',
					'button-accent-hover': 'var(--color-button-accent-hover)',
					'button-muted': withOpacity('--color-button-muted')
				}
			},
			gradientColorStops: {
				skin: {
					hue: 'var(--color-fill)'
				}
			}
		}
	},
	plugins: [
		function ({ addBase }) {
			addBase({
				'.el-button': {
					'background-color': 'var(--el-button-bg-color,var(--el-color-white))'
				}
			})
		}
	]
}
