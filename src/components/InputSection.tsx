import React, { createContext, useContext, useEffect, useState } from 'react';
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

	function handleMouseOverCapture(event: React.MouseEvent<HTMLDivElement>) {
		changeActiveInputSectionClassName(className);
		setIsHovered(true);
	}

	function handleMouseLeave(event: React.MouseEvent<HTMLDivElement>) {
		if (!isFocused) {
			changeActiveInputSectionClassName('');
		}
		setIsHovered(false);
	}

	function handleFocusCapture(event: React.FocusEvent<HTMLElement>) {
		changeActiveInputSectionClassName(className);
		setIsFocused(true);
	}

	function handleBlurCapture(event: React.FocusEvent<HTMLElement>) {
		if (!isHovered) {
			changeActiveInputSectionClassName('');
		}
		setIsFocused(false);
	}

	const InputSectionContextValue = {
		onFocusHandler: handleFocusCapture,
		onBlurHandler: handleBlurCapture,
	};

	function setClassName() {
		let result = `input-section ${className} `;
		if (isActive) {
			result += `input-section--active ${className}--active `;
		} else if (isAnyActive && !isActive) {
			result += `input-section--non-active ${className}--non-active `;
		}
		return result;
	}

	return (
		<div
			onMouseOverCapture={handleMouseOverCapture}
			onMouseLeave={handleMouseLeave}
			onFocusCapture={handleFocusCapture}
			onBlurCapture={handleBlurCapture}
			className={setClassName()}
		>
			{children}
		</div>
	);
}
