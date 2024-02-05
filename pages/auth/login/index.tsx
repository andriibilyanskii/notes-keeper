import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { AuthLayout, Input } from '@components';

import { successMessage, errorMessage, notificationToastFunc, useUserContext } from '@shared';
import { useLanguage, useAuthSession } from '@shared/hooks';

import { LANGUAGES } from '@languages';

const Login: NextPage = () => {
	const { language } = useLanguage();
	const { user } = useUserContext();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const router = useRouter();
	const { isAuthenticated, deleteSession } = useAuthSession();

	useEffect(() => {
		if (isAuthenticated) {
			deleteSession();
		}
	}, [deleteSession, isAuthenticated]);

	return (
		<AuthLayout
			header={'info'}
			signInText={{
				title: language(LANGUAGES.AUTH.welcome),
				p2: language(LANGUAGES.AUTH.singInLoginText),
			}}
			form={{
				onSubmit: async (e) => {
					const result = await signIn('credentials', {
						redirect: false,
						username,
						password,
					});

					if (result?.ok) {
						return { ...successMessage, result };
					} else {
						notificationToastFunc({
							language: 'uk',
							type: 'error',
							text: 'auth error',
						});

						return errorMessage({ error: 'auth error', status: 500 });
					}
				},
				onOk: (e) => {
					router.replace('/');
				},
				inputs: (
					<>
						<Input
							placeholder={language(LANGUAGES.AUTH.username)}
							value={username}
							onChange={setUsername}
							required
							name={'username'}
							minLength={4}
						/>

						<Input
							placeholder={language(LANGUAGES.AUTH.password)}
							value={password}
							onChange={setPassword}
							type='password'
							pattern={'password'}
							required
							minLength={4}
						/>
					</>
				),

				button: { text: language(LANGUAGES.AUTH.loginButton) },
			}}
			underForm={{
				text: language(LANGUAGES.AUTH.dontHaveAccount),
				link: {
					to: '/auth/register',
					text: language(LANGUAGES.AUTH.register),
				},
			}}
		/>
	);
};

export default Login;
