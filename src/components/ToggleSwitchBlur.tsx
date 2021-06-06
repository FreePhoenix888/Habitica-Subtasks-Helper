import React from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import { IconBlur } from './IconBlur';

interface Props {
	className?: string;
	iconClassName?: string;
}

export function ToggleSwitchBlur(props: Props): JSX.Element {
	const { className = '', iconClassName = '' } = props;

	return (
		<ToggleSwitch labelClassName={`toggle-switch-blur ${className}`}>
			<IconBlur className={`toggle-switch-blur__icon ${iconClassName}`} />
		</ToggleSwitch>
	);
}
