import React from 'react';

interface Props {
	children: string | JSX.Element | JSX.Element[];
	className?: string;
}

export function Span(props: Props) {
	const { children, className='' } = props;

	return <span className={`span ${className}`}>{children}</span>;
}