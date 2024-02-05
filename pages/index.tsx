import type {NextPage} from 'next';
import {useSession} from "next-auth/react";


import {About, NotesPage} from '@components';

import {useUserContext} from '@shared';

const Home: NextPage = () => {
	const {user} = useUserContext();

	const {data: session} = useSession();


	if (typeof session !== 'undefined' && !session?.user) {
		return <About/>;
	}

	return <NotesPage/>;
};

export default Home;
