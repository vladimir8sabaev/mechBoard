module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: "eslint:recommended",
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		indent: ["warn", "tab"],
		"linebreak-style": ["warn", "windows"],
		quotes: ["warn", "double"],
		semi: ["error", "always"],
		"no-unused-vars": ["warn"],
	},
};
