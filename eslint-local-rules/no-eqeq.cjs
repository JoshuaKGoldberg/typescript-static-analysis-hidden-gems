module.exports = {
	meta: {
		messages: {
			eqeq: "Oh no, a == sign...",
		},
	},
	create: (context) => {
		return {
			"BinaryExpression[operator='==']"(node) {
				context.report({
					messageId: "eqeq",
					node,
				});
			},
		};
	},
};
