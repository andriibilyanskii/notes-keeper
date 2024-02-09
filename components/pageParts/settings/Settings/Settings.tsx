import React from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { Button, Link, PageCover, Text } from '@components';

import { formatDate, useUserContext } from '@shared';
import { useLanguage } from '@shared/hooks';

import { LANGUAGES } from '@languages';
import { CONSTANTS } from '@constants';

import styles from './Settings.module.scss';

const Settings: React.FC = () => {
	const { language } = useLanguage();
	const { user } = useUserContext();

	const router = useRouter();

	return (
		<PageCover
			mainClassName={classNames({
				[styles['settings']]: true,
			})}
		>
			{user?._id && (
				<div className={styles['settings-userInfo']}>
					<div>
						<Text.P2>
							{language(LANGUAGES.AUTH.username)}: {user?.username}
						</Text.P2>
						<Text.P2>
							{language(LANGUAGES.NOTES.createdDate)}:{' '}
							{formatDate(user?.createdDate)}
						</Text.P2>
					</div>

					<Button
						icon={{ src: CONSTANTS.ICONS.logOut, position: 'left' }}
						buttonSize={'XS'}
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
				</div>
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
