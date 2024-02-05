import { getObjectByString } from '@shared';

function groupData(data: Array<any>, type: 'date' | 'date1' | 'guest' | 'other', field?: string) {
	const groups = data?.reduce((groups, value) => {
		let typeValue;

		switch (type) {
			case 'date':
				const DATE = new Date(value.createdDate);
				typeValue = `${DATE.getFullYear()} ${DATE.getMonth()} ${DATE.getDate()}`;
				break;
			case 'date1':
				const DATE1 = new Date(getObjectByString(value, field));
				typeValue = `${DATE1.getFullYear()} ${DATE1.getMonth()} ${DATE1.getDate()}`;
				break;
			case 'guest':
				typeValue = String(value.guest);
				break;
			default:
				if (field) {
					typeValue = String(value[field]);

					if (typeValue) {
						typeValue = getObjectByString(value, field);
					}
				} else {
					typeValue = type;
				}
		}

		if (!groups[typeValue]) {
			groups[typeValue] = [];
		}

		groups[typeValue].push(value);

		return groups;
	}, {});

	return Object.keys(groups).map((value) => {
		return groups[value];
	});
}

export { groupData };
