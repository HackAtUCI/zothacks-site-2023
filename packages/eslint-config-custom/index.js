module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		"next/core-web-vitals",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"prettier",
	],
	plugins: ["react", "react-hooks", "react-refresh"],
	rules: {
		"@next/next/no-html-link-for-pages": "off",
		eqeqeq: "error",
		"no-unused-expressions": "warn",
		"@typescript-eslint/no-unused-vars": "warn",
		"react-refresh/only-export-components": [
			"warn",
			{
				allowConstantExport: true,
			},
		],
		"react-hooks/exhaustive-deps": "error",
		"react/no-array-index-key": "error",
		"react/no-danger": "error",
		"react/no-unstable-nested-components": "error",
		"react/self-closing-comp": "warn",
	},
	parserOptions: {
		babelOptions: {
			presets: [require.resolve("next/babel")],
		},
	},
};
