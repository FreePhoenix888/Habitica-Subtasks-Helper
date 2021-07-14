import React from 'react';
import { ReactComponent as IconCheckMarkSVG } from '../../media/images/icons/check.svg';
import { IconSVG } from '../IconSVG';
import '../../styles/components/icon.scss';

interface Props {
	className?: string;
}

export function IconCheckMark(props: Props) {
	const { className = '' } = props;

	return (
		<IconSVG
			className={`icon-checkmark ${className}`}
			Icon={IconCheckMarkSVG}
		/>
	);
}
