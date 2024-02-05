function formatDate(
	dateString: string,
	params?: {
		onlyHours?: boolean;
		onlyDate?: boolean;
	}
) {
	if (!dateString) {
		return dateString;
	}

	if (params?.onlyHours) {
		return new Date(dateString).toLocaleString('uk-UA', {
			timeZone: 'Europe/Kiev',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
	} else if (params?.onlyDate) {
		return new Date(dateString).toLocaleString('uk-UA', {
			timeZone: 'Europe/Kiev',
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
		});
	} else {
		return new Date(dateString).toLocaleString('uk-UA', {
			timeZone: 'Europe/Kiev',
			day: 'numeric',
			month: 'numeric',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
	}
}

export { formatDate };
