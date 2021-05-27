import React from 'react';

type Props = {
	className?: string;
	htmlFor: string | undefined;
	children: string | Element | Element[] | JSX.Element | JSX.Element[];
};

export function Label(props: Props): JSX.Element {
	const { htmlFor, children, className='' } = props;
	return (
		<label htmlFor={htmlFor} className={`label ${className}`}>
			{children}
		</label>
	);
}