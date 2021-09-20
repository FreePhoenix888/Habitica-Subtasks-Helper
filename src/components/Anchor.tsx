import React from 'react';
import './Anchor/anchor.scss';

enum TargetValues {
	'_self',
	'_blank',
	'_parent',
	'_top',
}

interface Props {
	children?: JSX.Element | JSX.Element[];
	className?: string;
	href: string;
	target?: keyof typeof TargetValues;
}

export function Anchor(props: Props): JSX.Element {
	const { href, children, className = '', target = '_blank' } = props;
	return (
		<a className={`anchor ${className}`} href={href} target={target}>
			{children}
		</a>
	);
}
