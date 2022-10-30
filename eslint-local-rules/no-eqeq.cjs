module.exports = {
	meta: {
		messages: {
			eqeq: "Oh no, a == sign...",
		},
	},
	create: (context) => {
		return {
			"BinaryExpression[operator='==']"(node) {
				console.log(node.operator);
				context.report({
					messageId: "eqeq",
					node,
				});
			},
		};
	},
};
