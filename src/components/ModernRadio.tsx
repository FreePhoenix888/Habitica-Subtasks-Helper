import React, { ChangeEvent, useContext, useState } from 'react';
import { CheckedRadioContext, NameContext } from './ModernRadioGroup';
import { Label } from './Label';
import { Radio } from './Radio';
import { setClassName } from '../helpers';
import '../styles/components/modernRadio.scss';

interface Props {
	children: JSX.Element | JSX.Element[] | string;
	htmlFor: string;
	id?: string;
	inputClassName?: string;
	labelClassName?: string;
	radioButtonClassName?: string;
	value: string;
}

export function ModernRadio(props: Props): JSX.Element {
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
				'modern-radio',
				radioButtonClassName,
				classNameModifiers
			)}
		>
			<Label
				className={setClassName(
					'modern-radio__label',
					labelClassName,
					classNameModifiers
				)}
				htmlFor={htmlFor}
			>
				{children}
			</Label>
			<Radio
				className={setClassName(
					'modern-radio__input',
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
