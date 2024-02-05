import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { useLanguage } from '@shared/hooks';
import { LANGUAGES } from '@languages';
import { CONSTANTS } from '@constants';

interface IProps {
	title?: string;
	description?: string;
	image?: {
		url: string;
		alt: string;
		type: 'image/svg+xml' | 'image/jpeg' | 'image/*';
	};
	dontShowEndLine?: boolean;
}

const MetaTags: React.FC<IProps> = (props) => {
	const { title, description, image, dontShowEndLine } = props;

	const { language } = useLanguage();

	const router = useRouter();

	const _title = dontShowEndLine
		? title || language(LANGUAGES.reviewsInPhone)
		: (title ? title + ' | ' : '') + language(LANGUAGES.reviewsInPhone);

	const _description = description || language(LANGUAGES.META_TAGS.DESCRIPTION.description);

	return (
		<NextSeo
			title={_title}
			description={_description}
			canonical={CONSTANTS.URL + router?.asPath.slice(1)}
			openGraph={{
				url: CONSTANTS.URL + router?.asPath.slice(1),
				title: _title,
				description: _description,
			}}
			// twitter={{
			// 	handle: '@handle',
			// 	site: '@site',
			// 	cardType: 'summary_large_image',
			// }}
		/>
	);
};

export { MetaTags };
