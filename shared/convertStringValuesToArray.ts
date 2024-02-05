export const convertStringValuesToArray = (obj) => {
	for (const key in obj) {
		if (typeof obj[key] === 'string') {
			obj[key] = [obj[key]];
		}
	}
	return obj;
};
