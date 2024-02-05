function leadToArray(data) {
	if (data) {
		if (typeof data === 'string') {
			return [data];
		} else {
			return data;
		}
	} else {
		return [];
	}
}

export { leadToArray };
