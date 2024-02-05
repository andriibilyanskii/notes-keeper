import { Category } from '@db/model';
import { ICategory } from '@db/interfaces';

import { getJSON } from '@shared';

const CategoryController = {
	exists: {
		async byTitle(userID: string, title: string): Promise<any> {
			return await Category.exists({ userID, title });
		},

		async byID(userID: string, _id: string): Promise<any> {
			return await Category.exists({ userID, _id });
		},
	},

	get: {
		async all(userID: string): Promise<Array<ICategory>> {
			return getJSON(await Category.find({ userID }));
		},

		async byID(userID: string, id: string): Promise<ICategory> {
			return getJSON(
				(await Category.findOne({ userID, _id: id })?.lean()) || {}
			) as ICategory;
		},
	},

	async save(categoryData: ICategory): Promise<ICategory> {
		const category = await new Category(categoryData);
		return await category.save();
	},

	async delete(userID: string, _id: string) {
		return await Category.deleteOne({
			userID,
			_id,
		});
	},
};

export default CategoryController;
