import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

interface IProps {
	children: React.ReactNode;
}

export const PrivateRoute: React.FC<IProps> = (props) => {
	const { children } = props;

	const { data: session } = useSession();

	const router = useRouter();

	useEffect(() => {
		if (typeof session !== 'undefined' && !session?.user) {
			router.replace('/auth/login');
		}
	}, [session]);

	if (session?.user) {
		return <>{children}</>;
	} else {
		return null;
	}
};
