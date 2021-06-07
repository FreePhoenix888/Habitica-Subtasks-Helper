import React, { ChangeEvent, createContext, useState } from 'react';
import { ModernRadioButtonGroup } from './ModernRadioButtonGroup';
import { useLocalStorage } from '../helpers/useLocalStorage';

interface Props {
	children: JSX.Element | JSX.Element[];
	groupClassName?: string;
	name: string;
	onChangeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function ModernRadioButtonGroupPreservingValue(
	props: Props
): JSX.Element {
	const { children, groupClassName = '', name } = props;

	const [localStorageCheckedRadio, setLocalStorageCheckedRadio] =
		useLocalStorage<string>(name, '');

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const { target } = event;
		const { value } = target;

		// Default behavior
		setLocalStorageCheckedRadio(value);

		// Custom behavior
		const { onChangeHandler } = props;
		if (onChangeHandler) {
			onChangeHandler(event);
		}
	}

	return (
		<ModernRadioButtonGroup
			{...props}
			defaultChecked={localStorageCheckedRadio}
			onChangeHandler={handleChange}
		>
			{children}
		</ModernRadioButtonGroup>
	);
}
