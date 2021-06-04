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

interface Props {
	isOpen: boolean;
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
	const { children, className = '', isOpen } = props;

	buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		buttonRef.current?.focus();
	}, []);

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
				<div className={`modal ${className}`}>
					<div className="modal__content">{children}</div>
					<Button
						onClickHandler={handleClick}
						onKeyDownHandler={handleKeyDown}
						className="modal__close"
						forwardedRef={buttonRef}
					>
						<Span>Press any key or outside this window to close.</Span>
					</Button>
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

Modal.focusButton = () => {
	if (buttonRef.current) {
		console.log(buttonRef.current);
	}
};
