import React from 'react';
import { InputChangeEventType } from './ModernRadioButtonGroup';

type Props = {
	name: string;
	className?: string;
	id?: string;
	before?: JSX.Element | undefined;
	after?: JSX.Element | undefined;
	value?: string;
	onChange?: (value: InputChangeEventType) => void;
	onBlur?: (value: React.FocusEvent<HTMLInputElement>) => void;
	tabIndex?: number;
	hidden?: boolean;
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
		tabIndex = 0,
		hidden = false,
		onBlur = () => {}
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
				tabIndex={tabIndex}
				hidden={hidden}
				onBlur={onBlur}
			/>
			{after}
		</>
	);
}
