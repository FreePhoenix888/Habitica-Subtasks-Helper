import React from 'react';

interface Props {
	className?: string;
	htmlFor: string;
	children?: string | Element | Element[] | JSX.Element | JSX.Element[];
};

export function Label(props: Props): JSX.Element {
	const { htmlFor, children, className = '' } = props;

	return (
		<label className={`label ${className}`} htmlFor={htmlFor}>
			{children}
		</label>
	);
}
