import React from 'react';
import { ReactComponent as SVG } from '../../media/images/icons/warning.svg';
import { IconSVG } from '../IconSVG';

interface Props {
	className?: string;
}

export function IconWarning(props: Props) {
	const { className = '' } = props;
	return <IconSVG className={`icon-warning ${className}`} Icon={SVG} />;
}
