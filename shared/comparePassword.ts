import bcrypt from 'bcryptjs';

function comparePassword(reqPassword: string, userPassword: string) {
	return bcrypt.compareSync(reqPassword, userPassword);
}

export { comparePassword };
