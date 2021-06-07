import React from 'react';
import { ReactComponent as IconGithubSVG } from '../media/images/github_icon.svg';
import '../styles/components/icon.scss';

interface Props {
	className?: string;
}

export function IconGithub(props: Props) {
	const { className = '' } = props;
	return <IconGithubSVG className={`icon icon-github ${className}`} />;
}
