module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"prettier",
		"prettier/flowtype",
		"prettier/react",
		"prettier/standard"
	],
	plugins: ["react", "prettier", "flowtype"],
	rules: {
		indent: ["error", 4],
		"no-tabs": 0,
		"no-unused-vars": "off",
		"class-methods-use-this": 0,
		"import/no-named-as-default": 0,
		"react/jsx-filename-extension": [
			"error",
			{
				extensions: [".js", ".jsx"]
			}
		]
	},
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			modules: true
		}
	}
};
