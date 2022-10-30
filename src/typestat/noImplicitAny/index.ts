export const withNumber = (arg) => arg;

export const withObject = (arg) => arg;

export const usesWithString = () => {
	withNumber(123);
	withObject({ hello: "world" });
};
