import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import connectMongo from '@db/connectMongo';
import { UserController } from '@db/controllers';
import { IUser } from '@db/interfaces';

import { comparePassword, cookies } from '@shared';

async function authorize(credentials: any) {
	connectMongo();

	let user: IUser = await UserController.get.byUserName(credentials.username);

	if (user && comparePassword(credentials.password, user.password)) {
		return user;
	}

	return null;
}

export default NextAuth({
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async jwt({ token, user, trigger, session }) {
			if (trigger === 'update') {
				return { ...token, ...session.user };
			}

			return { ...token, ...user };
		},
		async session({ session, token }) {
			return { ...session, user: { ...token, ...session?.user } };
		},
	},
	providers: [
		CredentialsProvider({
			authorize,
		} as any),
	],
	secret: process.env.TOKEN_KEY,
});
