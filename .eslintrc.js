module.exports = {
	plugins: ['prettier', '@typescript-eslint'],
	extends: ['airbnb-typescript', 'react-app', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	rules: {
		'object-curly-spacing': ['warn', 'always'],
		'no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'none',
			},
		],
		'@typescript-eslint/semi': ['off'],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'none',
			},
		],
		'@typescript-eslint/no-explicit-any': [
			'error',
			{
				ignoreRestArgs: true,
			},
		],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'max-len': [
			'warn',
			{
				code: 80,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreComments: true,
			},
		],
		'no-plusplus': [
			'error',
			{
				allowForLoopAfterthoughts: true,
			},
		],
		'react/jsx-key': 'error',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: true,
			},
		],
		'react/jsx-props-no-spreading': 'off',
		'import/prefer-default-export': 'off',
		'react/jsx-boolean-value': 'off',
		'react/prop-types': 'off',
		'react/no-unescaped-entities': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-wrap-multilines': 'off',
		'react/destructuring-assignment': 'off',
		'@typescript-eslint/no-explicit-any': ['off'],
	},
}
