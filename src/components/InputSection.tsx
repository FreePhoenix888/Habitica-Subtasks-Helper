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
		if (changeActiveInputSections) {
			changeActiveInputSections((prevState: EventTarget[]) => {
				prevState.push(event.target);
				console.log(activeInputSections);
				return prevState;
			});
		}
	}

	function handleMouseLeave(event: MouseEvent<HTMLElement>) {
		if (changeActiveInputSections) {


			changeActiveInputSections((prevState: EventTarget[]) => {
				for (let i = 0, n = prevState.length; i < n; i++) {
					const element = prevState[i];
					if (element === event.target) {
						prevState.splice(i, 1);
						return prevState;
					}
				}
				return prevState;
			});
		}
	}

	function handleFocusCapture(event: FocusEvent<HTMLElement>) {
		/* if (changeActiveInputSections) {
			changeActiveInputSections((prevState: typeof activeInputSections) => {
				if (prevState) {
					return [...prevState, event.currentTarget];
				}
				return [];
			});
		} */
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
			onBlurCapture={handleBlurCapture}
			onFocusCapture={handleFocusCapture}
		>
			{children}
		</div>
	);
}
