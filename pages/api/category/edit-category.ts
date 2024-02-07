import type { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '@db/connectMongo';
import { CategoryController } from '@db/controllers';
import { ICategory, IUser } from '@db/interfaces';

import { authorizationMiddleware, errorMessage, successMessage } from '@shared';

export async function editCategory(userID, body) {
	await connectMongo();

	const { _id, title } = body;

	const categoryExists = await CategoryController.exists.byID(userID, _id);
	if (!categoryExists) {
		throw "category doesn't exist";
	}

	const category = await CategoryController.edit(
		userID,
		_id as string,
		{
			title,
		} as ICategory
	);

	return { ...successMessage, category };
}

export default async function handler(req: NextApiRequest & { user: IUser }, res: NextApiResponse) {
	try {
		if (!authorizationMiddleware(req)) {
			throw 'no user';
		}

		const result: any = await editCategory(req.user?._id, req.body);

		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(500).json(errorMessage({ status: 500, error: String(e) }));
	}
}
