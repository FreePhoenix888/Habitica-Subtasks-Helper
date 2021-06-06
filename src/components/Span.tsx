import React from 'react';
import '../styles/components/span.scss'

interface Props {
	children: string | JSX.Element | JSX.Element[];
	className?: string;
}

export function Span(props: Props): JSX.Element {
	const { children, className = '' } = props;

	return <span className={`span ${className}`}>{children}</span>;
}
