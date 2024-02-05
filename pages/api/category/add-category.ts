import type { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '@db/connectMongo';
import { CategoryController } from '@db/controllers';
import { IUser } from '@db/interfaces';

import { authorizationMiddleware, errorMessage, successMessage } from '@shared';

export async function addCategory(userID, title) {
	await connectMongo();

	const categoryExists = await CategoryController.exists.byTitle(userID, title);
	if (categoryExists) {
		throw 'category exists';
	}

	const category = await CategoryController.save({
		title,
		userID,
		createdDate: new Date().toISOString(),
	});

	return { ...successMessage, category };
}

export default async function handler(req: NextApiRequest & { user: IUser }, res: NextApiResponse) {
	try {
		if (!authorizationMiddleware(req)) {
			throw 'no user';
		}

		const { _id } = req.user;
		const { title } = req.body;

		const result: any = await addCategory(_id, title);

		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(500).json(errorMessage({ status: 500, error: String(e) }));
	}
}
