import React from 'react';

type Props = {
	className?: string;
	contentClassName?: string;
	htmlFor?: string | undefined;
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
			<div
				onClick={handleClick}
				onKeyDown={handleKeyDown}
				role="button"
				tabIndex={-1}
				className={`label__content ${contentClassName}`}
			>
				{children}
			</div>
		</label>
	);
}
