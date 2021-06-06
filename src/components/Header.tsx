import React from 'react';
import { ToggleSwitchBlur } from './ToggleSwitchBlur';
import { IconGithubAnchor } from './IconGithubAnchor';
import '../styles/components/header.scss';

interface Props {
	className?: string;
}

export function Header(props: Props): JSX.Element {
	const { className = '' } = props;

	return (
		<div className={`header ${className}`}>
			<ToggleSwitchBlur className="header__toggle-switch header__toggle-switch-blur" />
			<IconGithubAnchor anchorClassName="header__anchor-github" />
		</div>
	);
}
