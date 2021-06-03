import React from 'react';

interface Props {
	value: string;
	name: string;
	className?: string;
	id?: string;
	onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (value: React.FocusEvent<HTMLInputElement>) => void;
	tabIndex?: number;
	hidden?: boolean;
}

export function RadioButton(props: Props): JSX.Element {
	const {
		value,
		name,
		className = '',
		id = '',
		tabIndex = 0,
		hidden = false,
	} = props;

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { onChange = () => {} } = props;
		onChange(event);
	}

	function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
		const { onBlur = () => {} } = props;
		onBlur(event);
	}
	return (
		<>
			<input
				type="radio"
				name={name}
				className={`radio-button ${className}`}
				id={id}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
				tabIndex={tabIndex}
				hidden={hidden}
			/>
		</>
	);
}
