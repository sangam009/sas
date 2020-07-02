/* eslint-disable quote-props */
/* eslint-disable quotes */
module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: 'airbnb-base',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': ["error", { allowIndentationTabs: true }],
		// eslint-disable-next-line no-dupe-keys
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		'no-use-before-define': 'off',
		'no-console': 'off',
		'class-methods-use-this': 'off',
		'max-len': 'off',
		'no-trailing-spaces': 'off',
		"object-curly-newline": ["error", {
			// eslint-disable-next-line comma-dangle
			"ObjectPattern": { "multiline": true }
		}],
		'no-restricted-syntax': [
			'error',
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],

	},
}; 
