import React, { ChangeEvent, useState } from 'react';
import { useLocalStorage } from '../helpers';
import { Textarea } from './Textarea';

interface Props {
	className?: string;
	defaultValue?: string;
	id?: string;
	name: string;
	onChangeHander?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	placeholder?: string;
	wrap?: 'hard' | 'soft';
}

export function TextareaPreservingValue(props: Props): JSX.Element {
	const { name, defaultValue = '' } = props;
	const [localStorageValue, setLocalStorageValue] = useLocalStorage<string>(
		name,
		defaultValue
	);

	function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		// Default behavior
		setLocalStorageValue(event.target.value);
		// Custom Behavior
		const { onChangeHander } = props;
		if (onChangeHander) {
			onChangeHander(event);
		}
	}

	return (
		<>
			<Textarea
				{...props}
				onChangeHandler={handleChange}
				defaultValue={localStorageValue}
			/>
		</>
	);
}
