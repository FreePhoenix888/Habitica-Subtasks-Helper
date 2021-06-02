import React, { MouseEvent, MutableRefObject, RefObject } from 'react';

interface Props {
	onClickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
	children?: JSX.Element | JSX.Element[];
	forwardedRef?: RefObject<HTMLButtonElement>;
	className?: string;
}

export function Button(props: Props) {
	const { className = '', children, forwardedRef } = props;

	function handleClick(event: MouseEvent<HTMLButtonElement>) {
		const { onClickHandler } = props;
		if (onClickHandler) {
			onClickHandler(event);
		}
	}

	return (
		<button
			type="button"
			className={`button ${className}`}
			onClick={handleClick}
			ref={forwardedRef}
		>
			{children}
		</button>
	);
}
