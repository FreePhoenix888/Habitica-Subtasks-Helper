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
	containerClassName?: string;
	containerOnClick?: (event: React.MouseEvent<HTMLElement>) => void;
	modalOnClick?: (event: React.MouseEvent<HTMLElement>) => void;
	containerOnKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
	modalOnKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
}

let containerRef: React.RefObject<HTMLDivElement>;

export function Modal(props: Props) {
	const {
		children,
		className = '',
		containerClassName = '',
		containerOnClick,
		containerOnKeyDown,
		modalOnClick,
		modalOnKeyDown,
	} = props;

	containerRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<div className={`modal ${className}`}>
				<div className="modal-content">{children}</div>
				<div className="modal-close">
					Press any key or outside this window to close.
				</div>
			</div>
		</>
	);
}
