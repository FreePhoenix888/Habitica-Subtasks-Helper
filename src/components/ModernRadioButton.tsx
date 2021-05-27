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

	return (
		<CheckedInputContext.Consumer>
			{({ checkedInput: checkedValue, handleChange }) => {
				const isChecked = checkedValue === value;
				return (
					<div
						className={`radio-button-container ${
							isChecked ? 'radio-button-container--isChecked' : ''
						} ${containerClassName} ${
							isChecked ? `${containerClassName}--active` : ''
						}`}
					>
						<RadioButton
							name={name}
							className={`radio-button-container__radio-button ${
								isChecked
									? 'radio-button-container__radio-button--isChecked'
									: ''
							} ${radioButtonClassName} ${
								isChecked ? `${radioButtonClassName}--isChecked` : ''
							}`}
							id={id}
							value={value}
							before={before}
							after={after}
							onChange={handleChange}
						/>
					</div>
				);
			}}
		</CheckedInputContext.Consumer>
	);
}
