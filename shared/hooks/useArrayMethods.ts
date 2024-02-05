function useArrayMethods() {
	return {
		toggleValue: (
			value: string,
			array: string[],
			setArray?: (e: string[]) => void,
			localStorageTitle?: string
		) => {
			let temp = [...(array as string[])];
			if (temp?.includes(value) as any) {
				temp = temp?.filter((e) => e !== value);
			} else {
				temp = [...new Set([...temp, value])];
			}

			if (localStorageTitle) {
				localStorage.setItem(localStorageTitle, JSON.stringify(temp));
			}

			setArray?.(temp);

			return temp;
		},

		addValue: (
			value: string,
			array: string[],
			setArray: (e: string[]) => void,
			localStorageTitle?: string
		) => {
			let temp = [...(array as string[])];
			if (!temp?.includes(value)) {
				temp = [...new Set([...temp, value])];
			} else {
				temp = [...temp.filter((e) => e !== value), value];
			}

			if (localStorageTitle) {
				localStorage.setItem(localStorageTitle, JSON.stringify(temp));
			}

			setArray(temp);
		},

		replaceValue(
			array: string[],
			setArray: (e: string[]) => void,
			localStorageTitle?: string
		) {
			if (localStorageTitle) {
				localStorage.setItem(localStorageTitle, JSON.stringify(array));
			}

			setArray(array);
		},

		removeAll(setArray: (e: string[]) => void, localStorageTitle?: string) {
			if (localStorageTitle) {
				localStorage.setItem(localStorageTitle, JSON.stringify([]));
			}

			setArray([]);
		},
	};
}

export { useArrayMethods };
