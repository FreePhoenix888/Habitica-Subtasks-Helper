import React, { Component, FC } from 'react';
import '../styles/components/icon.scss';

interface Props {
	Icon?: FC<{ className: string }>;
	className?: string;
}

export function IconSVG(props: Props) {
	const { className = '', Icon } = props;

	return <Icon className={`svg icon ${className}`} />;
}
