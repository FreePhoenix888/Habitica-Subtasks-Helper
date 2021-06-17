import React, {
	Dispatch,
	RefObject,
	SetStateAction,
	useContext,
	useEffect,
	useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { Span } from './Span';
import '../styles/components/modal.scss';

interface Props {
	children:
		| JSX.Element
		| JSX.Element[]
		| Element
		| Element[]
		| HTMLAnchorElement;
	className?: string;
	isOpen?: boolean;
	onClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
	onKeyDownHandler?: (event: React.KeyboardEvent<HTMLElement>) => void;
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
	// onUseEffectHandler?: () => void;
	// onAfterUseEffectHandler?: () => void;
}

let divButtonRef: RefObject<HTMLDivElement>;

export function Modal(props: Props): React.ReactPortal | null {
	const { children, className = '', isOpen, setIsOpen } = props;

	divButtonRef = useRef<HTMLDivElement>(null);

	const relatedTarget = useRef<HTMLElement>();

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
			relatedTarget?.current?.focus();
		};
	}, [isOpen]);

	return isOpen
		? createPortal(
				<div
					className="modal-close"
					ref={divButtonRef}
					role="button"
					tabIndex={-1}
					onClick={(event) => {
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
					}}
					onFocus={(event) => {
						relatedTarget.current = event.relatedTarget as HTMLElement;
					}}
					onKeyDown={(event) => {
						// Default behavior
						const allowedKeys =
							event.metaKey ||
							event.ctrlKey ||
							event.shiftKey ||
							event.altKey ||
							event.code === 'ArrowUp' ||
							event.code === 'ArrowRight' ||
							event.code === 'ArrowDown' ||
							event.code === 'ArrowLeft';

						if (!allowedKeys) {
							if (event.code === 'Space') event.preventDefault();
							setIsOpen(false);
						}

						// Custom behavior
						const { onKeyDownHandler } = props;
						if (onKeyDownHandler) {
							onKeyDownHandler(event);
						}
					}}
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
