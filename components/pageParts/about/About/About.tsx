import React from 'react';
import classNames from 'classnames';

import { PageCover, Button } from '@components';

import { useLanguage } from '@shared/hooks';

import { LANGUAGES } from '@languages';

import styles from './About.module.scss';

const About: React.FC = () => {
	const { language } = useLanguage();

	return (
		<PageCover
			mainClassName={classNames({
				[styles['about']]: true,
			})}
			mainPadding={false}
		>
			<div
				className={classNames({
					[styles['about-buttons']]: true,
				})}
			>
				<Button width100={true} linkTo={'/auth/login'}>
					{language(LANGUAGES.login)}
				</Button>
				<Button width100={true} linkTo={'/auth/register'} buttonType={'secondary'}>
					{language(LANGUAGES.register)}
				</Button>
			</div>
		</PageCover>
	);
};

export default About;
