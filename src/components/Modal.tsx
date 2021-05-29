import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface Props {
	className?: string;
	containerClassName?: string;
	containerOnClick?: (event: React.MouseEvent<HTMLElement>) => void;
	modalOnClick?: (event: React.MouseEvent<HTMLElement>) => void;
	containerOnKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
	modalOnKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
	children:
		| JSX.Element
		| JSX.Element[]
		| Element
		| Element[]
		| HTMLAnchorElement;
}
export function Modal(props: Props) {
	const {
		className = '',
		containerClassName = '',
		children,
		containerOnClick,
		containerOnKeyDown,
		modalOnClick,
	} = props;

	const containerRef = useRef<HTMLDivElement>(null);
	function switchBodyOverflow() {
		const bodyStyle = document.body.style;
		switch (bodyStyle.overflow) {
			case '':
			case 'auto':
				bodyStyle.overflow = 'hidden';
				break;
			case 'hidden':
				bodyStyle.overflow = 'auto';
				break;
			default:
				bodyStyle.overflow = '';
				break;
		}
	}

	function focusContainer() {
		containerRef.current?.focus();
	}

	function handleContainerClick(event: React.MouseEvent<HTMLElement>) {
		if (containerOnClick) {
			containerOnClick(event);
		}
	}

	function handleContainerKeyDown(event: React.KeyboardEvent<HTMLElement>) {
		if (containerOnKeyDown) {
			containerOnKeyDown(event);
		}
	}
	const output = ReactDOM.createPortal(
		<>
			<div
				className={`modal-container ${containerClassName}`}
				onClick={handleContainerClick}
				onKeyDown={handleContainerKeyDown}
				role="button"
				tabIndex={0}
				ref={containerRef}
			>
				<div className={`modal ${className}`} role="dialog">
					{children}
				</div>
			</div>
		</>,
		document.getElementById('root') as HTMLElement
	);
	return output;
}
