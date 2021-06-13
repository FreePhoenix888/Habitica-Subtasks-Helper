import React from 'react';
import { ReactComponent as IconCheckMarkSVG } from '../media/images/check_mark.svg';
import { IconSVG } from './IconSVG';
import '../styles/components/icon.scss';

interface Props {
	className?: string;
}

export function IconCheckMark(props: Props) {
	const { className = '' } = props;

	return (
		<IconSVG
			className={`icon-checkMark ${className}`}
			Icon={IconCheckMarkSVG}
		/>
	);
}
