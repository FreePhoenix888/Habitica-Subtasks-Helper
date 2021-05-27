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
			className={`radio-button-container ${
				isChecked ? 'radio-button-container--checked' : ''
			} ${containerClassName} ${
				isChecked ? `${containerClassName}--active` : ''
			}`}
		>
			<RadioButton
				name={name}
				className={`radio-button-container__radio-button ${
					isChecked ? 'radio-button-container__radio-button--checked' : ''
				} ${radioButtonClassName} ${
					isChecked ? `${radioButtonClassName}--checked` : ''
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
