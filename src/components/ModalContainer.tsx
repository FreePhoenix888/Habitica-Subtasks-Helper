import React from 'react';
import { createPortal } from 'react-dom';
import { Button } from './Button';

interface Props {
	isOpen: boolean;
	children: JSX.Element | JSX.Element[];
	className?: string;
	onClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
	onKeyDownHandler?: (event: React.KeyboardEvent<HTMLElement>) => void;
}

export function ModalContainer(props: Props): React.ReactPortal | null {
	const { isOpen, children, className = '' } = props;

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

	return isOpen
		? createPortal(
				<Button
					onClickHandler={handleClick}
					onKeyDownHandler={handleKeyDown}
					className={`modal-container ${className}`}
				>
					{children}
				</Button>,
				document.body
		  )
		: null;
}
