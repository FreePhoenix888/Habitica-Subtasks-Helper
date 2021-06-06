import React, { useState } from 'react';
import '../styles/components/inputGeneral.scss';
import '../styles/components/textarea.scss';

interface Props {
	className?: string;
	id?: string;
	name: string;
	placeholder?: string;
	wrap?: 'hard' | 'soft';
}

export function Textarea(props: Props): JSX.Element {
	const [value, changeValue] = useState<string>('');
	const {
		className = '',
		placeholder = '',
		id = '',
		name,
		wrap = 'soft',
	} = props;

	function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
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
