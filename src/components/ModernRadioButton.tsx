import React, { useContext } from 'react';
import { CheckedInputContext } from './ModernRadioButtonGroup';
import { Label } from './Label';
import { RadioButton } from './RadioButton';

type Props = {
	children: JSX.Element | JSX.Element[] | string;
	name: string;
	radioButtonClassName?: string;
	containerClassName?: string;
	labelClassName?: string;
	labelContentClassName?: string;
	htmlFor: string;
	id?: string;
	value: string;
};

export function ModernRadioButton(props: Props): JSX.Element {
	const {
		children,
		name,
		containerClassName = '',
		radioButtonClassName = '',
		labelClassName = '',
		labelContentClassName = '',
		htmlFor,
		id = '',
		value,
	} = props;
	const { inputChangeEvent, handleChange = () => {} } =
		useContext(CheckedInputContext);
	const isChecked = inputChangeEvent?.target.value === value;

	function setModernRadioButtonClassName() {
		let outputClassName = `modern-radio-button ${containerClassName} `;
		if (isChecked) {
			outputClassName += `modern-radio-button--checked ${containerClassName}--checked`;
		}
		return outputClassName;
	}

	function setLabelClassName() {
		let outputClassName = `modern-radio-button__label ${labelClassName} `;
		if (isChecked) {
			outputClassName += `modern-radio-button__label--checked ${labelClassName}--checked `;
		}
		return outputClassName;
	}

	function setRadioButtonClassName() {
		let outputClassName = `modern-radio-button__radio-button ${radioButtonClassName} `;
		if (isChecked) {
			outputClassName += `modern-radio-button__radio-button--checked ${radioButtonClassName}--checked`;
		}
		return outputClassName;
	}

	return (
		<div className={setModernRadioButtonClassName()}>
			<Label
				htmlFor={htmlFor}
				className={`modern-radio-button__label ${labelClassName}`}
				contentClassName={setLabelClassName()}
			>
				{children}
			</Label>
			<RadioButton
				name={name}
				className={setRadioButtonClassName()}
				id={id}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
}
