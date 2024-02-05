import type { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '@db/connectMongo';
import { NoteController } from '@db/controllers';
import { IUser } from '@db/interfaces';

import { authorizationMiddleware, errorMessage, successMessage } from '@shared';

export async function deleteNote(userID, noteID) {
	await connectMongo();

	const noteExists = await NoteController.exists.byID(userID, noteID);
	if (!noteExists) {
		throw "note doesn't exists";
	}

	await NoteController.delete(userID, noteID);

	return successMessage;
}

export default async function handler(req: NextApiRequest & { user: IUser }, res: NextApiResponse) {
	try {
		if (!authorizationMiddleware(req)) {
			throw 'no user';
		}

		const { _id } = req.user;
		const { noteID } = req.body;

		const result: any = await deleteNote(_id, noteID);

		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(500).json(errorMessage({ status: 500, error: String(e) }));
	}
}
