import React from 'react';

interface Props {
	className?: string;
	id?: string;
	isChecked?: boolean;
	name: string;
	value: string;
}
export function Radio(props: Props): JSX.Element {
	const { name, id, className = '', value, isChecked } = props;

	return (
		<input
			checked={isChecked}
			className={`radio ${className}`}
			id={id}
			name={name}
			type="radio"
			value={value}
		/>
	);
}
