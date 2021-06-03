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

let buttonRef: MutableRefObject<JSX.Element | undefined>;

export function Modal(props: Props): JSX.Element {
	const { children, className = '' } = props;

	buttonRef = useRef();

	useEffect(() => {
		Modal.focusButton();
	}, []);

	return (
		<div className={`modal ${className}`}>
			<div className="modal-content">{children}</div>
			<Button className="modal-close">
				<Span>Press any key or outside this window to close.</Span>
			</Button>
			<Button className="modal-close">
				<Span>Press any key or outside this window to close.</Span>
			</Button>
		</div>
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
