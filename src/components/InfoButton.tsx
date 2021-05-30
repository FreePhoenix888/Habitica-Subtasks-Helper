import React, { useContext } from 'react';
import { MessageContext } from './Message';

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

	const { isOpen, setIsOpen } = useContext(MessageContext);
	function handleMouseOver(event: React.MouseEvent<HTMLElement>) {
		setIsOpen(true);
		onMouseOver(event);
	}

	function handleClick(event: React.MouseEvent<HTMLElement>) {
		setIsOpen(true);
		onClick(event);
	}

	function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
		setIsOpen(true);
		onKeyDown(event);
	}

	function handleFocus(event: React.FocusEvent<HTMLElement>) {
		setIsOpen(true);
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
