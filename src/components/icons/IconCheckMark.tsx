import React from 'react';
import { ReactComponent as SVG } from '../../media/images/icons/check.svg';
import { IconSVG } from '../IconSVG';

interface Props {
	className?: string;
}

export function IconCheckMark(props: Props) {
	const { className = '' } = props;
	return (
		<IconSVG
			className={`icon-checkmark ${className}`}
			Icon={SVG}
		/>
	);
}
