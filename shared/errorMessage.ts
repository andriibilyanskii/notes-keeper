export const errorMessage = (errorInfo: {
	error: string;
	description?: string;
	status: number;
}) => {
	return { ok: false, message: errorInfo?.error, errorInfo };
};
