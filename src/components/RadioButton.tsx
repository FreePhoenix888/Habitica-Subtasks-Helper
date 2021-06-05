import React from 'react';

interface Props {
	value: string;
	name: string;
	className?: string;
	id?: string;
	onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
	onFocusHandler?: (value: React.FocusEvent<HTMLInputElement>) => void;
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

	function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
		const { onFocusHandler } = props;

		if (onFocusHandler) {
			onFocusHandler(event);
		}
	}

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { onChange } = props;
		if (onChange) {
			onChange(event);
		}
	}

	function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
		const { onBlur } = props;
		if (onBlur) {
			onBlur(event);
		}
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
				onFocus={handleFocus}
				onBlur={handleBlur}
				tabIndex={tabIndex}
				hidden={hidden}
			/>
		</>
	);
}
