import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';
import { AnimatePresence } from 'framer-motion';

import { Contexts, NotificationToast } from '@components';
import { useLanguage } from '@shared/hooks';

import { CONSTANTS } from '@constants';

import { LANGUAGES } from '@languages';

import '@styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	const languageHook = useLanguage().language;
	const { lang } = useLanguage();
	const router = useRouter();

	return (
		<SessionProvider refetchInterval={0} session={(pageProps as any)?.session}>
			<Contexts>
				<AnimatePresence initial={false} mode='popLayout'>
					<div>
						<Head>
							<title>
								{languageHook(LANGUAGES.META_TAGS.DESCRIPTION.main)}
							</title>
							<meta
								name='description'
								content={languageHook(
									LANGUAGES.META_TAGS.DESCRIPTION.description
								)}
							/>
							<link rel='icon' type='image/png' href='/logo.png' />
							<meta
								name='viewport'
								content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
							/>
							<meta name='author' content='Andrii Bilianskyi' />
							{lang === 'uk' && (
								<link
									rel='canonical'
									href={CONSTANTS.URL + router?.asPath.slice(1)}
								/>
							)}

							<meta name='robots' content='index, follow' />
						</Head>

						<Component {...pageProps} />
						<NotificationToast />
					</div>
				</AnimatePresence>
			</Contexts>
		</SessionProvider>
	);
}

export default MyApp;
