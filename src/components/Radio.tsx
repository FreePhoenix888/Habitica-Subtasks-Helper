import React from 'react';
import '../styles/components/inputGeneral.scss';

interface Props {
	className?: string;
	hidden?: boolean;
	id?: string;
	name: string;
	onBlurHandler?: (value: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
	onFocusHandler?: (value: React.FocusEvent<HTMLInputElement>) => void;
	tabIndex?: number;
	value: string;
}

export function Radio(props: Props): JSX.Element {
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
		const { onBlurHandler } = props;
		if (onBlurHandler) {
			onBlurHandler(event);
		}
	}
	return (
		<>
			<input
				className={`radio-button ${className}`}
				hidden={hidden}
				id={id}
				name={name}
				tabIndex={tabIndex}
				type="radio"
				value={value}
				onBlur={handleBlur}
				onChange={handleChange}
				onFocus={handleFocus}
			/>
		</>
	);
}
