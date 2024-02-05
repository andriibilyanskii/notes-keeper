import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { Text, PageCover, Link, Button, IconContent, Icon, Input, Image } from '@components';

import { getColor, useUserContext } from '@shared';
import { useLanguage } from '@shared/hooks';

import { LANGUAGES } from '@languages';
import { CONSTANTS } from '@constants';

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
