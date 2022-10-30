module.exports = {
	meta: {
		fixable: "code",
		messages: {
			term: "Replace 'he or she' with 'they'.",
		},
	},
	create: (context) => {
		return {
			Literal(node) {
				if (
					typeof node.value === "string" &&
					node.value.includes("he or she")
				) {
					context.report({
						fix: (fixer) =>
							fixer.replaceText(
								node,
								`"${node.value.replace("he or she", "they")}"`
							),
						messageId: "term",
						node,
					});
				}
			},
		};
	},
};
