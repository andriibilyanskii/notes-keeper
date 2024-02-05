import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

interface IProps {
	children: React.ReactNode;
}

export const PrivateRoute: React.FC<IProps> = (props) => {
	const { children } = props;

	const router = useRouter();

	const temp = true;

	if (temp) {
		return <>{children}</>;
	} else {
		return null;
	}
};
