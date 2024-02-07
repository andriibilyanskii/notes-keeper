import React from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import classNames from 'classnames';


import { Button, Link, PageCover, Text } from '@components';

import {
	usePopUpContext,
	useUserContext,
} from '@shared';
import { useLanguage } from '@shared/hooks';

import { LANGUAGES } from '@languages';
import { CONSTANTS } from '@constants';

import styles from './Settings.module.scss';

const Settings: React.FC = () => {
	const { language } = useLanguage();

	const { setIsOpenPopUp, setPopupChildren } = usePopUpContext();
	const { user } = useUserContext();

	const router = useRouter();

	return (
		<PageCover
			mainClassName={classNames({
				[styles['settings']]: true,
			})}
		>
			{user?._id && (
				<Button
					icon={{ src: CONSTANTS.ICONS.logOut, position: 'left' }}
					onClick={async () => {
						await signOut({
							redirect: false,
							callbackUrl: '/',
						});
						router?.replace('/');
					}}
				>
					{language(LANGUAGES.AUTH.logOut)}
				</Button>
			)}

			<Text.P2 className={styles['settings-text']}>
				Created by{' '}
				<Link
					to={'https://github.com/andriibilyanskii'}
					className={styles['settings-text-link']}
				>
					Andrii Bilianskyi
				</Link>
			</Text.P2>
		</PageCover>
	);
};

export default Settings;
