import React, { useContext, useState } from 'react';
import { CheckedInputContext } from './ModernRadioButtonGroup';
import { Label } from './Label';
import { RadioButton } from './RadioButton';
import { setClassName } from '../helpers';
import '../styles/components/modernRadioButton.scss';

interface Props {
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
	
	const classNameConditions = [isChecked, isFocused];
	const classNameModifiers = ['checked' as const, 'focus' as const];
	return (
		<div
			className={setClassName(
				['modern-radio-button'],
				[radioButtonClassName],
				classNameConditions,
				classNameModifiers
			)}
		>
			<Label
				className={setClassName(
					['modern-radio-button__label'],
					[labelClassName],
					classNameConditions,
					classNameModifiers
				)}
				htmlFor={htmlFor}
			>
				{children}
			</Label>
			<RadioButton
				className={setClassName(
					['modern-radio-button__input'],
					[inputClassName],
					classNameConditions,
					classNameModifiers
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
