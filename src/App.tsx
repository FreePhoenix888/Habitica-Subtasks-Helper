import React, { Fragment, useState } from 'react';
// import { useSpring, animated } from 'react-spring';
import './styles/App.scss';


// Label
type LabelProps = {
	className: string;
	htmlFor: string | undefined;
	children: string;
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
type TextareaProps = {
	className: string;
	placeholder?: string;
	id: string;
	name: string;
	before?: JSX.Element | undefined;
	after?: JSX.Element | undefined;
	wrap?: 'hard' | 'soft';
};

type TextareaValue = string;
function Textarea(props: TextareaProps) {
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
};

function App(): JSX.Element {
	const elementsInsideContainer = (
		<>
			<h1>Habitica Subtasks Helper</h1>
			<div className="task-title">
				<Input
					before={
						<Label htmlFor="taskTitle" className="task-title__label">
							Title:
						</Label>
					}
					name="task_title"
					placeholder="The Venus Project Conception."
					className="input task-title__input"
					id="taskTitle"
				/>
			</div>
			<div className="task-subtasks">
				<Textarea
					className="textarea task-subtasks__textarea"
					id="taskSubtasks"
					name="task_subtasks"
					placeholder={
						'What is the Venus Project?\nAims, Proposals.\nFAQ.Free e-Books.\nRecommended books.'
					}
					before={
						<Label className="task-subtasks__label" htmlFor="taskSubtasks">
							Subtasks
						</Label>
					}
					wrap="soft"
				/>
			</div>
			<div className="task-separator">
				<Input
					before={
						<Label htmlFor="taskTitle" className="task-separator__label">
							Separator:
						</Label>
					}
					name="task_separator"
					placeholder="\n"
					className="input input--little task-separator__input "
					id="taskSeparator"
				/>
			</div>
			<div className="task-tags">
			<Input
					before={
						<Label htmlFor="taskTags" className="task-tags__label">
							Tags:
						</Label>
					}
					name="task_tags"
					placeholder="Self-Development, Psychology"
					className="input task-tags__input "
					id="taskTags"
				/>
			</div>
		</>
	);
	return <div className="container">{elementsInsideContainer}</div>;
}

export default App;
