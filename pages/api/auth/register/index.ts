import type { NextApiRequest, NextApiResponse } from 'next';

import { UserController } from '@db/controllers';
import { IUser } from '@db/interfaces';

import { errorMessage, getJSON, hashPassword, successMessage } from '@shared';

export async function register(username, password, passwordConfirmed) {
	if (password !== passwordConfirmed) {
		return errorMessage({ status: 500, error: 'password not confirmed' });
	}

	const userExists = await UserController.exists.byUsername(username);

	if (!userExists) {
		const userData: IUser = {
			username,
			password: await hashPassword(password),
			createdDate: new Date().toISOString(),
		};

		const user = await UserController.save(userData);
		const _id = getJSON(user)?._id;

		return { ...successMessage, _id };
	}

	return errorMessage({ status: 500, error: 'user exists' });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { username, password, passwordConfirmed } = req.body;

	const result: any = await register(username, password, passwordConfirmed);

	if (result?.ok) {
		res.status(200).json(result);
	} else {
		res.status(result?.errorInfo?.status).json(result);
	}
}
