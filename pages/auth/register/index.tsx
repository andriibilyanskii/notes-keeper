import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { AuthLayout, Input } from '@components';
import { LANGUAGES } from '@languages';

import { errorMessage, fetchData, notificationToastFunc, successMessage } from '@shared';
import { useAuthSession, useLanguage } from '@shared/hooks';
import { signIn } from 'next-auth/react';

const Register: NextPage = () => {
	const { language } = useLanguage();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmed, setPasswordConfirmed] = useState('');

	const passwordsEqual = password === passwordConfirmed;

	const [isLoading, setIsLoading] = useState(false);

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
				title: language(LANGUAGES.AUTH.registration),
				p2: language(LANGUAGES.AUTH.singInRegisterText),
			}}
			form={{
				onSubmit: async () => {
					if (passwordsEqual) {
						const response = await fetchData(
							'/api/auth/register',
							{
								method: 'POST',
								body: { username, password, passwordConfirmed },
								withHeaders: true,
							},
							{
								setIsLoading,
							}
						);

						return response;
					}
				},
				onOk: async (response) => {
					const result = await signIn('credentials', {
						redirect: false,
						username,
						password,
					});

					if (result?.ok) {
						router?.replace('/');
					} else {
						notificationToastFunc({
							language: 'uk',
							type: 'error',
							text: 'auth error',
						});
					}
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
							minLength={8}
							isLoading={isLoading}
							autoFocus
						/>

						<Input
							placeholder={language(LANGUAGES.AUTH.repeatPassword)}
							value={passwordConfirmed}
							onChange={setPasswordConfirmed}
							type='password'
							pattern={'password'}
							isLoading={isLoading}
							required
							{...(!passwordsEqual && passwordConfirmed?.length > 0
								? {
										message: {
											type: 'error',
											text: language(
												LANGUAGES.AUTH.passwordsDontMatch
											),
										},
								  }
								: {})}
							minLength={8}
						/>
					</>
				),
				button: {
					text: language(LANGUAGES.continue),
					isDisabled: !passwordsEqual,
				},
			}}
			underForm={{
				text: language(LANGUAGES.AUTH.haveAccount),
				link: {
					to: '/auth/login',
					text: language(LANGUAGES.AUTH.signInLogin),
				},
			}}
		/>
	);
};

export default Register;
