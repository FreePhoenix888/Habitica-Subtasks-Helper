import React, {
	createRef,
	MouseEvent,
	useImperativeHandle,
	RefObject,
} from 'react';

interface Props {
	onClickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
	onKeyDownHandler?: (event: React.KeyboardEvent<HTMLElement>) => void;
	children?: JSX.Element | JSX.Element[];
	// forwardedRef?: RefObject<HTMLButtonElement>;
	className?: string;
}

let buttonRef: RefObject<HTMLButtonElement>;

export function Button(props: Props): JSX.Element {
	const { className = '', children } = props;

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

	buttonRef = createRef();

	return (
		<button
			type="button"
			className={`button ${className}`}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			ref={buttonRef}
		>
			{children}
		</button>
	);
}

Button.focus = () => {
	buttonRef.current?.focus();
};
