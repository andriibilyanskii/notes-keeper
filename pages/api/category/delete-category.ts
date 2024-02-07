import type { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '@db/connectMongo';
import { CategoryController, NoteController } from '@db/controllers';
import { IUser } from '@db/interfaces';

import { authorizationMiddleware, errorMessage, successMessage } from '@shared';

export async function deleteCategory(userID, categoryID) {
	await connectMongo();

	const categoryExists = await CategoryController.exists.byID(userID, categoryID);
	if (!categoryExists) {
		throw "category doesn't exist";
	}

	await CategoryController.delete(userID, categoryID);
	await NoteController.delete.byCategoryID(userID, categoryID);

	return successMessage;
}

export default async function handler(req: NextApiRequest & { user: IUser }, res: NextApiResponse) {
	try {
		if (!authorizationMiddleware(req)) {
			throw 'no user';
		}

		const { _id } = req.user;
		const { categoryID } = req.body;

		const result: any = await deleteCategory(_id, categoryID);

		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(500).json(errorMessage({ status: 500, error: String(e) }));
	}
}
