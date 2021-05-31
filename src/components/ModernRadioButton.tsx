import React from 'react';
import { CheckedInputContext } from './ModernRadioButtonGroup';
import { RadioButton } from './RadioButton';

type Props = {
	name: string;
	radioButtonClassName?: string;
	containerClassName?: string;
	id?: string;
	before?: JSX.Element | undefined;
	after?: JSX.Element | undefined;
	value?: string;
};

export function ModernRadioButton(props: Props) {
	const {
		name,
		radioButtonClassName = '',
		id,
		before,
		after,
		value,
		containerClassName = '',
	} = props;
	const { inputChangeEvent, handleChange } =
		React.useContext(CheckedInputContext);
	const isChecked = inputChangeEvent?.target.value === value;

	return (
		<div
			className={`modern-radio-button-container ${containerClassName} ${
				isChecked
					? `modern-radio-button-container--checked ${containerClassName}--checked`
					: ''
			}`}
		>
			<RadioButton
				name={name}
				className={`modern-radio-button-container__radio-button ${radioButtonClassName} ${
					isChecked
						? `modern-radio-button-container__radio-button--checked ${radioButtonClassName}--checked`
						: ''
				}`}
				id={id}
				value={value}
				before={before}
				after={after}
				onChange={handleChange}
			/>
		</div>
	);
}
