import React, { useState } from 'react';
import { Input } from './Input';
import { Label } from './Label';
import '../styles/components/toggle-switch.scss';
import { ReactComponent as SVG } from '../media/images/lens_blur_icon.svg';
import { setClassName } from '../helpers';

interface Props {
	sliderContent?: JSX.Element;
	inputClassName?: string;
	isCheckedByDefault?: boolean;
	labelClassName?: string;
	onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	sliderClassName?: string;
	text?: string;
	for?: JSX.Element;
}

export function ToggleSwitch(props: Props): JSX.Element {
	const {
		sliderContent,
		labelClassName = '',
		sliderClassName = '',
		inputClassName = '',
		text = '',
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
	const modifiers = ['checked' as const];
	return (
		<Label
			className={setClassName(
				['toggle-switch'],
				[labelClassName],
				[isChecked],
				modifiers
			)}
			htmlFor="toggle-switch"
		>
			<div
				className={setClassName(
					['togle-switch-slider', 'togle-switch__slider'],
					[sliderClassName],
					[isChecked],
					modifiers
				)}
			>
				{sliderContent}
			</div>
			<div
				className={setClassName(
					['togle-switch-text', 'togle-switch__text'],
					[sliderClassName]
				)}
			>
				{text}
			</div>

			<input
				className={setClassName(
					['toggle-switch__input'],
					[inputClassName],
					[isChecked],
					modifiers
				)}
				id="toggle-switch"
				type="checkbox"
				onChange={handleChange}
			/>
		</Label>
	);
}
