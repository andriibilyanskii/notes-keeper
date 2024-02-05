import type { NextPage } from 'next';


import { About, NotesPage } from '@components';

import { useUserContext } from '@shared';

const Home: NextPage = () => {
	const { user } = useUserContext();

	// if (JSON.stringify(user) === '{}') {
	// 	return <Loader manualShow={true} />;
	// }

	if (!user?._id) {
		return <About />;
	}

	return <NotesPage />;
};

export default Home;
