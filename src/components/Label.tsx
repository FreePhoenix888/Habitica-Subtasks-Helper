import React from 'react';

type Props = {
	className?: string;
	contentClassName?: string;
	htmlFor: string;
	children?: string | Element | Element[] | JSX.Element | JSX.Element[];
	onClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
	onKeyDownHandler?: (event: React.KeyboardEvent<HTMLElement>) => void;
};

export function Label(props: Props): JSX.Element {
	const { htmlFor, children, className = '', contentClassName = '' } = props;

	function handleClick(event: React.MouseEvent<HTMLElement>) {
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
		<label htmlFor={htmlFor} className={`label ${className}`}>
			{children}
		</label>
	);
}
