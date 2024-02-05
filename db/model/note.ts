import { Schema, model, models } from 'mongoose';

const schema = new Schema({
	title: {
		type: String,
		require: true,
		trim: true,
	},
	description: {
		type: String,
		require: true,
		trim: true,
	},
	categoryID: {
		type: String,
		require: true,
		trim: true,
	},
	userID: {
		type: String,
		require: true,
		trim: true,
	},
	createdDate: {
		type: String,
		require: true,
		trim: true,
	},
	updatedDate: {
		type: String,
		require: true,
		trim: true,
	},
});

const Note = models.note || model('note', schema);

export default Note;
