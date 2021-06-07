import React, { ChangeEvent, useState } from 'react';
import '../styles/components/inputGeneral.scss';
import '../styles/components/textarea.scss';

interface Props {
	className?: string;
	defaultValue?: string;
	id?: string;
	name: string;
	onChangeHandler?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	placeholder?: string;
	wrap?: 'hard' | 'soft';
}

export function Textarea(props: Props): JSX.Element {
	const {
		className = '',
		placeholder = '',
		id = '',
		name,
		wrap = 'soft',
		defaultValue = '',
	} = props;

	const [value, changeValue] = useState<string>(defaultValue);

	function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		const { onChangeHandler } = props;
		if (onChangeHandler) {
			onChangeHandler(event);
		}
		changeValue(event.target.value);
	}

	return (
		<>
			<textarea
				className={`textarea ${className}`}
				cols={30}
				id={id}
				name={name}
				placeholder={placeholder}
				rows={10}
				value={value}
				wrap={wrap}
				onChange={handleChange}
			/>
		</>
	);
}
