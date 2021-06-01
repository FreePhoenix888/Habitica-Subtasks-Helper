import React from 'react';
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
	before?: JSX.Element | undefined;
	after?: JSX.Element | undefined;
	value?: string;
};

export function ModernRadioButton(props: Props) {
	const {
		children,
		name,
		containerClassName = '',
		radioButtonClassName = '',
		labelClassName = '',
		labelContentClassName = '',
		htmlFor,
		id,
		before,
		after,
		value,
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
				before={
					<Label
						htmlFor={htmlFor}
						className={`modern-radio-button-container__label modern-radio-button-container-label ${labelClassName}`}
						contentClassName={`modern-radio-button-container-label__content ${labelContentClassName}`}
					>
						{children}
					</Label>
				}
				after={after}
				onChange={handleChange}
			/>
		</div>
	);
}
