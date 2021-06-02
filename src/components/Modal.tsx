import React, {
	createRef,
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
	// onUseEffectHandler?: () => void;
	// onAfterUseEffectHandler?: () => void;
}

let buttonRef: RefObject<HTMLButtonElement>;

export function Modal(props: Props): React.ReactPortal | null {
	const { children, className = '', isOpen } = props;

	buttonRef = useRef() as RefObject<HTMLButtonElement>;

	useEffect(() => {
		console.log(isOpen);
		Modal.focusButton();
		// console.log('FOCUS!');
		// setInterval(() => {
		// 	console.log(document.querySelector('*:focus'));
		// }, 500);
	}, [isOpen]);

	return isOpen
		? createPortal(
				<>
					<div className="modal-container">
						<div className={`modal ${className}`}>
							<div className="modal-content">{children}</div>
							<Button className="modal-close" forwardedRef={buttonRef}>
								<Span>Press any key or outside this window to close.</Span>
							</Button>
						</div>
					</div>
				</>,
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
		buttonRef.current.focus();
	}
};
