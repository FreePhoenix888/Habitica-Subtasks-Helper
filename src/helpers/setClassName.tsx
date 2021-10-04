export function setClassName(
    className = '',
    modifiers: Record<string, boolean> = {}
): string {
    const classNames = className.trim().split(' ');
    const allModifiers = modifiers;
    classNames.forEach(className => {
        const modifier = className.split('--')[1];
        if(modifier) allModifiers[modifier] = true;
    })
    const outputClassNames = [...classNames];
    if (allModifiers) {
        Object.entries(allModifiers).forEach(([modifier, condition]) => {
            if (condition) {
                const modifiedClassName = classNames.map(
                    (className) => `${className}--${modifier}`
                );
                outputClassNames.push(...modifiedClassName);
            }
        });
    }
    return outputClassNames.join(' ');
}
