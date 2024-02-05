import { toast } from 'react-toastify';

import { LANGUAGES } from '@languages';

export const notificationToastFunc = (props) => {
	const { type, text, language, ...rest } = props;

	const toastObj = {
		position: rest.position || 'top-right',
		autoClose: rest.autoClose || 1500,
		hideProgressBar: rest.hideProgressBar || false,
		closeOnClick: rest.closeOnClick || true,
		pauseOnHover: rest.pauseOnHover || true,
		draggable: rest.draggable || true,
		progress: rest.progress || undefined,
		theme: rest.theme || 'light',
	};

	let textToast = text;

	if (!text) {
		if (type === 'success') {
			textToast = LANGUAGES.successAction[language];
		} else if (type === 'error') {
			textToast = LANGUAGES.error[language];
		}
	}

	switch (type) {
		case 'success':
			toast.success(textToast, toastObj);
			break;
		case 'error':
			toast.error(textToast, { ...toastObj, autoClose: 60000 });
			break;
		case 'warn':
			toast.warn(textToast, { ...toastObj, autoClose: 25000 });
			break;
		case 'info':
			toast.info(textToast, { ...toastObj, autoClose: 25000 });
			break;
		case 'default':
			toast(textToast, { ...toastObj, autoClose: 25000 });
			break;
	}
};
