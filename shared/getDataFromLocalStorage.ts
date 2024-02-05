function getDataFromLocalStorage(
	data: string,
	type: 'array' | 'object' | 'string' | 'number' | 'boolean'
): Array<any> | Object | string | number | boolean {
	let defaultReturn: [] | {} | '' | 0 = '';
	switch (type) {
		case 'array':
			defaultReturn = [];
			break;
		case 'object':
			defaultReturn = {};
			break;
		case 'string':
			defaultReturn = '';
			break;
		case 'number':
			defaultReturn = 0;
			break;
		case 'boolean':
			defaultReturn = true;
			break;
		default:
			defaultReturn = '';
	}

	if (typeof window !== 'undefined') {
		const LS = localStorage.getItem(data)
			? JSON.parse(localStorage.getItem(data) as string)
			: defaultReturn;

		return LS;
	} else {
		return defaultReturn;
	}
}

export { getDataFromLocalStorage };
