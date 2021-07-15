import React from 'react';
import { ReactComponent as IconBlurSVG } from '../../media/images/icons/success.svg';
import { IconSVG } from '../IconSVG';

interface Props {
	className?: string;
}

export function IconBlur(props: Props) {
	const { className = '' } = props;

	return <IconSVG className={`icon-success ${className}`} Icon={IconBlurSVG} />;
}
