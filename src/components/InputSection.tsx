import React, { useContext, useState } from 'react';
import { FormContext } from './Form';
import '../styles/components/inputSection.scss';

interface Props {
	children: JSX.Element | JSX.Element[];
	className?: string;
}

export function InputSection(props: Props): JSX.Element {
	const { children, className = '' } = props;

	const { activeInputSectionClassName, changeActiveInputSectionClassName } =
		useContext(FormContext);
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const isActive = isHovered || isFocused;
	const isAnyActive = activeInputSectionClassName !== '';

	function handleMouseOverCapture() {
		changeActiveInputSectionClassName(className);
		setIsHovered(true);
	}

	function handleMouseLeave() {
		if (!isFocused) {
			changeActiveInputSectionClassName('');
		}
		setIsHovered(false);
	}

	function handleFocusCapture() {
		changeActiveInputSectionClassName(className);
		setIsFocused(true);
	}

	function handleBlurCapture() {
		if (!isHovered) {
			changeActiveInputSectionClassName('');
		}
		setIsFocused(false);
	}

	function setClassName(defaultClassNames = [''], customClassNames = ['']) {
		// Concatenate default class names with custom class names
		let outputClassName = `${defaultClassNames.join(
			' '
		)} ${customClassNames.join(' ')} `;

		if (isActive) {
			// Add modifier to every default class name
			const modifiedDefaultClassNames = defaultClassNames.map(
				(className) => `${className}--active `
			);
			// Add modifier to every custom class name
			const modifiedCustomClassNames = customClassNames.map(
				(className) => `${className}--active `
			);
			// Concatenate modified default class names with modified custom class names
			outputClassName += `${modifiedDefaultClassNames.join(
				' '
			)} ${modifiedCustomClassNames.join(' ')} `;
		} else if (isAnyActive && !isActive) {
			// Add modifier to every default class name
			const modifiedDefaultClassNames = defaultClassNames.map(
				(className) => `${className}--non-active `
			);
			// Add modifier to every custom class name
			const modifiedCustomClassNames = customClassNames.map(
				(className) => `${className}--non-active `
			);
			// Concatenate modified default class names with modified custom class names
			outputClassName += `${modifiedDefaultClassNames.join(
				' '
			)} ${modifiedCustomClassNames.join(' ')} `;
		}

		return outputClassName;
	}

	return (
		<div
			className={setClassName(['input-section'], [className])}
			onBlurCapture={handleBlurCapture}
			onFocusCapture={handleFocusCapture}
			onMouseLeave={handleMouseLeave}
			onMouseOverCapture={handleMouseOverCapture}
		>
			{children}
		</div>
	);
}
