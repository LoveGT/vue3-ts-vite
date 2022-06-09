module.exports = {
	useTabs: true, //使用tab缩进还是空格缩进
	tabWidth: 2, //tab是空格的情况下，是几个空格
	jsxSingleQuote: true,
	jsxBracketSameLine: true,
	printWidth: 80,
	singleQuote: true,
	semi: false,
	trailingComma: 'none',
	overrides: [
		{
			files: '*.json',
			options: {
				printWidth: 200
			}
		}
	],
	arrowParens: 'always'
}
