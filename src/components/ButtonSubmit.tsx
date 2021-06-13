import React, {
	MouseEvent,
	useImperativeHandle,
	MutableRefObject,
	useRef,
} from 'react';
import '../styles/components/inputGeneral.scss';
import '../styles/components/button.scss';

interface Props {
	children?: JSX.Element | JSX.Element[] | string;
	className?: string;
	forwardedRef?: MutableRefObject<HTMLButtonElement>;
	onClickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
	onKeyDownHandler?: (event: React.KeyboardEvent<HTMLElement>) => void;
}

export function ButtonSubmit(props: Props): JSX.Element {
	const {
		className = '',
		children,
		forwardedRef = null,
		onClickHandler,
		onKeyDownHandler,
	} = props;

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

	return (
		<button
			className={`button ${className}`}
			ref={buttonRef}
			type="submit"
			onClick={onClickHandler}
			onKeyDown={onKeyDownHandler}
		>
			{children}
		</button>
	);
}
