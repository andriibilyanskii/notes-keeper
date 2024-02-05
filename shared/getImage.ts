export const getImage = (image: string[]): string => {
	try {
		const imageLinkFromAPI = image ? image?.flat()?.[0] : '';
		const imageFromInternet = imageLinkFromAPI?.startsWith('http');
		const imageDataImage = imageLinkFromAPI?.startsWith('data:image/');
		const imageNone = imageLinkFromAPI === '';

		let result = '';

		if (imageFromInternet) {
			result = imageLinkFromAPI;
		} else if (imageDataImage) {
			result = imageLinkFromAPI;
		} else if (imageNone) {
			result = '';
		} else {
			result = '';
		}

		return result;
	} catch {
		return '';
	}
};
