import { Note } from '@db/model';
import { INote } from '@db/interfaces';

import { getJSON } from '@shared';

const NoteController = {
	exists: {
		async byID(userID: string, _id: string): Promise<any> {
			return await Note.exists({ _id });
		},
	},

	get: {
		async all(userID: string): Promise<Array<INote>> {
			return getJSON(await Note.find({ userID }));
		},

		async byID(userID: string, id: string): Promise<INote> {
			return getJSON((await Note.findOne({ userID, _id: id })?.lean()) || {}) as INote;
		},
	},

	async save(noteData: INote): Promise<INote> {
		const note = await new Note(noteData);
		return await note.save();
	},

	async delete(userID: string, _id: string) {
		return await Note.deleteOne({
			userID,
			_id,
		});
	},
};

export default NoteController;
