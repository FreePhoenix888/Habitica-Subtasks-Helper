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
	text?: string;
}

export function ToggleSwitch(props: Props): JSX.Element {
	const {
		children,
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

	function setClassName(defaultClassNames = [''], customClassNames = ['']) {
		// Concatenate default class names with custom class names
		let outputClassName = `${defaultClassNames.join(
			' '
		)} ${customClassNames.join(' ')} `;

		if (isChecked) {
			// Add modifier to every default class name
			const modifiedDefaultClassNames = defaultClassNames.map(
				(className) => `${className}--checked `
			);
			// Add modifier to every custom class name
			const modifiedCustomClassNames = customClassNames.map(
				(className) => `${className}--checked `
			);
			// Concatenate modified default class names with modified custom class names
			outputClassName += `${modifiedDefaultClassNames.join(
				' '
			)} ${modifiedCustomClassNames.join(' ')} `;
		}

		return outputClassName;
	}

	return (
		<Label
			className={setClassName(['toggle-switch'], [labelClassName])}
			htmlFor="toggle-switch"
		>
			<div
				className={setClassName(
					['togle-switch-slider', 'togle-switch__slider'],
					[sliderClassName]
				)}
			>
				{children}
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
				className={setClassName(['toggle-switch__input'], [inputClassName])}
				id="toggle-switch"
				type="checkbox"
				onChange={handleChange}
			/>
		</Label>
	);
}
