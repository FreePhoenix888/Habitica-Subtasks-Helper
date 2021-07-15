import React, {
	MouseEvent,
	useImperativeHandle,
	MutableRefObject,
	useRef,
} from 'react';
import '../styles/components/button.scss';

interface Props {
	children?: JSX.Element | JSX.Element[] | string;
	className?: string;
	forwardedRef?: MutableRefObject<HTMLButtonElement>;
	onClickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
	onKeyDownHandler?: (event: React.KeyboardEvent<HTMLElement>) => void;
}

export function Button(props: Props): JSX.Element {
	const { className = '', children, forwardedRef = null } = props;

	const buttonRef = useRef<HTMLButtonElement>(null);

	interface UseImperativeHandleType {
		focus(): void;
	}
	useImperativeHandle<UseImperativeHandleType, UseImperativeHandleType>(
		forwardedRef,
		() => ({
			focus() {
				buttonRef.current?.focus();
			},
		})
	);

	function handleClick(event: MouseEvent<HTMLButtonElement>) {
		const { onClickHandler } = props;
		if (onClickHandler) {
			onClickHandler(event);
		}
	}

	function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
		const { onKeyDownHandler } = props;
		if (onKeyDownHandler) {
			onKeyDownHandler(event);
		}
	}

	return (
		<button
			className={`button ${className}`}
			ref={buttonRef}
			type="button"
			onClick={handleClick}
			onKeyDown={handleKeyDown}
		>
			{children}
		</button>
	);
}
