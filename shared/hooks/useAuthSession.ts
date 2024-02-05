import { useSession } from 'next-auth/react';
import { cookies, useUserContext } from '@shared';

function useAuthSession() {
	const { data: session, update, status } = useSession();
	const { setUser } = useUserContext();

	return {
		isAuthenticated: status === 'authenticated',
		updateSession: async (data) => {
			const user = {
				...session?.user,
				...data,
			};

			if (user?.password) {
				// @ts-ignore
				delete user?.['password'];
			}

			cookies.setCookie('next-user', JSON.stringify(user));
			setUser(user);

			await update({
				...session,
				user,
			});
		},
		deleteSession: async () => {
			await update({ session: {}, token: {} });
		},
	};
}

export { useAuthSession };
