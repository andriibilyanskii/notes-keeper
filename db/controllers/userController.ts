import { User } from '@db/model';
import { IUser } from '@db/interfaces';

import { getJSON } from '@shared';

const UserController = {
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

	save: {
		async clientsLogin(restaurantID: string, userDeviceInfo: any): Promise<string> {
			let clientLoginID = '';
			try {
				// const userLogin: IClientLogin = {
				// 	table: 'rv',
				// 	restaurantID: restaurantID,
				// 	createdDate: new Date().toISOString(),
				// 	userDeviceInfo: userDeviceInfo || {},
				// 	loginType: 'rv',
				// };
				// const client = await (await new ClientLogin(userLogin)).save();
				// clientLoginID = String(client._id);
			} catch (e) {
				console.log(e);
			}

			return clientLoginID;
		},
	},
};

export default UserController;
