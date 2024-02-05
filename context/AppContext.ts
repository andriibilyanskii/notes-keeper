import React from 'react';

interface IContext {
	language: string;
	setLanguage: (lang: string) => void;
	showLoader: boolean;
	setShowLoader: (toShow: boolean) => void
}

const reviewsSettings: IContext = {
	language: 'uk',
	setLanguage: (lang: string) => {},
	showLoader: false,
	setShowLoader: (toShow: boolean) => {},
};

const AppContext = React.createContext(reviewsSettings);

export { AppContext };
