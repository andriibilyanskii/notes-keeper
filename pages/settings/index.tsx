import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


import { useUserContext } from '@shared';
import { useLanguage, useAuthSession } from '@shared/hooks';

import Settings from '../../components/pageParts/settings/Settings/Settings';

const Login: NextPage = () => {
	const { language } = useLanguage();
	const { user } = useUserContext();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const router = useRouter();
	const { isAuthenticated, deleteSession } = useAuthSession();

	useEffect(() => {
		if (isAuthenticated) {
			deleteSession();
		}
	}, [deleteSession, isAuthenticated]);

	return <Settings></Settings>;
};

export default Login;
