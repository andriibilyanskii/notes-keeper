import { Schema, model, models } from 'mongoose';

const schema = new Schema({
	title: {
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
});

const Category = models.category || model('category', schema);

export default Category;
