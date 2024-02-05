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
				{/* <SWRProvider> */}
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
							{/*<link rel='icon' href='/favicon.ico' />*/}
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
							<meta
								name='keywords'
								content={languageHook(LANGUAGES.META_TAGS.eatwyKeywords)}
							/>
							<meta name='robots' content='index, follow' />
						</Head>
						{/*<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${CONSTANTS.GA_TRACKING_ID}`}
						/>*/}
						{/*<Script id='google-analytics'>
							{`
							  window.dataLayer = window.dataLayer || [];
							  function gtag(){dataLayer.push(arguments);}
							  gtag('js', new Date());

         					  gtag('config','${CONSTANTS.GA_TRACKING_ID}',{page_path:window.location.pathname});
        					`}
						</Script>*/}
						<Component {...pageProps} />
						<NotificationToast />
					</div>
				</AnimatePresence>
				{/* </SWRProvider> */}
			</Contexts>
		</SessionProvider>
	);
}

export default MyApp;
