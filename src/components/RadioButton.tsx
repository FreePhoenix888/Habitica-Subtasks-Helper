import React from 'react';

interface Props {
	name: string;
	className?: string;
	id?: string;
	before?: JSX.Element | undefined;
	after?: JSX.Element | undefined;
	value?: string;
	onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
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
			{before}
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
			{after}
		</>
	);
}
