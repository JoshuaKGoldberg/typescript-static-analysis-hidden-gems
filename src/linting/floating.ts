declare const prepareData: () => Promise<void>;
declare const workWithData: () => Promise<void>;

export async function main() {
	prepareData();

	await workWithData();
}
