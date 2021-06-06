import React, { useState } from 'react';
import { Input } from './Input';
import { Label } from './Label';
import '../styles/components/toggle-switch.scss';
import { ReactComponent as SVG } from '../media/images/lens_blur_icon.svg';

interface Props {
	children?: JSX.Element;
	inputClassName?: string;
	isCheckedByDefault?: boolean;
	labelClassName?: string;
	onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	sliderClassName?: string;
}

export function ToggleSwitch(props: Props): JSX.Element {
	const {
		children,
		labelClassName = '',
		sliderClassName = '',
		inputClassName = '',
		isCheckedByDefault = false,
	} = props;

	const [isChecked, changeIsChecked] = useState<boolean>(isCheckedByDefault);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		// Defaul behavior
		const target = event.target as HTMLInputElement;
		changeIsChecked(target.checked);

		// Custom behavior
		const { onChangeHandler } = props;

		if (onChangeHandler) {
			onChangeHandler(event);
		}
	}

	function setClassName(defaultClassName: string, customClassName = '') {
		let outputClassName = `${defaultClassName} ${customClassName} `;
		if (isChecked) {
			outputClassName += `${defaultClassName}--checked ${customClassName}--checked `;
		}
		return outputClassName;
	}

	return (
		<Label
			className={setClassName('toggle-switch', labelClassName)}
			htmlFor="toggle-switch"
		>
			<div className={setClassName('togle-switch-slider', sliderClassName)}>
				{children}
			</div>
			<input
				className={setClassName('toggle-switch__input', inputClassName)}
				id="toggle-switch"
				type="checkbox"
				onChange={handleChange}
			/>
		</Label>
	);
}
