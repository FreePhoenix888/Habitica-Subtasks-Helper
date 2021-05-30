import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface Props {
	isOpen: boolean;
	children:
		| JSX.Element
		| JSX.Element[]
		| Element
		| Element[]
		| HTMLAnchorElement;
	className?: string;
	containerClassName?: string;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
	onUseEffect?: () => void;
}

let containerRef: React.RefObject<HTMLDivElement>;

export function ModalContainer(props: Props) {
	const {
		isOpen,
		children,
		className = '',
		containerClassName = '',
		onClick,
		onKeyDown,
		onUseEffect,
	} = props;

	containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (onUseEffect) {
			onUseEffect();
		}
	}, [isOpen]);

	function handleContainerClick(event: React.MouseEvent<HTMLElement>) {
		if (onClick) {
			onClick(event);
		}
	}

	function handleContainerKeyDown(event: React.KeyboardEvent<HTMLElement>) {
		if (onKeyDown) {
			onKeyDown(event);
		}
	}

	return isOpen
		? ReactDOM.createPortal(
				<>
					<div
						className={`modal-container ${containerClassName}`}
						onClick={handleContainerClick}
						onKeyDown={handleContainerKeyDown}
						role="button"
						tabIndex={0}
						ref={containerRef}
					>
						{children}
					</div>
				</>,
				document.getElementById('root')!
		  )
		: null;
}

ModalContainer.focusContainer = function focusContainer() {
	containerRef.current?.focus();
};

ModalContainer.switchBodyOverflow = function switchBodyOverflow() {
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
};
