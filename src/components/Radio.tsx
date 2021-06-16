import React, { createRef, useEffect } from 'react';
import '../styles/components/inputGeneral.scss';

interface Props {
	className?: string;
	hidden?: boolean;
	id?: string;
	isChecked: boolean;
	name: string;
	onBlurHandler?: (value: React.FocusEvent<HTMLInputElement>) => void;
	onChangeHandler?: (value: React.ChangeEvent<HTMLInputElement>) => void;
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
		isChecked,
		onChangeHandler,
		onFocusHandler,
		onBlurHandler,
	} = props;

	const radioRef = createRef<HTMLInputElement>();

	useEffect(() => {
		radioRef.current.checked = true;
	}, [isChecked]);
	return (
		<>
			<input
				className={`radio-button ${className}`}
				hidden={hidden}
				id={id}
				name={name}
				ref={radioRef}
				tabIndex={tabIndex}
				type="radio"
				value={value}
				onBlur={onBlurHandler}
				onChange={onChangeHandler}
				onFocus={onFocusHandler}
			/>
		</>
	);
}
