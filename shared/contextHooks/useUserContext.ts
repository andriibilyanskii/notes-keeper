import { useContext } from 'react';

import { UserContext } from '@context';

function useUserContext() {
	const context = useContext(UserContext);

	return context;
}

export { useUserContext };
