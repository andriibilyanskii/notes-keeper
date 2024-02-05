import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { IUser } from '@db/interfaces';

import { PopUpContext, AppContext, UserContext } from '@context';

import { LANGUAGES } from '@languages';

import { cookies, getDataFromLocalStorage } from '@shared';

interface IProps {
	children: React.ReactNode;
}

const Contexts: React.FC<IProps> = (props) => {
	const { children } = props;

	const router = useRouter();

	const { data: session, status } = useSession();
	const [user, setUser] = useState<IUser>({} as IUser);

	useEffect(() => {
		setUser(
			(((session?.user as IUser)?._id ===
			JSON.parse(cookies.getCookie('next-user') || '{}')?._id
				? JSON.parse(cookies.getCookie('next-user') || '{}')
				: session?.user) || {}) as IUser
		);
	}, [session]);

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
			<UserContext.Provider
				value={{
					user,
					setUser,

					status,
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
			</UserContext.Provider>
		</AppContext.Provider>
	);
};

export { Contexts };
