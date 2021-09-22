export function setClassName(
    className = '',
    modifiers?: Record<string, boolean>
): string {
    const classNames = className.trim().split(' ');
    const outputClassNames = [...classNames];
    if (modifiers) {
        Object.entries(modifiers).forEach(([modifier, condition]) => {
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
