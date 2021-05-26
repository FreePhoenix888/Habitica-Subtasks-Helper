import React, { useState } from 'react';

// Label
type LabelProps = {
	className: string;
	htmlFor: string | undefined;
	children: string;
};

export function Label(props: LabelProps): JSX.Element {
	const { htmlFor, children, className } = props;
	return (
		<label htmlFor={htmlFor} className={className}>
			{children}
		</label>
	);
}
// End: Label

// Input
type InputProps = {
	name: string;
	type?: string;
	className?: string;
	placeholder?: string;
	id?: string;
	before?: JSX.Element | undefined;
	after?: JSX.Element | undefined;
};

type InputValue = string;
export function Input(props: InputProps): JSX.Element {
	const { type, placeholder, className, id, name, before, after } = props;
	const [value, changeValue] = useState<InputValue>('');
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		changeValue(event.target.value);
	}
	return (
		<>
			{before}
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				className={className}
				id={id}
				value={value}
				onChange={handleChange}
			/>
			{after}
		</>
	);
}

Input.defaultProps = {
	type: 'text',
	placeholder: '',
	className: '',
	id: '',
	before: undefined,
	after: undefined,
};
// End: Input

// Textarea
type TextareaProps = {
	name: string;
	className?: string;
	placeholder?: string;
	id?: string;
	before?: JSX.Element | undefined;
	after?: JSX.Element | undefined;
	wrap?: 'hard' | 'soft';
};

type TextareaValue = string;
export function Textarea(props: TextareaProps) {
	const [value, changeValue] = useState<TextareaValue>('');
	const { className, placeholder, id, name, wrap, before, after } = props;

	function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		changeValue(event.target.value);
	}
	return (
		<>
			{before}
			<textarea
				onChange={handleChange}
				value={value}
				className={className}
				placeholder={placeholder}
				id={id}
				name={name}
				cols={30}
				rows={10}
				wrap={wrap}
			/>
			{after}
		</>
	);
}

Textarea.defaultProps = {
	before: undefined,
	after: undefined,
	placeholder: '',
	wrap: 'soft',
	className: '',
	id: '',
};
// End: Textarea

// Radio button
type RadioButtonProps = {
	name: string;
	className?: string;
	placeholder?: string;
	id?: string;
	before?: JSX.Element | undefined;
	after?: JSX.Element | undefined;
	value?: string;
};

export function RadioButton(props: RadioButtonProps) {
	const { className, id, name, before, after, value } = props;
	return (
		<>
			{before}
			<input
				type="radio"
				name={name}
				className={className}
				id={id}
				value={value}
			/>
			{after}
		</>
	);
}

RadioButton.defaultProps = {
	before: undefined,
	after: undefined,
	placeholder: '',
	className: '',
	id: '',
	value: '',
};
// End: Radio button
