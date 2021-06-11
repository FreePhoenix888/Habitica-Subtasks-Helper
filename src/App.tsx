import React, { ChangeEvent, createRef, useRef, useState } from 'react';
import {
	Span,
	Paragraph,
	Form,
	InputSection,
	Label,
	Input,
	InputPreservingValue,
	Textarea,
	TextareaPreservingValue,
	ModernRadioButton,
	ModernRadioButtonGroup,
	ModernRadioButtonGroupPreservingValue,
	ModalButtonInfo,
	Modal,
	Header,
	ToggleSwitch,
	IconBlur,
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
					name={'input_sections_blur'}
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
				<Form
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
							name="task_title"
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
							name="task_subtasks"
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
							name="task_separator"
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
							name="task_tags"
							placeholder="Self-Development, Psychology"
						/>
					</InputSection>

					<InputSection className="task-difficulty">
						<Label htmlFor="taskDifficulty1">Difficulty</Label>
						<ModernRadioButtonGroupPreservingValue
							name="task_difficulty"
							groupClassName="task-difficulty__modern-radio-button-group"
						>
							{(function modernRadioButtons() {
								// Difficulty Section Radio Buttons
								const modernRadioButtons: JSX.Element[] = [];

								for (let i = 0; i < 4; i++) {
									const stars: JSX.Element[] = [];
									for (let j = 1; j < i + 2; j++) {
										stars.push(
											<StarSVG
												className="svg star-SVG modern-radio-button__svg modern-radio-button__star-svg"
												key={`${i}:${j}`}
											/>
										);
									}

									modernRadioButtons.push(
										<ModernRadioButton
											htmlFor={`taskDifficulty${i + 1}`}
											id={`taskDifficulty${i + 1}`}
											inputClassName="task-difficulty-modern-radio-button__input"
											key={i}
											labelClassName="task-difficulty-modern-radio-button__label"
											radioButtonClassName="radio-button-container--little task-difficulty__modern-radio-button-container"
											value={`${i + 1}`}
										>
											{stars}
										</ModernRadioButton>
									);
								}
								return modernRadioButtons;
							})()}
						</ModernRadioButtonGroupPreservingValue>
					</InputSection>
					<InputSection className="input-section task-notes">
						<Label className="task-notes__label" htmlFor="taskNotes">
							Notes
						</Label>
						<TextareaPreservingValue
							className="textarea task-notes__textarea"
							id="taskNotes"
							name="task_notes"
							placeholder="Read it without any prejudices as any new ideas."
							wrap="soft"
						/>
					</InputSection>
					<InputSection className="input-section task-amount">
						<Label className="task-amount__label" htmlFor="taskSeparator">
							<Span>Amount</Span>
						</Label>
						<InputPreservingValue
							className="input--little task-amount__input "
							id="taskAmount"
							name="task_amount"
							placeholder="\n"
							autoSize
						/>
					</InputSection>
				</Form>
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
