import type { NextPage } from 'next';
import { useEffect } from 'react';

import { CONSTANTS } from '@constants';

import { About, Loader, NotesPage } from '@components';

import { useUserContext } from '@shared';

const Home: NextPage = () => {
	const { user } = useUserContext();

	if (JSON.stringify(user) === '{}') {
		return <Loader manualShow={true} />;
	}

	if (!user?._id) {
		return <About />;
	}

	return <NotesPage />;
};

export default Home;
