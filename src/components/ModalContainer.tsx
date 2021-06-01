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
	onClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
	onKeyDownHandler?: (event: React.KeyboardEvent<HTMLElement>) => void;
}

let containerRef: React.RefObject<HTMLDivElement>;

export function ModalContainer(props: Props) {
	const { isOpen, children, className = '', containerClassName = '' } = props;

	containerRef = useRef<HTMLDivElement>(null);

	function handleContainerClick(event: React.MouseEvent<HTMLElement>) {
		const { onClickHandler } = props;
		if (onClickHandler) {
			onClickHandler(event);
		}
	}

	function handleContainerKeyDown(event: React.KeyboardEvent<HTMLElement>) {
		const { onKeyDownHandler } = props;
		if (onKeyDownHandler) {
			onKeyDownHandler(event);
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
				document.body
		  )
		: null;
}

ModalContainer.focusContainer = function focusContainer() {
	if (containerRef.current) {
		containerRef.current.focus();
	}
};

ModalContainer.lockBodyOverflow = function switchBodyOverflow() {
	const bodyStyle = document.body.style;

	bodyStyle.overflow = 'hidden';
};
ModalContainer.unlockBodyOverflow = function switchBodyOverflow() {
	const bodyStyle = document.body.style;

	bodyStyle.overflow = 'auto';
};
