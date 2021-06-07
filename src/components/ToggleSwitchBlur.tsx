import React from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import { IconBlur } from './IconBlur';

interface Props {
	iconClassName?: string;
	inputClassName?: string;
	isChecked: boolean;
	isCheckedByDefault?: boolean;
	labelClassName?: string;
	onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	sliderClassName?: string;
	sliderContent?: JSX.Element;
	text?: string;
}

export function ToggleSwitchBlur(props: Props): JSX.Element {
	const { iconClassName = '', ...rest } = props;

	return (
		<ToggleSwitch {...rest}>
			<IconBlur className={`toggle-switch-blur__icon ${iconClassName}`} />
		</ToggleSwitch>
	);
}
