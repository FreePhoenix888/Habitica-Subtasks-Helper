import React, {
	MouseEvent,
	useImperativeHandle,
	MutableRefObject,
	forwardRef,
	useRef,
	ForwardRefRenderFunction,
} from 'react';

interface Props {
	onClickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
	onKeyDownHandler?: (event: React.KeyboardEvent<HTMLElement>) => void;
	children?: JSX.Element | JSX.Element[];
	forwardedRef?: MutableRefObject<any>;
	className?: string;
}

export function Button(props: Props) {
	const { className = '', children, forwardedRef = null } = props;

	const buttonRef = useRef<HTMLButtonElement>(null);

	useImperativeHandle<HTMLButtonElement, any>(forwardedRef, () => ({
		focus() {
			buttonRef.current?.focus();
		},
	}));

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
			ref={buttonRef}
		>
			{children}
		</button>
	);
}
