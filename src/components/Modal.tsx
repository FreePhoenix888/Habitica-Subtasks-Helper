import React, {
	createRef,
	MutableRefObject,
	RefObject,
	useContext,
	useEffect,
	useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { Button } from './Button';
import { Span } from './Span';
import { MessageContainerContext } from './MessageContainer';

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

let buttonRef: RefObject<HTMLButtonElement>;

export function Modal(props: Props): React.ReactPortal | null {
	const { children, className = '' } = props;

	// Ref to the button to focus it
	buttonRef = useRef<HTMLButtonElement>(null);

	const { isOpen, setIsOpen } = useContext(MessageContainerContext);

	useEffect(() => {
		if (buttonRef.current) {
			buttonRef.current.focus();
		}
	}, [isOpen]);

	if (!isOpen) {
		return null;
	}

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

	return createPortal(
		<div
			className="modal-close"
			role="button"
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			tabIndex={-1}
		>
			<div
				className={`modal ${className}`}
				role="dialog"
				aria-describedby="modal__content"
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
	);
}

Modal.lockBody = () => {
	const bodyStyle = document.body.style;
	bodyStyle.overflow = 'hidden';
};

Modal.unlockBody = () => {
	const bodyStyle = document.body.style;
	bodyStyle.overflow = '';
};

Modal.focusButton = () => {
	if (buttonRef.current) {
		console.log(buttonRef.current);
	}
};
