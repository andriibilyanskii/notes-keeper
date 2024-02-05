import { CONSTANTS } from '../constants';

export const getImage = (image: string[], placeholder?: 'restaurant' | 'dish'): string => {
	try {
		const imageLinkFromAPI = image ? image?.flat()?.[0] : '';
		const imageFromInternet = imageLinkFromAPI?.startsWith('http');
		const imageUploaded =
			!imageLinkFromAPI?.startsWith('http') &&
			imageLinkFromAPI &&
			!imageLinkFromAPI?.startsWith('data:image/');
		const imageDataImage = imageLinkFromAPI?.startsWith('data:image/');
		const imageNone = imageLinkFromAPI === '';

		let result = '';

		if (imageFromInternet) {
			result = imageLinkFromAPI;
		} else if (imageUploaded) {
			result = CONSTANTS.IN_PHONE_BACKEND_URL_FOR_IMAGES + imageLinkFromAPI;
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
