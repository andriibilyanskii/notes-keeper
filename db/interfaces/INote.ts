interface INote {
	_id?: string;
	userID: string;
	title: string;
	description: string;
	categoryID: string;
	createdDate: string;
	updatedDate: string;
}

export default INote;
