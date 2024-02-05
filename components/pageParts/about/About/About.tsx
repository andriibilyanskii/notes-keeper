import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { Text, PageCover, Link, Button, IconContent, Icon, Input, Image } from '@components';

import { getColor } from '@shared';
import { useLanguage } from '@shared/hooks';

import { LANGUAGES } from '@languages';
import { CONSTANTS } from '@constants';

import styles from './About.module.scss';

const About: React.FC = () => {
	const { language } = useLanguage();

	const refAbout: any = useRef(null);
	const refForWhat: any = useRef(null);

	return (
		<PageCover
			mainClassName={classNames({
				[styles['aboutEatwy']]: true,
			})}
			onlyPhone={true}
			mainPadding={false}
		>
			<div
				className={classNames({
					[styles['aboutEatwy-textBlock']]: true,
				})}
			>
				<Text.Title
					type={'h3'}
					className={classNames({
						[styles['aboutEatwy-textBlock-text']]: true,
					})}
				>
					Notes Keeper
				</Text.Title>
			</div>
		</PageCover>
	);
};

export default About;
