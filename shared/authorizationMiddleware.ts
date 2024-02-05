import jwt from 'jsonwebtoken';

export const authorizationMiddleware = (req) => {
	if (!req?.headers?.authorization) {
		return;
	}
	const token = req.headers?.authorization?.replace(/JWT\s|Bearer\s/gi, '');
	if (!token) {
		return null;
	}
	try {
		const decoded = jwt.verify(token, process.env.TOKEN_KEY || 'secretkey');
		req.user = decoded;

		return req.user;
	} catch (err) {
		console.log(err);
		return null;
	}
};
