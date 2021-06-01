import React from 'react';

interface Props {
	action: string;
	children?: JSX.Element | JSX.Element[];
	className?: string;
}

export function Form(props: Props): JSX.Element {
	const { action, children, className = '' } = props;

	return (
		<form action={action} className={`form ${className}`}>
			{children}
		</form>
	);
}
