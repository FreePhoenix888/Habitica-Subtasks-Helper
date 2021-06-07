import React, { ChangeEvent, FocusEvent, useState } from 'react';
import '../styles/components/inputGeneral.scss';

interface Props {
	autoSize?: boolean | string | undefined;
	className?: string;
	id?: string;
	isChecked?: boolean;
	name: string;
	onChangeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
	onBlurHandler?: (event: FocusEvent<HTMLInputElement>) => void;
	onFocusHandler?: (event: FocusEvent<HTMLInputElement>) => void;
	placeholder?: string;
	tabIndex?: number;
	type?: string;
}

export function Input(props: Props): JSX.Element {
	const {
		type = 'text',
		placeholder = '',
		className = '',
		id = '',
		name,
		autoSize = false,
		tabIndex = 0,
		isChecked = false,
	} = props;
	const [value, changeValue] = useState<string>('');

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		// Default behavior
		changeValue(event.target.value);
		// Custom behavior
		const { onChangeHandler } = props;
		if (onChangeHandler) {
			onChangeHandler(event);
		}
	}

	function handleFocus(event: FocusEvent<HTMLInputElement>) {
		// Custom behavior
		const { onFocusHandler } = props;
		if (onFocusHandler) {
			onFocusHandler(event);
		}
	}

	function handleBlur(event: FocusEvent<HTMLInputElement>) {
		// Custom behavior
		const { onBlurHandler } = props;
		if (onBlurHandler) {
			onBlurHandler(event);
		}
	}

	return (
		<>
			<input
				checked={isChecked}
				className={`input ${
					autoSize ? `input--auto-size className--auto-size` : ''
				} ${className}`}
				id={id}
				name={name}
				placeholder={placeholder}
				size={autoSize ? value.length + 1 : 0}
				tabIndex={tabIndex}
				type={type}
				value={value}
				onBlur={handleBlur}
				onChange={handleChange}
				onFocus={handleFocus}
			/>
		</>
	);
}
