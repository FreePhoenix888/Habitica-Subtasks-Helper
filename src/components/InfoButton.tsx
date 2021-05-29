import React from 'react';

type Props = {
	className?: string;
	paragraphClassName?: string;
	hidden?: boolean;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	onMouseOver?: (event: React.MouseEvent<HTMLElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
};

export function InfoButton(props: Props) {
	const {
		className = '',
		paragraphClassName = '',
		hidden = false,
		onClick = () => {},
		onMouseOver = () => {},
		onFocus = () => {},
		onKeyDown = () => {},
	} = props;

	return (
		<>
			<button
				className={`div info ${className}`}
				onClick={onClick}
				onMouseOver={onMouseOver}
				onFocus={onFocus}
				onKeyDown={onKeyDown}
				hidden={hidden}
				type="button"
			>
				?
			</button>
		</>
	);
}
