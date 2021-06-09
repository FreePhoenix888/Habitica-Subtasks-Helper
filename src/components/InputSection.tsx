import React, { FocusEvent, MouseEvent, useContext, useState } from 'react';
import { FormContext } from './Form';
import '../styles/components/inputSection.scss';

interface Props {
	children: JSX.Element | JSX.Element[];
	className?: string;
}

export function InputSection(props: Props): JSX.Element {
	const { children, className = '' } = props;

	const { activeInputSections, changeActiveInputSections } =
		useContext(FormContext);
	// const isAnyActive =  !== '';

	function handleMouseEnter(event: MouseEvent<EventTarget>) {
		const { currentTarget } = event;

		if (changeActiveInputSections) {
			changeActiveInputSections((prevState: EventTarget[]) => [
				...prevState,
				currentTarget,
			]);
		}
	}

	function handleMouseLeave(event: MouseEvent<HTMLElement>) {
		const { currentTarget } = event;

		if (changeActiveInputSections) {
			changeActiveInputSections((prevState: EventTarget[]) => {
				for (let i = 0, n = prevState.length; i < n; i++) {
					const element = prevState[i];
					if (element === currentTarget) {
						const newState = prevState.slice(i, -1);
						return newState;
					}
				}
				return prevState;
			});
		}
	}

	function handleFocusCapture(event: FocusEvent<HTMLElement>) {
		const { currentTarget } = event;

		if (changeActiveInputSections) {
			changeActiveInputSections((prevState: EventTarget[]) => {
				for (let i = 0, n = prevState.length; i < n; i++) {
					const element = prevState[i];
					if (element === currentTarget) {
						const newState = prevState.slice(i, -1);
						return newState;
					}
				}
				return prevState;
			});
		}
	}

	function handleBlurCapture(event: FocusEvent<HTMLElement>) {
		// if (changeActiveInputSections) {
		// 	changeActiveInputSections([]);
		// }
	}

	return (
		<div
			className="input-section"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onBlur={handleBlurCapture}
			onFocus={handleFocusCapture}
		>
			{children}
		</div>
	);
}
