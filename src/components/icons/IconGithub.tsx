import React from 'react';
import { ReactComponent as SVG } from '../../media/images/icons/github.svg';
import { IconSVG } from '../IconSVG';

interface Props {
	className?: string;
}

export function IconGithub(props: Props) {
	const { className = '' } = props;
	return (
		<IconSVG className={`icon-github ${className}`} Icon={SVG} />
	);
}
