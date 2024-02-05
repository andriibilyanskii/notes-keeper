import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { PopUpContext, AppContext } from '@context';
import { LANGUAGES } from '@languages';

import { getDataFromLocalStorage } from '@shared';

interface IProps {
	children: React.ReactNode;
}

const Contexts: React.FC<IProps> = (props) => {
	const { children } = props;

	const router = useRouter();

	const [language, setLanguage] = useState(
		typeof window !== 'undefined'
			? (getDataFromLocalStorage('user-language', 'string') as string) ||
					(LANGUAGES.metaTag?.[window.navigator.language.split('-')?.[0]]
						? window.navigator.language.split('-')[0]
						: 'uk')
			: 'uk'
	);

	useEffect(() => {
		if (router.locale !== language && localStorage.getItem('user-language')) {
			router.replace(router.asPath, router.asPath, { locale: language });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [language, router.locale]);

	const [showLoader, setShowLoader] = useState(false);

	const [isOpenPopUp, setIsOpenPopUp] = useState(false);
	const [popupChildren, setPopupChildren] = useState<React.ReactNode>(<></>);
	const [popupHeader, setPopupHeader] = useState<React.ReactNode>(<></>);
	const [popupClassName, setPopupClassName] = useState('');
	const [onClosePopup, setOnClosePopup] = useState<any>(() => {});

	return (
		<AppContext.Provider
			value={{
				language,
				setLanguage,
				showLoader,
				setShowLoader,
			}}
		>
			<PopUpContext.Provider
				value={{
					isOpenPopUp,
					setIsOpenPopUp,
					popupChildren,
					setPopupChildren,
					popupHeader,
					setPopupHeader,
					popupClassName,
					setPopupClassName,
					onClosePopup,
					setOnClosePopup,
				}}
			>
				{children}
			</PopUpContext.Provider>
		</AppContext.Provider>
	);
};

export { Contexts };
