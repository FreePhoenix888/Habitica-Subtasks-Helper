import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface Props {
	children:
		| JSX.Element
		| JSX.Element[]
		| Element
		| Element[]
		| HTMLAnchorElement;
	className?: string;
	onUseEffectHandler?: () => void;
	onAfterUseEffectHandler?: () => void;
}

let containerRef: React.RefObject<HTMLDivElement>;

export function Modal(props: Props) {
	const { children, className = '' } = props;

	useEffect(() => {
		const { onUseEffectHandler, onAfterUseEffectHandler } = props;
		if (onUseEffectHandler) {
			onUseEffectHandler();
		}

		if (onAfterUseEffectHandler) {
			return onAfterUseEffectHandler;
		}
		return undefined;
	}, []);

	return (
		<>
			<div className={`modal ${className}`}>
				<div className="modal-content">{children}</div>
				<div className="modal-close">
					Press any key or outside this window to close.
				</div>
			</div>
		</>
	);
}
