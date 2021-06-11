import React, { RefObject, useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Span } from './Span';
import { Context as MessageContainerContext } from './MessageContainer';
import '../styles/components/modal.scss';

interface Props {
	children:
		| JSX.Element
		| JSX.Element[]
		| Element
		| Element[]
		| HTMLAnchorElement;
	className?: string;
	onClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
	onKeyDownHandler?: (event: React.KeyboardEvent<HTMLElement>) => void;
	// onUseEffectHandler?: () => void;
	// onAfterUseEffectHandler?: () => void;
}

let divButtonRef: RefObject<HTMLDivElement>;

export function Modal(props: Props): React.ReactPortal | null {
	const { children, className = '' } = props;

	// Ref to the div-button to focus it
	divButtonRef = useRef<HTMLDivElement>(null);

	const { isOpen, setIsOpen } = useContext(MessageContainerContext);

	useEffect(() => {
		if (isOpen) {
			Modal.lockBody();
			Modal.addblurRoot();

			if (divButtonRef.current) {
				divButtonRef.current.focus();
			}
		}

		return () => {
			Modal.unlockBody();
			Modal.removeBlurRoot();
		};
	}, [isOpen]);

	function handleClick(event: React.MouseEvent<HTMLElement>) {
		// Default behavioir
		const target = event.target as HTMLElement;

		if (target.className.includes('modal-close')) {
			setIsOpen(false);
		}

		// Custom behavior
		const { onClickHandler } = props;
		if (onClickHandler) {
			onClickHandler(event);
		}
	}

	function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
		// Default behavior
		const allowedKeys =
			event.metaKey ||
			event.ctrlKey ||
			event.shiftKey ||
			event.altKey ||
			event.key === 'ArrowUp' ||
			event.key === 'ArrowRight' ||
			event.key === 'ArrowDown' ||
			event.key === 'ArrowLeft';

		if (!allowedKeys) {
			setIsOpen(false);
		}

		// Custom behavior
		const { onKeyDownHandler } = props;
		if (onKeyDownHandler) {
			onKeyDownHandler(event);
		}
	}

	return isOpen
		? createPortal(
				<div
					className="modal-close"
					ref={divButtonRef}
					role="button"
					tabIndex={-1}
					onClick={handleClick}
					onKeyDown={handleKeyDown}
				>
					<div
						aria-describedby="modal__content"
						className={`modal ${className}`}
						role="dialog"
					>
						<div className="modal__content" id="modal__content">
							{children}
						</div>
						<div className="modal__info-close modal-info-close">
							<Span>Press any key or outside this window to close.</Span>
						</div>
					</div>
				</div>,
				document.body
		  )
		: null;
}

Modal.lockBody = () => {
	const bodyStyle = document.body.style;
	bodyStyle.overflow = 'hidden';
};

Modal.unlockBody = () => {
	const bodyStyle = document.body.style;
	bodyStyle.overflow = '';
};

Modal.addblurRoot = () => {
	const rootStyle = document.getElementById('root')?.style;
	if (rootStyle) {
		rootStyle.filter = 'blur(10px)';
	}
};

Modal.removeBlurRoot = () => {
	const rootStyle = document.getElementById('root')?.style;
	if (rootStyle) {
		rootStyle.filter = '';
	}
};
