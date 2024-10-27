export const classnames = (...classnames: string[]) => {
	let result = "";
	classnames.forEach((className) => {
		if (className) {
			result += ` ${className}`;
		}
	});
	return result.trimEnd();
};
