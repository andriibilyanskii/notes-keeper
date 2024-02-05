function sortByArray(array: string[], values: any[], key: string): Array<any> {
	return array?.map((i) => values?.find((j) => j?.[key] === i));
}

export { sortByArray };
