import { useContext } from 'react';

import { PopUpContext } from '@context';

function usePopUpContext() {
	const context = useContext(PopUpContext);

	return context;
}

export { usePopUpContext };
