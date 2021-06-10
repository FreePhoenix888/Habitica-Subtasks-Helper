import React, {
	FocusEvent,
	MouseEvent,
	useContext,
	useState,
	createRef,
} from 'react';
import { FormContext } from './Form';
import { setClassName } from '../helpers/setClassName';
import '../styles/components/inputSection.scss';

interface Props {
	children: JSX.Element | JSX.Element[];
	className?: string;
}

export function InputSection(props: Props): JSX.Element {
	const { children, className = '' } = props;

	const inputSectionRef = createRef<HTMLDivElement>();

	const { activeInputSections, changeActiveInputSections } =
		useContext(FormContext);
	let isActive = false;
	for (let i = 0, n = activeInputSections.length; i < n; i++) {
		const element = activeInputSections[i];

		if (element.target === inputSectionRef.current) {
			isActive = true;
		}
	}
	const isAnyActive = activeInputSections.length !== 0;

	function handleMouseEnter(event: MouseEvent<EventTarget>) {
		const { currentTarget } = event;

		if (changeActiveInputSections) {
			changeActiveInputSections({
				eventType: 'Mouse',
				target: currentTarget,
				type: '+',
			});
		}
	}

	function handleMouseLeave(event: MouseEvent<HTMLElement>) {
		const { currentTarget } = event;

		if (changeActiveInputSections) {
			changeActiveInputSections({
				eventType: 'Mouse',
				target: currentTarget,
				type: '-',
			});
		}
	}

	function handleFocusCapture(event: FocusEvent<HTMLElement>) {
		const { currentTarget } = event;

		if (changeActiveInputSections) {
			changeActiveInputSections({
				eventType: 'Focus',
				target: currentTarget,
				type: '+',
			});
		}
	}

	function handleBlurCapture(event: FocusEvent<HTMLElement>) {
		const { currentTarget } = event;

		if (changeActiveInputSections) {
			changeActiveInputSections({
				eventType: 'Focus',
				target: currentTarget,
				type: '-',
			});
		}
	}

	return (
		<div
			ref={inputSectionRef}
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
