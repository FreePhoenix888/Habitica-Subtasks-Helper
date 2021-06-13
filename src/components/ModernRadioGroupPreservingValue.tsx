import React, { ChangeEvent, createContext, useState } from 'react';
import { ModernRadioGroup } from './ModernRadioGroup';
import { useLocalStorage } from '../helpers/useLocalStorage';

interface Props {
	children: JSX.Element | JSX.Element[];
	className?: string;
	name: string;
	onChangeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function ModernRadioGroupPreservingValue(
	props: Props
): JSX.Element {
	const { children, className = '', name } = props;

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
		<ModernRadioGroup
			{...props}
			defaultCheckedValue={localStorageCheckedRadio}
			onChangeHandler={handleChange}
		>
			{children}
		</ModernRadioGroup>
	);
}
