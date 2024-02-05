import React from 'react';

interface IContext {
	isOpenPopUp: boolean;
	setIsOpenPopUp: (isOpen: boolean) => void;
	popupChildren: React.ReactNode;
	setPopupChildren: (children: React.ReactNode) => void;
	popupHeader: React.ReactNode;
	setPopupHeader: (children: React.ReactNode) => void;
	popupClassName: string;
	setPopupClassName: (className: string) => void;
	onClosePopup: () => void;
	setOnClosePopup: (e: any) => void;
}

const popUpContext: IContext = {
	isOpenPopUp: false,
	setIsOpenPopUp: (isOpen: boolean) => {},
	popupChildren: '',
	setPopupChildren: (children: React.ReactNode) => {},
	popupHeader: '',
	setPopupHeader: (children: React.ReactNode) => {},
	popupClassName: '',
	setPopupClassName: (className: string) => {},
	onClosePopup: () => {},
	setOnClosePopup: (e: any) => {},
};

const PopUpContext = React.createContext(popUpContext);

export { PopUpContext };
