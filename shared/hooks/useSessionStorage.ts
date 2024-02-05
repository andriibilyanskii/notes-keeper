import { useEffect, useState } from 'react';

function useSessionStorage(value: string, defaultValue: '[]' | '{}' | '""') {
	const temp =
		typeof sessionStorage !== 'undefined' && sessionStorage?.getItem(value)
			? JSON.parse(sessionStorage?.getItem(value) || '')
			: JSON.parse(defaultValue);

	const [sessionData, setSessionData] = useState(temp);

	useEffect(() => {
		const sessionStorageData = sessionStorage?.getItem(value)
			? JSON.parse(sessionStorage?.getItem(value) || '')
			: JSON.parse(defaultValue);

		setSessionData(sessionStorageData);
	}, [value, defaultValue]);

	return {
		getValue: () => sessionData,
		getProperty: (property: string) => sessionData?.[property],
		updateProperty: (data: object) => {
			const temp = { ...sessionData, ...data };
			setSessionData(temp);
			sessionStorage.setItem(value, JSON.stringify(temp));
		},
		exists: (property: string) => !!sessionData?.[property],
		existsValue: () => !!sessionData,
		updateValue: (data: any) => {
			setSessionData(data);
			sessionStorage.setItem(value, JSON.stringify(data));
		},
		getDirectValue: () => temp,
		existsDirectValue: () => !!temp,
	};
}

export { useSessionStorage };
