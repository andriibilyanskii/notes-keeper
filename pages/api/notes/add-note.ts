import type { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '@db/connectMongo';
import { CategoryController, NoteController } from '@db/controllers';
import { IUser } from '@db/interfaces';

import { authorizationMiddleware, errorMessage, successMessage } from '@shared';

export async function addNote(userID, title, description, categoryID) {
	await connectMongo();

	if (!categoryID || categoryID === 'all') {
		throw 'no category';
	}

	const categoryExists = await CategoryController.exists.byID(userID, categoryID);
	if (!categoryExists) {
		throw "category doesn't exists";
	}

	const createdDate = new Date().toISOString();

	const note = await NoteController.save({
		title,
		description,
		categoryID,
		userID,
		createdDate,
		updatedDate: createdDate,
	});

	return { successMessage, note };
}

export default async function handler(req: NextApiRequest & { user: IUser }, res: NextApiResponse) {
	try {
		if (!authorizationMiddleware(req)) {
			throw 'no user';
		}

		const { _id } = req.user;
		const { title, description, categoryID } = req.body;

		const result: any = await addNote(_id, title, description, categoryID);

		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(500).json(errorMessage({ status: 500, error: String(e) }));
	}
}
