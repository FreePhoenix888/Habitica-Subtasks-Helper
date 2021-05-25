import React, { Fragment, useState } from 'react';
// import { useSpring, animated } from 'react-spring';
import './styles/App.scss';

type ContainerProps = {
	children: JSX.Element;
};
function Container(props: ContainerProps) {
	const { children } = props;
	return <div className="container">{children}</div>;
}

// Label
type LabelProps = {
	className: string;
	htmlFor: string | undefined;
	children: JSX.Element | string;
};

function Label(props: LabelProps): JSX.Element {
	const { htmlFor, children, className } = props;
	return (
		<label htmlFor={htmlFor} className={className}>
			{children}
		</label>
	);
}

// Input
type InputProps = {
	className: string;
	placeholder: string;
	id: string;
	name: string;
	before?: JSX.Element | undefined;
	after?: JSX.Element | undefined;
};

type InputValue = string;
function Input(props: InputProps): JSX.Element {
	const [value, changeValue] = useState<InputValue>('');

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		changeValue(event.target.value);
	}
	const { placeholder, className, id, name, before, after } = props;
	return (
		<>
			{before}
			<input
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
	before: undefined,
	after: undefined,
};

// Textarea
/*	type TextareaProps = {
className: string;
placeholder: string;
id: string;
name:string;
}

function Textarea(props: TextareaProps){
	const {className, placeholder, id,name} = props;
	return <textarea name={name} id={id} cols="30" rows="10">{children}</textarea>
} */

function App(): JSX.Element {
	const elementsInsideContainer = (
		<>
			<h1>Habitica Subtasks Maker</h1>
			<div className="task-title">
				<Input
					before={
						<Label htmlFor="taskTitle" className="task-title__label">
							Title:
						</Label>
					}
					name="task_title"
					placeholder="The Venus Project Conception."
					className="task-title__input"
					id="taskTitle"
				/>
			</div>
		</>
	);
	return <Container>{elementsInsideContainer}</Container>;
}

export default App;
