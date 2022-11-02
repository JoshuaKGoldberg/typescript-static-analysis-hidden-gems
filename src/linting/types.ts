export function createState() {
	let value = 1;

	return {
		getValue: () => value,
		increment: () => {
			value += 1;
		},
	};
}
