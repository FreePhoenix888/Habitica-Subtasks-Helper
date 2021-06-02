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
	const [isHovered, changeIsHovered] = useState<boolean>(false);
	const [isFocused, changeIsFocused] = useState<boolean>(false);
	const isActive =
		activeInputSectionClassName &&
		className.includes(activeInputSectionClassName);
	const isAnyActive = Boolean(activeInputSectionClassName);

	function handleMouseOverCapture(event: React.MouseEvent<HTMLDivElement>) {
		changeActiveInputSectionClassName(className);
		changeIsHovered(true);
	}

	function handleMouseLeave(event: React.MouseEvent<HTMLDivElement>) {
		if (!isFocused) {
			changeActiveInputSectionClassName('');
		}
		changeIsHovered(false);
	}

	function handleFocusCapture(event: React.FocusEvent<HTMLElement>) {
		changeActiveInputSectionClassName(className);
		changeIsFocused(true);
	}

	function handleBlurCapture(event: React.FocusEvent<HTMLElement>) {
		if (!isHovered) {
			changeActiveInputSectionClassName('');
		}
		changeIsFocused(false);
	}

	const InputSectionContextValue = {
		onFocusHandler: handleFocusCapture,
		onBlurHandler: handleBlurCapture,
	};

	return (
		<div
			onMouseOverCapture={handleMouseOverCapture}
			onMouseLeave={handleMouseLeave}
			onFocusCapture={handleFocusCapture}
			onBlurCapture={handleBlurCapture}
			className={`div input-section ${className} ${
				isActive ? `input-section--Active ${className}--active` : ''
			}
			 ${
					isAnyActive && !isActive
						? `input-section--not-active ${className}--not-active`
						: ''
				}
			`}
		>
			{children}
		</div>
	);
}
