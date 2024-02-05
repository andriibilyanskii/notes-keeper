import type { NextApiRequest } from 'next';

export const getIPAddress = (req: NextApiRequest): string => {
	return String(
		((req.headers?.['x-forwarded-for'] || '') as string)?.split?.(',')?.pop?.()?.trim?.() ||
			req?.socket?.remoteAddress
	);
};
