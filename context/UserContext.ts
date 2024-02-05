import React from 'react';
import { IUser } from '@db/interfaces';

interface IContext {
	user: IUser;
	setUser: (user: IUser) => void;
	status: 'authenticated' | 'loading' | 'unauthenticated';
}

const userContext: IContext = {
	user: {} as IUser,
	setUser: (user: IUser) => {},
	status: 'loading',
};

const UserContext = React.createContext(userContext);

export { UserContext };
