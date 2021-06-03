import React, { useState } from 'react';

interface Props {
	name: string;
	className?: string;
	placeholder?: string;
	id?: string;
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
				onChange={handleChange}
				value={value}
				className={`textarea ${className}`}
				placeholder={placeholder}
				id={id}
				name={name}
				cols={30}
				rows={10}
				wrap={wrap}
			/>
		</>
	);
}
