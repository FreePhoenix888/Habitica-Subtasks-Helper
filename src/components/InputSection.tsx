import React, {
	FocusEvent,
	MouseEvent,
	useContext,
	useState,
	createRef,
	useImperativeHandle,
	RefObject,
	MutableRefObject,
	Ref,
	useEffect,
	useRef,
} from 'react';
import { FormContext } from './Form';
import { setClassName } from '../helpers/setClassName';
import '../styles/components/inputSection.scss';

interface UseImperativeHandleType {
	reset(): void;
}

interface Props {
	children: JSX.Element | JSX.Element[];
	className?: string;
	forwardedRef?: RefObject<UseImperativeHandleType>;
}

export function InputSection(props: Props): JSX.Element {
	const { children, className = '', forwardedRef } = props;

	const inputSectionRef = createRef<HTMLDivElement>();

	const { activeInputSections, changeActiveInputSections } =
		useContext(FormContext);

	const [isHovered, setIsHovered] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	function handleMouseEnter(event: MouseEvent<EventTarget>) {
		const { currentTarget } = event;

		setIsHovered(true);
		if (changeActiveInputSections) {
			changeActiveInputSections((prevState) => {
				const newState = new Set(prevState);
				newState.add(currentTarget as HTMLDivElement);
				return newState;
			});
		}
	}

	function handleMouseLeave(event: MouseEvent<HTMLElement>) {
		const currentTarget = event.currentTarget as HTMLDivElement;

		setIsHovered(false);
		if (changeActiveInputSections && !isFocused) {
			changeActiveInputSections((prevState) => {
				const newState = new Set(prevState);
				newState.delete(currentTarget);
				return newState;
			});
		}
	}

	function handleFocusCapture(event: FocusEvent<HTMLElement>) {
		const currentTarget = event.currentTarget as HTMLDivElement;

		setIsFocused(true);

		if (changeActiveInputSections) {
			changeActiveInputSections((prevState) => {
				const newState = new Set(prevState);
				newState.add(currentTarget);
				return newState;
			});
		}
	}

	function handleBlurCapture(event: FocusEvent<HTMLElement>) {
		const currentTarget = event.currentTarget as HTMLDivElement;

		setIsFocused(false);

		if (changeActiveInputSections && !isHovered) {
			changeActiveInputSections((prevState) => {
				const newState = new Set(prevState);
				newState.delete(currentTarget);
				return newState;
			});
		}
	}

	return (
		<div
			ref={inputSectionRef}
			className={setClassName('input-section', className, {
				active:
					activeInputSections.size === 0 ||
					((isHovered || isFocused) && activeInputSections.size !== 0),
				'non-active':
					activeInputSections.size !== 0 && !(isHovered || isFocused),
			})}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onBlurCapture={handleBlurCapture}
			onFocusCapture={handleFocusCapture}
		>
			{children}
		</div>
	);
}
