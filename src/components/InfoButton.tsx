import React from 'react';

type Props = {
	className?: string;
	hidden?: boolean;
	onClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
	onMouseOverHandler?: (event: React.MouseEvent<HTMLElement>) => void;
	onFocusHandler?: (event: React.FocusEvent<HTMLElement>) => void;
	onKeyDownHandler?: (event: React.KeyboardEvent<HTMLElement>) => void;
};

export function InfoButton(props: Props) {
	const { className = '', hidden = false } = props;

	function handleMouseOver(event: React.MouseEvent<HTMLElement>) {
		const { onMouseOverHandler } = props;
		if (onMouseOverHandler) {
			onMouseOverHandler(event);
		}
	}

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

	function handleFocus(event: React.FocusEvent<HTMLElement>) {
		const { onFocusHandler } = props;
		if (onFocusHandler) {
			onFocusHandler(event);
		}
	}
	return (
		<>
			<button
				className={`button info-button ${className}`}
				onMouseOver={handleMouseOver}
				onClick={handleClick}
				onKeyDown={handleKeyDown}
				onFocus={handleFocus}
				hidden={hidden}
				type="button"
			>
				?
			</button>
		</>
	);
}
