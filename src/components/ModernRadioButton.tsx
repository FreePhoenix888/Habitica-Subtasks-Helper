import React, { useContext, useState } from 'react';
import { CheckedInputContext } from './ModernRadioButtonGroup';
import { Label } from './Label';
import { RadioButton } from './RadioButton';

type Props = {
	children: JSX.Element | JSX.Element[] | string;
	name: string;
	radioButtonClassName?: string;
	labelClassName?: string;
	inputClassName?: string;
	htmlFor: string;
	id?: string;
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

	function setClassName(defaultClassName: string, customClassName = '') {
		let outputClassName = `${defaultClassName} ${customClassName} `;
		if (isChecked) {
			outputClassName += `${defaultClassName}--checked ${customClassName}--checked `;
		}
		if (isFocused) {
			outputClassName += `${defaultClassName}--focus ${customClassName}--focus `;
		}
		return outputClassName;
	}

	return (
		<div className={setClassName('modern-radio-button', radioButtonClassName)}>
			<Label
				htmlFor={htmlFor}
				className={setClassName('modern-radio-button__label', labelClassName)}
			>
				{children}
			</Label>
			<RadioButton
				name={name}
				className={setClassName('modern-radio-button__input', inputClassName)}
				id={id}
				value={value}
				onChange={handleChange}
				onFocusHandler={handleFocus}
				onBlurHandler={handleBlur}
			/>
		</div>
	);
}
