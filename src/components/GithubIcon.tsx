import React from 'react';
import { ReactComponent as GithubIconSVG } from '../media/images/github_icon.svg';

interface Props {
	className?: string;
}

export function GithubIcon(props: Props) {
	const { className } = props;
	return <GithubIconSVG className={`icon github-icon ${className}`} />;
}
