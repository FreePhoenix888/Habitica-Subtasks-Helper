interface ModifiersType {
	[key: string]: boolean;
}

export function setClassName(className = '', modifiers?: ModifiersType) {
	let outputClassName = `${className} `;
	if (modifiers) {
		const classNames = className.split(' ');
		Object.entries(modifiers).forEach(([modifier, condition]) => {
			// Check if class name need modifier
			if (condition) {
				// Add modifier to every default class name
				const modifiedClassNames = classNames.map(
					(className) => `${className}--${modifier} `
				);
				outputClassName += modifiedClassNames.join(' ');
			}
		});
	}
	return outputClassName;
}
