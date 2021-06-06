import React, { useState } from 'react';

interface Props {
	autoSize?: boolean | string | undefined;
	className?: string;
	id?: string;
	isChecked?: boolean;
	name: string;
	onBlurHandler?: (event: React.FocusEvent<HTMLElement>) => void;
	onFocusHandler?: (event: React.FocusEvent<HTMLElement>) => void;
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
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		changeValue(event.target.value);
	}

	function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
		const { onFocusHandler } = props;
		if (onFocusHandler) {
			onFocusHandler(event);
		}
	}

	function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
		const { onBlurHandler } = props;
		if (onBlurHandler) {
			onBlurHandler(event);
		}
	}
	
	return (
		<>
			<input
				checked={isChecked}
				className={`input ${autoSize ? `input--auto-size className--auto-size` : ''} ${className}`}
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
