import React, { createContext, useContext, useEffect, useState } from 'react';
import { FormContext } from './Form';

interface Props {
	children: JSX.Element | JSX.Element[];
	className?: string;
}

interface InputSectionContextType {
	onFocusHandler: (event: React.FocusEvent<HTMLDivElement>) => void;
	onBlurHandler: (event: React.FocusEvent<HTMLDivElement>) => void;
}

export const InputSectionContext = createContext<InputSectionContextType>({
	onFocusHandler: () => {},
	onBlurHandler: () => {},
});
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

	const InputSectionContextValue = {
		onFocusHandler: handleFocus,
		onBlurHandler: handleBlur,
	};

	function handleMouseOver(event: React.MouseEvent<HTMLDivElement>) {
		changeActiveInputSectionClassName(className);
		changeIsHovered(true);
	}

	function handleMouseLeave(event: React.MouseEvent<HTMLDivElement>) {
		if (!isFocused) {
			changeActiveInputSectionClassName('');
		}
		changeIsHovered(false);
	}

	function handleFocus(event: React.FocusEvent<HTMLDivElement>) {
		changeActiveInputSectionClassName(className);
		changeIsFocused(true);
	}

	function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
		if (!isHovered) {
			changeActiveInputSectionClassName('');
		}
		changeIsFocused(false);
	}

	return (
		<div
			onMouseOver={handleMouseOver}
			onMouseLeave={handleMouseLeave}
			onFocus={handleFocus}
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
			<InputSectionContext.Provider value={InputSectionContextValue}>
				{children}
			</InputSectionContext.Provider>
		</div>
	);
}
