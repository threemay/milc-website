const OFF = 0
const WARN = 1
const ERROR = 2

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'plugin:react/recommended',
		'plugin:unicorn/recommended',
		'plugin:promise/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.tsx', '.ts', '.js', '.json'],
			},
			typescript: {},
		},
	},
	plugins: ['react', 'unicorn', 'promise', '@typescript-eslint', 'prettier'],
	rules: {
		'import/extensions': [
			ERROR,
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
				js: 'never',
			},
		],
		'import/no-extraneous-dependencies': [ERROR, { devDependencies: true }],
		'import/prefer-default-export': OFF,
		'import/no-unresolved': ERROR,
		'import/no-dynamic-require': OFF,

		'unicorn/better-regex': ERROR,
		'unicorn/prevent-abbreviations': OFF,
		'unicorn/filename-case': [
			ERROR,
			{
				cases: {
					kebabCase: true,
					camelCase: true,
					snakeCase: true,
					pascalCase: true,
				},
			},
		],
		'unicorn/no-array-instanceof': WARN,
		'unicorn/no-for-loop': WARN,
		'unicorn/prefer-add-event-listener': [
			ERROR,
			{
				excludedPackages: ['koa', 'sax'],
			},
		],
		'unicorn/prefer-query-selector': ERROR,
		'unicorn/no-null': OFF,
		'unicorn/no-array-reduce': OFF,

		'@typescript-eslint/no-useless-constructor': ERROR,
		'@typescript-eslint/no-empty-function': WARN,
		'@typescript-eslint/no-var-requires': OFF,
		'@typescript-eslint/explicit-function-return-type': OFF,
		'@typescript-eslint/explicit-module-boundary-types': OFF,
		'@typescript-eslint/no-explicit-any': OFF,
		'@typescript-eslint/no-use-before-define': ERROR,
		'@typescript-eslint/no-unused-vars': WARN,
		'no-unused-vars': OFF,

		'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx', 'ts', '.jsx', 'js'] }],
		'react/jsx-indent-props': [ERROR, 'tab'],
		'react/jsx-indent': [ERROR, 'tab'],
		'react/jsx-one-expression-per-line': OFF,
		'react/destructuring-assignment': OFF,
		'react/state-in-constructor': OFF,
		'react/jsx-props-no-spreading': OFF,
		'react/prop-types': OFF,

		'jsx-a11y/click-events-have-key-events': OFF,
		'jsx-a11y/no-noninteractive-element-interactions': OFF,
		'jsx-a11y/no-static-element-interactions': OFF,

		'lines-between-class-members': [ERROR, 'always'],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'linebreak-style': [ERROR, 'unix'],
		quotes: [ERROR, 'single'],
		semi: [ERROR, 'never'],
		'no-unused-expressions': WARN,
		'no-plusplus': OFF,
		'no-console': OFF,
		'class-methods-use-this': ERROR,
		'jsx-quotes': [ERROR, 'prefer-single'],
		'global-require': OFF,
		'no-use-before-define': OFF,
		'no-restricted-syntax': OFF,
		'no-continue': OFF,
	},
}
