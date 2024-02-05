import type { NextPage } from 'next';

import { SuccessPage } from '@components';

import { LANGUAGES } from '@languages';

import { useLanguage } from '@shared/hooks';

const Success: NextPage = () => {
	const { language } = useLanguage();

	return (
		<SuccessPage
			iconSrc={'/img/stif/eatwy_review1.png'}
			textP1={language(LANGUAGES.REVIEWS.yourReviewSaved)}
			textS1={language(LANGUAGES.REVIEWS.yourReviewSavedDescription)}
		/>
	);
};

export default Success;
