export function createState() {
	let value = 1;

	return {
		getValue: () => value,
		incrementValue: () => {
			value += 1;
		},
	};
}
