import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface Props {
	children:
		| JSX.Element
		| JSX.Element[]
		| Element
		| Element[]
		| HTMLAnchorElement;
	className?: string;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
}

let containerRef: React.RefObject<HTMLDivElement>;

export function Modal(props: Props) {
	const { children, className = '', onClick, onKeyDown } = props;

	function handeClick(event: React.MouseEvent<HTMLElement>) {
		if (onClick) {
			onClick(event);
		}
	}

	function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
		if (onKeyDown) {
			onKeyDown(event);
		}
	}
	return (
		<>
			<div
				onClick={handeClick}
				onKeyDown={handleKeyDown}
				className={`modal ${className}`}
			>
				<div className="modal-content">{children}</div>
				<div className="modal-close">
					Press any key or outside this window to close.
				</div>
			</div>
		</>
	);
}
