import type { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '@db/connectMongo';
import { CategoryController, NoteController } from '@db/controllers';
import { INote, IUser } from '@db/interfaces';

import { authorizationMiddleware, errorMessage, successMessage } from '@shared';

export async function addNote(userID, noteData: INote) {
	await connectMongo();

	const { categoryID, _id, title, description } = noteData;

	if (!categoryID || categoryID === 'all') {
		throw 'no category';
	}

	const categoryExists = await CategoryController.exists.byID(userID, categoryID);
	if (!categoryExists) {
		throw "category doesn't exists";
	}

	const note = await NoteController.edit(
		userID,
		_id as string,
		{
			title,
			description,
			categoryID,
			updatedDate: new Date().toISOString(),
		} as INote
	);

	return { ...successMessage, note };
}

export default async function handler(req: NextApiRequest & { user: IUser }, res: NextApiResponse) {
	try {
		if (!authorizationMiddleware(req)) {
			throw 'no user';
		}

		const result: any = await addNote(req.user?._id, req.body);

		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(500).json(errorMessage({ status: 500, error: String(e) }));
	}
}
