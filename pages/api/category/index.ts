import type { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '@db/connectMongo';
import { CategoryController } from '@db/controllers';
import { IUser } from '@db/interfaces';

import { authorizationMiddleware, errorMessage } from '@shared';

export async function getCategories(userID) {
	await connectMongo();

	const categories = await CategoryController.get.all(userID);

	return { categories };
}

export default async function handler(req: NextApiRequest & { user: IUser }, res: NextApiResponse) {
	try {
		if (!authorizationMiddleware(req)) {
			throw 'no user';
		}

		const { _id } = req.user;

		const result = await getCategories(_id);

		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(500).json(errorMessage({ status: 500, error: String(e) }));
	}
}
