interface ModifiersType {
	[key: string]: boolean;
}

export function setClassName(
	defaultClassName = '',
	customClassName = '',
	modifiers?: ModifiersType
) {
	// Get every class name
	const defaultClassNames = defaultClassName.split(' ');
	const customClassNames = customClassName.split(' ');
	// Concatenate default class names with custom class names
	let outputClassName = `${defaultClassName} ${customClassName} `;

	if (modifiers) {
		Object.entries(modifiers).forEach(([modifier, condition]) => {
			// Check if class name need modifier
			if (condition) {
				// Add modifier to every default class name
				const modifiedDefaultClassNames = defaultClassNames.map(
					(className) => `${className}--${modifier} `
				);
				// Add modifier to every custom class name
				const modifiedCustomClassNames = customClassNames.map(
					(className) => `${className}--${modifier} `
				);
				// Concatenate modified default class names with modified custom class names
				outputClassName += `${modifiedDefaultClassNames.join(
					' '
				)} ${modifiedCustomClassNames.join(' ')} `;
			}
		});
	}

	return outputClassName;
}
