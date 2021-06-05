import React from 'react';
import { ReactComponent as BlurIconSVG } from '../media/images/lens_blur.svg';

interface Props {
	className?: string;
}

export function BlurIcon(props: Props) {
	const { className } = props;

	return <BlurIconSVG className={`svg icon blur-icon ${className}`} />;
}
