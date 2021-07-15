export function setClassName(
	className = '',
	modifiers: Record<string, boolean>
) {
	const classNames = className.split(' ');
	const outputClassNames = [...classNames];
	Object.entries(modifiers).forEach(([modifier, condition]) => {
		if (condition) {
			const modifiedClassName = classNames.map(
				(className) => `${className}--${modifier}`
			);
			outputClassNames.push(...modifiedClassName);
		}
	});
	return outputClassNames.join(' ');
}
