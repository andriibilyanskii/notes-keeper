import { Schema, model, models } from 'mongoose';

const schema = new Schema({
	username: {
		type: String,
		require: true,
		trim: true,
	},
	password: {
		type: String,
		require: true,
		trim: true,
	},
	token: {
		type: String,
		require: true,
		trim: true,
	},
	createdDate: {
		type: String,
		require: true,
		trim: true,
	},
});

const User = models.worker || model('worker', schema);

export default User;
