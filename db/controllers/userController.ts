import { ClientLogin, Restaurant, Worker } from '@db/model';
import { IClientLogin, IRestaurant, IWorker } from '@db/interfaces';

import { getJSON } from '@shared';

const UserController = {
	get: {
		async all(): Promise<Array<IRestaurant>> {
			return getJSON(await Restaurant.find());
		},

		async byUserName(username: string): Promise<IRestaurant> {
			return getJSON(
				(await Restaurant.findOne({
					username,
				})?.lean()) || {}
			) as IRestaurant;
		},

		async byID(id: string): Promise<IRestaurant> {
			return getJSON(
				(await Restaurant.findOne({
					_id: id,
				})?.lean()) || {}
			) as IRestaurant;
		},
	},

	save: {
		async clientsLogin(restaurantID: string, userDeviceInfo: any): Promise<string> {
			let clientLoginID = '';
			try {
				const userLogin: IClientLogin = {
					table: 'rv',
					restaurantID: restaurantID,
					createdDate: new Date().toISOString(),
					userDeviceInfo: userDeviceInfo || {},
					loginType: 'rv',
				};
				const client = await (await new ClientLogin(userLogin)).save();
				clientLoginID = String(client._id);
			} catch (e) {
				console.log(e);
			}

			return clientLoginID;
		},
	},
};

export default UserController;
