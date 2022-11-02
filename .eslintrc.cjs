module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:typescript-sort-keys/recommended",
		"prettier",
	],
	overrides: [
		{
			files: "src/**/*",
			rules: {
				"local-rules/no-eqeq": "error",
				"local-rules/prefer-they": "error",
			},
		},
		{
			extends: [
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
			],
			files: ["**/*.{ts,tsx}"],
			rules: {
				"expect-type/expect": "error",
				// I only disabled these so that we wouldn't see later rules
				// show up in earlier files... Don't copy these disables! 😉
				"@typescript-eslint/await-thenable": "off",
				"@typescript-eslint/no-floating-promises": "off",
				"@typescript-eslint/no-misused-promises": "off",
			},
		},
		{
			files: "*.json",
			parser: "jsonc-eslint-parser",
			rules: {
				"jsonc/sort-keys": "error",
			},
			extends: ["plugin:jsonc/recommended-with-json"],
		},
		{
			files: "**/*.test.ts",
			rules: {
				"@typescript-eslint/no-unsafe-assignment": "off",
				"@typescript-eslint/no-unsafe-call": "off",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
	plugins: [
		"@typescript-eslint",
		"local-rules",
		"simple-import-sort",
		"typescript-sort-keys",
		"eslint-plugin-expect-type",
	],
	root: true,
	rules: {
		"no-undef": "off",
		"simple-import-sort/exports": "error",
		"simple-import-sort/imports": "error",
	},
};
