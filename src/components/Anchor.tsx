import React from 'react';

interface Props {
	children?: JSX.Element | JSX.Element[];
	className?: string;
	href: string;
}

export function Anchor(props: Props): JSX.Element {
	const { href, children, className = '' } = props;
	return (
		<a className={`anchor ${className}`} href={href}>
			{children}
		</a>
	);
}
