import React, { ChangeEvent, FocusEvent, useState } from 'react';
import { Input } from './Input';
import { useLocalStorage } from '../helpers';
import '../styles/components/inputGeneral.scss';

interface Props {
	autoSize?: boolean | string | undefined;
	className?: string;
	id?: string;
	isChecked?: boolean;
	name: string;
	onBlurHandler?: (event: FocusEvent<HTMLInputElement>) => void;
	onChangeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
	onFocusHandler?: (event: FocusEvent<HTMLInputElement>) => void;
	placeholder?: string;
	tabIndex?: number;
	type?: string;
}

export function InputPreservingValue(props: Props): JSX.Element {
	const { name } = props;
	const [localStorageValue, setLocalStorageValue] = useLocalStorage<string>(
		name,
		''
	);

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setLocalStorageValue(event.target.value);
	}

	return (
		<Input
			{...props}
			defaultValue={localStorageValue}
			onChangeHandler={handleChange}
		/>
	);
}
