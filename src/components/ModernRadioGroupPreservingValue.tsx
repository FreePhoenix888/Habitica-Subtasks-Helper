import React, {
	ChangeEvent,
	createContext,
	FormEvent,
	FormEventHandler,
	useState,
} from 'react';
import { ModernRadioGroup } from './ModernRadioGroup';
import { useLocalStorage } from '../helpers/useLocalStorage';

interface Props {
	children: JSX.Element;
	className?: string;
	name: string;
}

export function ModernRadioGroupPreservingValue(props: Props): JSX.Element {
	const { children, className = '', name } = props;

	const [localStorageCheckedRadio, setLocalStorageCheckedRadio] =
		useLocalStorage<string>(name, '');

	function handleChange(event: FormEvent<HTMLDivElement>) {
		// Default behavior
		const target = event.target as HTMLInputElement;

		setLocalStorageCheckedRadio(target.value);
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
