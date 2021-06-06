import React, { useContext, useState } from 'react';
import { CheckedInputContext } from './ModernRadioButtonGroup';
import { Label } from './Label';
import { RadioButton } from './RadioButton';
import '../styles/components/modernRadioButton.scss';

type Props = {
	children: JSX.Element | JSX.Element[] | string;
	htmlFor: string;
	id?: string;
	inputClassName?: string;
	labelClassName?: string;
	name: string;
	radioButtonClassName?: string;
	value: string;
};

export function ModernRadioButton(props: Props): JSX.Element {
	const {
		children,
		name,
		radioButtonClassName = '',
		labelClassName = '',
		inputClassName = '',
		htmlFor,
		id = '',
		value,
	} = props;
	const { inputChangeEvent, handleChange = () => {} } =
		useContext(CheckedInputContext);
	const isChecked = inputChangeEvent?.target.value === value;

	const [isFocused, changeIsFocused] = useState<boolean>(false);

	function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
		changeIsFocused(true);
	}

	function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
		changeIsFocused(false);
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
		if (isFocused) {
			// Add modifier to every default class name
			const modifiedDefaultClassNames = defaultClassNames.map(
				(className) => `${className}--focus `
			);
			// Add modifier to every custom class name
			const modifiedCustomClassNames = customClassNames.map(
				(className) => `${className}--focus `
			);
			// Concatenate modified default class names with modified custom class names
			outputClassName += `${modifiedDefaultClassNames.join(
				' '
			)} ${modifiedCustomClassNames.join(' ')} `;
		}

		return outputClassName;
	}

	return (
		<div
			className={setClassName(['modern-radio-button'], [radioButtonClassName])}
		>
			<Label
				className={setClassName(
					['modern-radio-button__label'],
					[labelClassName]
				)}
				htmlFor={htmlFor}
			>
				{children}
			</Label>
			<RadioButton
				className={setClassName(
					['modern-radio-button__input'],
					[inputClassName]
				)}
				id={id}
				name={name}
				value={value}
				onBlurHandler={handleBlur}
				onChange={handleChange}
				onFocusHandler={handleFocus}
			/>
		</div>
	);
}
