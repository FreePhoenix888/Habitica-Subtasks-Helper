import React from 'react';
import { Label } from './Label';
import '../styles/components/toggle-switch.scss';
import { setClassName } from '../helpers';

interface Props {
	inputClassName?: string;
	isChecked: boolean;
	labelClassName?: string;
	name?: string;
	onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	sliderClassName?: string;
	sliderContent?: JSX.Element;
	text?: string;
}

export function ToggleSwitch(props: Props): JSX.Element {
	const {
		isChecked,
		sliderContent,
		labelClassName = '',
		sliderClassName = '',
		inputClassName = '',
		text = '',
		name = '',
	} = props;

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { onChangeHandler } = props;

		if (onChangeHandler) {
			onChangeHandler(event);
		}
	}

	const classNameModifiers = {
		checked: isChecked,
	};

	return (
		<Label
			className={setClassName(
				`toggle-switch ${labelClassName}`,
				classNameModifiers
			)}
			htmlFor="toggle-switch"
		>
			<div
				className={setClassName(
					`togle-switch-slider togle-switch__slider ${sliderClassName}`,
					classNameModifiers
				)}
			>
				{sliderContent}
			</div>
			<div
				className={setClassName(
					`togle-switch-text togle-switch__text ${sliderClassName}`,
					classNameModifiers
				)}
			>
				{text}
			</div>
			<input
				checked={isChecked}
				className={setClassName(
					`toggle-switch__input ${inputClassName}`,
					classNameModifiers
				)}
				id="toggle-switch"
				name={name}
				type="checkbox"
				onChange={handleChange}
			/>
		</Label>
	);
}
