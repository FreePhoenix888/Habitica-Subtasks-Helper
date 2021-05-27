import React, {useState} from 'react';

type Props = {
	name: string;
	type?: string;
	className?: string;
	placeholder?: string;
	id?: string;
	before?: JSX.Element | undefined;
	after?: JSX.Element | undefined;
	autoSize?: boolean | string | undefined;
	tabIndex: number;
};

type InputValue = string;
export function Input(props: Props): JSX.Element {
	const {
		type,
		placeholder,
		className = '',
		id,
		name,
		before,
		after,
		autoSize = false,
		tabIndex = 0,
	} = props;
	const [value, changeValue] = useState<InputValue>('');
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		changeValue(event.target.value);
	}
	return (
		<>
			{before}
			<input
				size={autoSize ? value.length + 1 : undefined}
				tabIndex={tabIndex}
				type={type}
				name={name}
				placeholder={placeholder}
				className={`input ${autoSize ? 'input--auto-size' : ''} ${className}`}
				id={id}
				value={value}
				onChange={handleChange}
			/>
			{after}
		</>
	);
}