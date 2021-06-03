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
		<Label htmlFor={id} className={`modern-checkbox__label ${labelClassName}`}>
			<Input
				name={name}
				type="checkbox"
				className={`modern-checkbox ${inputClassName}`}
				placeholder={placeholder}
				id={id}
				autoSize={autoSize}
				tabIndex={tabIndex}
				isChecked={isChecked}
			></Input>
		</Label>
	);
}
