import React from 'react';

type Props = { className?: string; children: string };
export function Paragraph(props: Props) {
	const { className = '', children} = props;
	return <p className={`paragraph ${className}`}>{children}</p>;
}
