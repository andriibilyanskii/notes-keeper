import type { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '@db/connectMongo';

import { User } from '@db/model';

export async function getNames() {
	await connectMongo();

	const users = await User.find();

	return { name: 'JohnDoe', users: users?.map((e) => e?.username) };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(await getNames());
}
