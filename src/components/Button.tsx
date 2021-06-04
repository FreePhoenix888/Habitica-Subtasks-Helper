import React, {
	createRef,
	MouseEvent,
	useImperativeHandle,
	RefObject,
	useRef,
	MutableRefObject,
} from 'react';

interface Props {
	onClickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
	onKeyDownHandler?: (event: React.KeyboardEvent<HTMLElement>) => void;
	children?: JSX.Element | JSX.Element[];
	forwardedRef?: MutableRefObject<HTMLButtonElement | null>;
	className?: string;
}

export function Button(props: Props): JSX.Element {
	const { className = '', children, forwardedRef = null } = props;

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
			type="button"
			className={`button ${className}`}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			ref={forwardedRef}
		>
			{children}
		</button>
	);
}

Button.focus = () => {
	buttonRef.current?.focus();
};
