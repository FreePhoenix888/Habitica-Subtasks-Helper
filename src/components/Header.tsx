import React, { ChangeEvent, Context, createContext, useState } from 'react';
import { ToggleSwitchBlur } from './ToggleSwitchBlur';
import { IconGithubAnchor } from './IconGithubAnchor';
import '../styles/components/header.scss';

interface Props {
	children?: JSX.Element | JSX.Element[];
	className?: string;
}

export function Header(props: Props): JSX.Element {
	const { children, className = '' } = props;

	return (
		<div className={`header ${className}`}>
			<IconGithubAnchor anchorClassName="header__anchor-github" />
			{children}
		</div>
	);
}
