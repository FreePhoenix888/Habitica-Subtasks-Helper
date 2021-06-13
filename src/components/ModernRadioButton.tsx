import React, { ChangeEvent, useContext, useState } from 'react';
import { CheckedRadioContext, NameContext } from './ModernRadioButtonGroup';
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
	radioButtonClassName?: string;
	value: string;
}

export function ModernRadioButton(props: Props): JSX.Element {
	const {
		children,
		radioButtonClassName = '',
		labelClassName = '',
		inputClassName = '',
		htmlFor,
		id = '',
		value,
	} = props;
	// Checked state
	const { checkedRadioValue, setCheckedRadioValue } =
		useContext(CheckedRadioContext);
	const isChecked = checkedRadioValue === value;

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		if (setCheckedRadioValue) {
			setCheckedRadioValue(event);
		}
	}

	// Focused state
	const [isFocused, changeIsFocused] = useState<boolean>(false);

	function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
		changeIsFocused(true);
	}

	function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
		changeIsFocused(false);
	}

	// Name
	const name = useContext(NameContext);

	const classNameModifiers = {
		checked: isChecked,
		focus: isFocused,
	};
	return (
		<div
			className={setClassName(
				'modern-radio-button',
				radioButtonClassName,
				classNameModifiers
			)}
		>
			<Label
				className={setClassName(
					'modern-radio-button__label',
					labelClassName,
					classNameModifiers
				)}
				htmlFor={htmlFor}
			>
				{children}
			</Label>
			<RadioButton
				className={setClassName(
					'modern-radio-button__input',
					inputClassName,
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
