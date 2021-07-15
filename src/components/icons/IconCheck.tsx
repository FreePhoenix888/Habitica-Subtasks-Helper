import React from 'react';
import { ReactComponent as SVG } from '../../media/images/icons/check.svg';
import { IconSVG } from '../IconSVG';

interface Props {
	className?: string;
}

export function IconCheck(props: Props) {
	const { className = '' } = props;
	return (
		<IconSVG
			className={`icon-check ${className}`}
			Icon={SVG}
		/>
	);
}
