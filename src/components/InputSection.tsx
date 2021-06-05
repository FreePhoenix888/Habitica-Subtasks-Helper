import React, { useContext, useState } from 'react';
import { FormContext } from './Form';

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

	function setClassName(
		defaultClassName: string,
		customClassName = ''
	) {
		let outputClassName = `${defaultClassName} ${customClassName} `;
		if (isHovered) {
			outputClassName += `${defaultClassName}--hover ${customClassName}--hover `;
		}
		if (isFocused) {
			outputClassName += `${defaultClassName}--focus ${customClassName}--focus `;
		}
		return outputClassName;
	}

	return (
		<div
			onMouseOverCapture={handleMouseOverCapture}
			onMouseLeave={handleMouseLeave}
			onFocusCapture={handleFocusCapture}
			onBlurCapture={handleBlurCapture}
			className={setClassName('input-section')}
		>
			{children}
		</div>
	);
}
