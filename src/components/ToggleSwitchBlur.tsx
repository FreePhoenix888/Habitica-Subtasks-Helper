import React from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import { IconBlur } from './icons/IconBlur';

interface Props {
	iconClassName?: string;
	inputClassName?: string;
	isChecked: boolean;
	isCheckedByDefault?: boolean;
	labelClassName?: string;
	name?: string;
	onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	sliderClassName?: string;
	sliderContent?: JSX.Element;
	text?: string;
}

export function ToggleSwitchBlur(props: Props): JSX.Element {
	const { iconClassName = '', ...rest } = props;

	return (
		<ToggleSwitch
			{...rest}
			sliderContent={
				<IconBlur className={`toggle-switch-blur__icon ${iconClassName}`} />
			}
		/>
	);
}
