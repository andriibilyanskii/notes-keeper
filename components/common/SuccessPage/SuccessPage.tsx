import React from 'react';

import { Icon, PageCover, Text } from '@components';

import { useLanguage } from '@shared/hooks';

import styles from './SuccessPage.module.scss';

interface IProps {
	headerText?: string;
	goToMainHandler?: (e: any) => void;
	iconSrc: string;
	textP1: string;
	textS1: string;
}

const SuccessPage: React.FC<IProps> = (props) => {
	const { goToMainHandler, headerText, iconSrc, textP1, textS1 } = props;

	const { language } = useLanguage();

	return (
		<PageCover
			headers={[
				{
					type: 'back',
					props: { text: headerText },
				},
			]}
			mainClassName={styles['successPage']}
		>
			<div className={styles['successPage-top']}>
				<Icon src={iconSrc} className='successPage-image' isColorful size='8rem' />

				<div className={styles['successPage-text']}>
					<Text.P1 type='semibold'>{textP1}</Text.P1>
					<Text.S1>{textS1}</Text.S1>
				</div>
			</div>

			<div className={styles['successPage-bottom']}></div>
		</PageCover>
	);
};

export { SuccessPage };
