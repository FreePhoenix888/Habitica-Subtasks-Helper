import React from 'react';
import { ReactComponent as IconGithubSVG } from '../media/images/github_icon.svg';

interface Props {
	className?: string;
}

export function IconGithub(props: Props) {
	const { className = '' } = props;
	return <IconGithubSVG className={`icon icon-github ${className}`} />;
}
