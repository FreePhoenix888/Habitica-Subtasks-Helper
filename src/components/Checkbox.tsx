import React, { useState } from 'react';
import { Input } from './Input';
import { Label } from './Label';

interface Props {
	name: string;
	type?: string;
	inputClassName?: string;
	labelClassName?: string;
	isCheckedByDefault?: boolean;
	placeholder?: string;
	id?: string;
	autoSize?: boolean | string | undefined;
	tabIndex?: number;
}

export function Checkbox(props: Props) {
	const {
		name,
		type,
		inputClassName = '',
		labelClassName = '',
		isCheckedByDefault = false,
		placeholder = '',
		id = '',
		autoSize = false,
		tabIndex = 0,
	} = props;

	const [isChecked, changeIsChecked] = useState<boolean>(isCheckedByDefault);

	function handleClick(event: React.MouseEvent<HTMLInputElement>) {
		changeIsChecked(!isChecked);
	}

	return (
		<Label className={`modern-checkbox__label ${labelClassName}`} htmlFor={id}>
			<Input
				autoSize={autoSize}
				className={`modern-checkbox ${inputClassName}`}
				id={id}
				isChecked={isChecked}
				name={name}
				placeholder={placeholder}
				tabIndex={tabIndex}
				type="checkbox"
			 />
		</Label>
	);
}
