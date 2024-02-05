import type { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '@db/connectMongo';
import { CategoryController, NoteController } from '@db/controllers';
import { IUser } from '@db/interfaces';

import { authorizationMiddleware, errorMessage } from '@shared';

export async function getNotes(userID) {
	await connectMongo();

	const notes = await NoteController.get.all(userID);
	const categories = await CategoryController.get.all(userID);

	return { notes, categories };
}

export default async function handler(req: NextApiRequest & { user: IUser }, res: NextApiResponse) {
	try {
		if (!authorizationMiddleware(req)) {
			throw 'no user';
		}

		const { _id } = req.user;

		const result = await getNotes(_id);

		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(500).json(errorMessage({ status: 500, error: String(e) }));
	}
}
