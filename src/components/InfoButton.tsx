import React, { useContext } from 'react';

type Props = {
	className?: string;
	paragraphClassName?: string;
	hidden?: boolean;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	onMouseOver?: (event: React.MouseEvent<HTMLElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
};

export function InfoButton(props: Props) {
	const {
		className = '',
		paragraphClassName = '',
		hidden = false,
		onClick = () => {},
		onMouseOver = () => {},
		onFocus = () => {},
		onKeyDown = () => {},
	} = props;

	function handleMouseOver(event: React.MouseEvent<HTMLElement>) {
		onMouseOver(event);
	}

	function handleClick(event: React.MouseEvent<HTMLElement>) {
		onClick(event);
	}

	function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
		onKeyDown(event);
	}

	function handleFocus(event: React.FocusEvent<HTMLElement>) {
		onFocus(event);
	}
	return (
		<>
			<button
				className={`button info ${className}`}
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
