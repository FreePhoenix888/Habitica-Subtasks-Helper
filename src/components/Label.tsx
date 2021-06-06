import React from 'react';

interface Props {
	children?: string | Element | Element[] | JSX.Element | JSX.Element[];
	className?: string;
	htmlFor: string;
};

export function Label(props: Props): JSX.Element {
	const { htmlFor, children, className = '' } = props;

	return (
		<label className={`label ${className}`} htmlFor={htmlFor}>
			{children}
		</label>
	);
}
