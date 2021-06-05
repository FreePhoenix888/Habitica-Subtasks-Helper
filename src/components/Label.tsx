import React from 'react';

type Props = {
	className?: string;
	htmlFor: string;
	children?: string | Element | Element[] | JSX.Element | JSX.Element[];
	onClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
	onKeyDownHandler?: (event: React.KeyboardEvent<HTMLElement>) => void;
};

export function Label(props: Props): JSX.Element {
	const { htmlFor, children, className = '' } = props;

	return (
		<label htmlFor={htmlFor} className={`label ${className}`}>
			{children}
		</label>
	);
}
