import React, { useState } from 'react';
import { Input } from './Input';
import { Label } from './Label';

interface Props {
	autoSize?: boolean | string | undefined;
	id?: string;
	inputClassName?: string;
	isCheckedByDefault?: boolean;
	labelClassName?: string;
	name: string;
	placeholder?: string;
	tabIndex?: number;
	type?: string;
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
