import React, { useContext, useEffect, useRef } from 'react';
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
	onUseEffectHandler?: () => void;
	onAfterUseEffectHandler?: () => void;
}

let containerRef: React.RefObject<HTMLDivElement>;

export function Modal(props: Props): JSX.Element {
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
				<Button className="modal-close">
					<Span>Press any key or outside this window to close.</Span>
				</Button>
			</div>
		</>
	);
}
