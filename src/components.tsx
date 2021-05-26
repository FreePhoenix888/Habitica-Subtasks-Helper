import React, { useState } from 'react';

// Label
type LabelProps = {
	className: string;
	htmlFor: string | undefined;
	children: string | Element | JSX.Element;
};

export function Label(props: LabelProps): JSX.Element {
	const { htmlFor, children, className } = props;
	return (
		<label htmlFor={htmlFor} className={`label ${className}`}>
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
	const { type, placeholder, className= '', id, name, before, after } = props;
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
				className={`input ${className}`}
				id={id}
				value={value}
				onChange={handleChange}
			/>
			{after}
		</>
	);
}
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
export function Textarea(props: TextareaProps): JSX.Element {
	const [value, changeValue] = useState<TextareaValue>('');
	const { className='', placeholder, id, name, wrap, before, after } = props;

	function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		changeValue(event.target.value);
	}
	return (
		<>
			{before}
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
			{after}
		</>
	);
}
// End: Textarea

// Radio button
type RadioButtonProps = {
	name: string;
	className?: string;
	id?: string;
	before?: JSX.Element | undefined;
	after?: JSX.Element | undefined;
	value?: string;
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function RadioButton(props: RadioButtonProps): JSX.Element {
	const { className='', id, name, before, after, value, handleChange = () => {} } = props;
	return (
		<>
			{before}
			<input
				type="radio"
				name={name}
				className={`radio-button ${className}`}
				id={id}
				value={value}
				onChange={handleChange}
			/>
			{after}
		</>
	);
}
// End: Radio button

// Modern radio button
type ModernRadioButtonProps = {
	name: string;
	className?: string;
	id?: string;
	before?: JSX.Element | undefined;
	after?: JSX.Element | undefined;
	value?: string;
	isCheckedByDefault?: boolean;
};

type ModernRadioButtonIsChecked = boolean;
export function ModernRadioButton(props: ModernRadioButtonProps) {
	const { name, className='', id, before, after, value, isCheckedByDefault = false } = props;
	const [isChecked, changeChecked] = useState<ModernRadioButtonIsChecked>(isCheckedByDefault);
	function handleChange(event: React.ChangeEvent<HTMLInputElement>){
		changeChecked(event.target.checked)
	}
	return (
		<div className="radio-button-container">
			<RadioButton
				name={name}
				className={`radio-button-container__radio-button ${className}`}
				id={id}
				value={value}
				before={before}
				after={after}
				handleChange={handleChange}
			/>
		</div>
	);
}
// End: Modern radio button
