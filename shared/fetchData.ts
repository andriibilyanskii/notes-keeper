import jwt from 'jsonwebtoken';

import { notificationToastFunc } from '@shared';

async function fetchData<Type>(
	url: string,
	params?: {
		method?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
		body?: Type;
		withHeaders?: boolean;
		authorizationUser?: any;
		multipart?: boolean;
	},
	other?: {
		setIsLoading?: (e: boolean) => void;
	}
) {
	other?.setIsLoading?.(true);

	let token = '';

	if (params?.authorizationUser) {
		const authUser = params?.authorizationUser;

		delete authUser['iat'];
		delete authUser['exp'];
		delete authUser['photo'];
		delete authUser['addedRests'];
		if (authUser?.fFeed) {
			// @ts-ignore
			delete authUser['fFeed'];
		}
		delete authUser['favoriteRests'];
		if (authUser?.password) {
			// @ts-ignore
			delete authUser['password'];
		}
		delete authUser['subscribes'];
		delete authUser['reviews'];

		token = jwt.sign(authUser, process.env.TOKEN_KEY || 'secretkey', {
			expiresIn: '365d',
		});
	}

	return await fetch(url, {
		method: params?.method || 'POST',
		...(params?.body
			? {
					body: JSON.stringify(params?.body),
			  }
			: {}),
		headers: {
			...(params?.withHeaders
				? {
						'Content-Type': 'application/json;charset=utf-8',
				  }
				: {}),
			...(params?.authorizationUser && token
				? {
						Authorization: `Bearer ${token}`,
				  }
				: {}),
		},
	})
		.then((res) => ({
			data: res.json(),
			status: res?.status,
		}))
		.then(async ({ data, status }) => {
			if (status !== 200) {
				notificationToastFunc({
					language: 'uk',
					type: 'error',
					text: (await data)?.message,
				});
			}

			return data;
		})
		.catch((error) => {
			console.log(error);

			notificationToastFunc({
				language: 'uk',
				type: 'error',
				text: String(error),
			});
		})
		.finally(() => {
			other?.setIsLoading?.(false);
		});
}

export { fetchData };
