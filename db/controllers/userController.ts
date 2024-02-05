import { User } from '@db/model';
import { IUser } from '@db/interfaces';

import { getJSON } from '@shared';

const UserController = {
	exists: {
		async byUsername(username: string): Promise<any> {
			return await User.exists({ username });
		},

		async byID(_id: string): Promise<any> {
			return await User.exists({ _id });
		},
	},

	get: {
		async all(): Promise<Array<IUser>> {
			return getJSON(await User.find());
		},

		async byUserName(username: string): Promise<IUser> {
			return getJSON(
				(await User.findOne({
					username,
				})?.lean()) || {}
			) as IUser;
		},

		async byID(id: string): Promise<IUser> {
			return getJSON(
				(await User.findOne({
					_id: id,
				})?.lean()) || {}
			) as IUser;
		},
	},

	async save(userData: IUser): Promise<IUser> {
		const user = await new User(userData);
		return await user.save();
	},
};

export default UserController;
