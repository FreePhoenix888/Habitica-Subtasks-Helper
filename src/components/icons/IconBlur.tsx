import React from 'react';
import { ReactComponent as IconBlurSVG } from '../../media/images/icons/lens_blur.svg';
import { IconSVG } from '../IconSVG';

interface Props {
	className?: string;
}

export function IconBlur(props: Props) {
	const { className = '' } = props;

	return <IconSVG className={`icon-blur ${className}`} Icon={IconBlurSVG} />;
}
