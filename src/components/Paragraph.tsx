import React from 'react';

interface Props {
	children: string | JSX.Element | JSX.Element[] | Element | Element[];
	className?: string;
}

export function Paragraph(props: Props): JSX.Element {
	const { children, className = '' } = props;
	return <p className={`paragraph ${className}`}>{children}</p>;
}
