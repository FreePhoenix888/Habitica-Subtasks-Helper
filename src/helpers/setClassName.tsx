enum ClassNameModifiers {
	active,
	checked,
	focus,
	hover,
};

export function setClassName(
	defaultClassNames = [''],
	customClassNames = [''],
	conditions?: boolean[],
	modifiers?: (keyof typeof ClassNameModifiers)[]
) {
	// Concatenate default class names with custom class names
	let outputClassName = `${defaultClassNames.join(' ')} ${customClassNames.join(
		' '
	)} `;

	if (conditions && modifiers) {
		// Checks
		const conditionsLength = conditions.length;
		if (conditionsLength !== modifiers.length)
			throw new Error('Conditions length is not equal modifier length.');

		for (let i = 0; i < conditionsLength; i++) {
			const condition = conditions[i];
			const modifier = modifiers[i];

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
		}
	}

	return outputClassName;
}
