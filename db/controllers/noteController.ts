import { Note } from '@db/model';
import { INote } from '@db/interfaces';

import { getJSON } from '@shared';

const NoteController = {
	exists: {
		async byID(userID: string, _id: string): Promise<any> {
			return await Note.exists({ userID, _id });
		},
	},

	get: {
		async all(userID: string): Promise<Array<INote>> {
			return getJSON(await Note.find({ userID }).populate('categoryID', 'title'));
		},

		async byCategoryID(userID: string, categoryID: string): Promise<Array<INote>> {
			return getJSON(
				await Note.find({ userID, categoryID }).populate('categoryID', 'title')
			);
		},

		async byID(userID: string, id: string): Promise<INote> {
			return getJSON((await Note.findOne({ userID, _id: id })?.lean()) || {}) as INote;
		},
	},

	async edit(userID: string, noteID: string, noteData: INote): Promise<INote> {
		return getJSON(
			await Note.findByIdAndUpdate(noteID, noteData, {
				returnDocument: 'after',
				lean: true,
			})
		);
	},

	async save(noteData: INote): Promise<INote> {
		const note = await new Note(noteData);
		return getJSON(await note.save());
	},

	delete: {
		async byID(userID: string, _id: string) {
			return await Note.deleteOne({
				userID,
				_id,
			});
		},

		async byCategoryID(userID: string, categoryID: string) {
			return await Note.deleteMany({
				userID,
				categoryID,
			});
		},
	},
};

export default NoteController;
