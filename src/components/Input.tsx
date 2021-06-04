import React, { useState } from 'react';

interface Props {
	name: string;
	type?: string;
	className?: string;
	placeholder?: string;
	id?: string;
	autoSize?: boolean | string | undefined;
	tabIndex?: number;
	isChecked?: boolean;
	onFocusHandler?: (event: React.FocusEvent<HTMLElement>) => void;
	onBlurHandler?: (event: React.FocusEvent<HTMLElement>) => void;
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
				onFocus={handleFocus}
				onBlur={handleBlur}
				size={autoSize ? value.length + 1 : 0}
				tabIndex={tabIndex}
				type={type}
				name={name}
				placeholder={placeholder}
				className={`input ${autoSize ? `input--auto-size className--auto-size` : ''} ${className}`}
				id={id}
				value={value}
				onChange={handleChange}
				checked={isChecked}
			/>
		</>
	);
}
