import React, { ChangeEvent, createRef, useRef, useState } from 'react';
import {
	ButtonSubmit,
	Span,
	Paragraph,
	Form,
	InputSection,
	Label,
	Input,
	InputPreservingValue,
	Textarea,
	TextareaPreservingValue,
	ModernRadio,
	ModernRadioGroupPreservingValue,
	ModalButtonInfo,
	Modal,
	Header,
	ToggleSwitch,
	TaskForm,
	FormDataContext,
	IconBlur,
	IconCheckMark,
	ToggleSwitchBlur,
} from './components';
import { useLocalStorage } from './helpers';
import { ReactComponent as StarSVG } from './media/images/star_icon.svg';
import './styles/App.scss';

function App(): JSX.Element {
	const [localStorageToggleSwitchChecked, setlLocalStorageToggleSwitchChecked] =
		useLocalStorage<boolean>('input_sections_blur', true);

	const [isToggleSwitchBlurChecked, setIsToggleSwitchBlurChecked] =
		useState<boolean>(localStorageToggleSwitchChecked);

	const [isSeparatorModalOpen, setIsSeparatorModalOpen] = useState(false);

	return (
		<>
			<Header>
				<ToggleSwitchBlur
					name="input_sections_blur"
					onChangeHandler={(event) => {
						const { target } = event;
						const { checked } = target;
						setIsToggleSwitchBlurChecked(checked);
						setlLocalStorageToggleSwitchChecked(checked);
					}}
					isChecked={isToggleSwitchBlurChecked}
					labelClassName="header__toggle-switch header__toggle-switch-blur"
				/>
			</Header>
			<div className="container">
				<h1>Habitica Subtasks Helper</h1>
				<TaskForm
					action="#"
					className="task-form"
					isBlurOn={isToggleSwitchBlurChecked}
				>
					<InputSection className="task-title">
						<Label className="task-title__label" htmlFor="taskTitle">
							Title
						</Label>
						<InputPreservingValue
							className="task-title__input"
							id="taskTitle"
							name="title"
							placeholder="The Venus Project Conception."
						/>
					</InputSection>

					<InputSection className="task-subtasks">
						<Label className="task-subtasks__label" htmlFor="taskSubtasks">
							Subtasks
						</Label>
						<TextareaPreservingValue
							className="textarea task-subtasks__textarea"
							id="taskSubtasks"
							name="subtasks"
							placeholder={`What is the Venus Project?
								Aims, Proposals.
								FAQ.
								Free e-Books.
								Recommended books.`}
							wrap="soft"
						/>
					</InputSection>

					<InputSection className="task-separator">
						<div className="label-section label__section">
							<Label className="task-separator__label" htmlFor="taskSeparator">
								<Span>Separator</Span>
							</Label>
							<ModalButtonInfo
								className="task-separator__modal"
								setIsOpen={setIsSeparatorModalOpen}
							/>
						</div>

						<InputPreservingValue
							className="input--little task-separator__input "
							id="taskSeparator"
							name="separator"
							placeholder="\n"
							autoSize
						/>
					</InputSection>

					<InputSection className="task-tags">
						<Label className="task-tags__label" htmlFor="taskTags">
							Tags
						</Label>
						<InputPreservingValue
							className="task-tags__input "
							id="taskTags"
							name="tags"
							placeholder="Self-Development, Psychology"
						/>
					</InputSection>

					<InputSection className=" task-notes">
						<Label className="task-notes__label" htmlFor="taskNotes">
							Notes
						</Label>
						<TextareaPreservingValue
							className="textarea task-notes__textarea"
							id="taskNotes"
							name="notes"
							placeholder="Read it without any prejudices as any new ideas."
							wrap="soft"
						/>
					</InputSection>
					<InputSection className="task-difficulty">
						<Label htmlFor="taskDifficulty1">Difficulty</Label>
						<ModernRadioGroupPreservingValue
							name="difficulty"
							className="task-difficulty__modern-radio-group"
						>
							{(() => {
								// Difficulty Section Radio Buttons
								const modernRadioButtons: JSX.Element[] = [];

								for (let i = 0; i < 4; i++) {
									const stars: JSX.Element[] = [];
									for (let j = 1; j < i + 2; j++) {
										stars.push(
											<StarSVG
												className="svg star-SVG modern-radio__svg modern-radio__star-svg"
												key={`${i}:${j}`}
											/>
										);
									}

									modernRadioButtons.push(
										<ModernRadio
											htmlFor={`taskDifficulty${i + 1}`}
											id={`taskDifficulty${i + 1}`}
											inputClassName="task-difficulty-modern-radio__input"
											key={i}
											labelClassName="task-difficulty-modern-radio__label"
											radioButtonClassName="radio-container--little task-difficulty__modern-radio-container"
											value={`${i + 1}`}
										>
											{stars}
										</ModernRadio>
									);
								}

								return modernRadioButtons;
							})()}
						</ModernRadioGroupPreservingValue>
					</InputSection>
					<InputSection>
						<Label htmlFor="todo">Type</Label>
						<ModernRadioGroupPreservingValue
							name="type"
							className="task-type__modern-radio-group task-type-modery-radio-group"
						>
							<ModernRadio value="todo" htmlFor="todo" id="todo">
								<IconCheckMark />
								<Span>To-do</Span>
							</ModernRadio>
							<ModernRadio value="daily" htmlFor="daily" id="daily">
								<IconCheckMark />
								<Span>Daily</Span>
							</ModernRadio>
							<ModernRadio value="habit" htmlFor="habit" id="habit">
								<IconCheckMark />
								<Span>Habit</Span>
							</ModernRadio>
						</ModernRadioGroupPreservingValue>
					</InputSection>
					<InputSection className="task-amount">
						<Label className="task-amount__label" htmlFor="taskSeparator">
							<Span>Amount</Span>
						</Label>
						<InputPreservingValue
							className="input--little task-amount__input "
							id="taskAmount"
							name="amount"
							placeholder="\n"
							autoSize
						/>
					</InputSection>
					<InputSection className="task-submit">
						<ButtonSubmit>Create</ButtonSubmit>
					</InputSection>
				</TaskForm>
			</div>
			<Modal
				className="task-separator__modal"
				isOpen={isSeparatorModalOpen}
				setIsOpen={setIsSeparatorModalOpen}
			>
				<Paragraph className="modal__paragraph">
					{`You can use any symbols or regular expression to break your text into parts.

					Example:
					Brush teeth, Take a bath, Training, Learning with separator , will lead to this result:
					🞄Brush teeth
					🞄Take a bath
					🞄Training
					🞄Learning`}
				</Paragraph>
			</Modal>
		</>
	);
}

export default App;
