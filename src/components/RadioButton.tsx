import React from 'react';
import { InputChangeEventType } from './ModernRadioButtonGroup';

type Props = {
	name: string;
	className?: string;
	id?: string;
	before?: JSX.Element | undefined;
	after?: JSX.Element | undefined;
	value?: string;
	onChange: (value: InputChangeEventType) => void;
};

export function RadioButton(props: Props): JSX.Element {
	const {
		className = '',
		id,
		name,
		before,
		after,
		value,
		onChange = () => {},
	} = props;

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		onChange(event);
	}
	return (
		<>
			{before}
			<input
				type="radio"
				name={name}
				className={`radio-button ${className}`}
				id={id}
				value={value}
				onChange={handleChange}
			/>
			{after}
		</>
	);
}
