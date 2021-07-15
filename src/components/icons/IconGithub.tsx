import React from 'react';
import { ReactComponent as IconGithubSVG } from '../../media/images/icons/github.svg';
import { IconSVG } from '../IconSVG';

interface Props {
	className?: string;
}

export function IconGithub(props: Props) {
	const { className = '' } = props;
	return (
		<IconSVG className={`icon-github ${className}`} Icon={IconGithubSVG} />
	);
}
