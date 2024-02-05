import { useRouter } from 'next/router';

import { useAppContext } from '@shared';

function useLanguage() {
	const { language } = useAppContext();

	const router = useRouter();

	return {
		lang: language,
		language: (langObj: any) =>
			langObj?.[router?.locale || language] ||
			langObj?.[language] ||
			langObj?.['uk'] ||
			langObj?.['en'],
	};
}

export { useLanguage };
