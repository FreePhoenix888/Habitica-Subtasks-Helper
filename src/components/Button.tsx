import React, { MouseEvent } from 'react';

interface Props {
	className?: string;
	type: 'button' | 'submit' | 'reset' | undefined;
	onClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function Button(props: Props) {
	const { className, type } = props;

	function handleClick(event: MouseEvent<HTMLButtonElement>) {
		const { onClickHandler } = props;
		if (onClickHandler) {
			onClickHandler(event);
		}
	}

	return (
		<button
			type={type}
			className={`button ${className}`}
			onClick={handleClick}
		></button>
	);
}
