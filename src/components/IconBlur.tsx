import React from 'react';
import { ReactComponent as IconBlurSVG } from '../media/images/lens_blur_icon.svg';

interface Props {
	className?: string;
}

export function IconBlur(props: Props) {
	const { className = '' } = props;

	return <IconBlurSVG className={`svg icon blur-icon ${className}`} />;
}
