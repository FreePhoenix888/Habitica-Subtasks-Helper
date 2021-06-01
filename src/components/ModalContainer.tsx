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
	onUseEffectHandler?: () => void;
}

let containerRef: React.RefObject<HTMLDivElement>;

export function ModalContainer(props: Props) {
	const { isOpen, children, className = '', containerClassName = '' } = props;

	containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const { onUseEffectHandler } = props;
		if (onUseEffectHandler) {
			onUseEffectHandler();
		}
	}, [isOpen]);

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
