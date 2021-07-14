import React, { Component, FC } from 'react';
import '../styles/components/icon.scss';

interface Props {
	Icon?: FC<React.SVGProps<SVGSVGElement>>;
	className?: string;
}

export function IconSVG(props: Props) {
	const { className = '', Icon } = props;

	return <Icon className={`icon svg ${className}`} />;
}
