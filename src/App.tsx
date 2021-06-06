import React from 'react';
import {
	Span,
	Paragraph,
	Form,
	InputSection,
	Label,
	Input,
	Textarea,
	ModernRadioButton,
	ModernRadioButtonGroup,
	ModalInfoButton,
	MessageContainer,
	Modal,
	Header,
	ToggleSwitch,
	BlurIcon,
} from './components';
import { ReactComponent as StarSVG } from './media/images/star_icon.svg';
import './styles/App.scss';

function App(): JSX.Element {
	return (
		<>
			<ToggleSwitch>
				<BlurIcon />
			</ToggleSwitch>
			<Header />
			<div className="container">
				<h1>Habitica Subtasks Helper</h1>
				<Form action="#" className="task-form">
					<InputSection className="task-title">
						<Label className="task-title__label" htmlFor="taskTitle">
							Title
						</Label>
						<Input
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
						<Textarea
							className="textarea task-subtasks__textarea"
							id="taskSubtasks"
							name="task_subtasks"
							placeholder={
								'What is the Venus Project?\nAims, Proposals.\nFAQ.\nFree e-Books.\nRecommended books.'
							}
							wrap="soft"
						/>
					</InputSection>

					<InputSection className="task-separator">
						<Label className="task-separator__label" htmlFor="taskSeparator">
							<Span>Separator</Span>
						</Label>

						<Input
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
						<Input
							className="task-tags__input "
							id="taskTags"
							name="task_tags"
							placeholder="Self-Development, Psychology"
						/>
					</InputSection>

					<InputSection className="task-difficulty">
						<Label htmlFor="taskDifficulty1">Difficulty</Label>
						<ModernRadioButtonGroup groupClassName="task-difficulty__modern-radio-button-group">
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
											name="task_difficulty"
											radioButtonClassName="radio-button-container--little task-difficulty__modern-radio-button-container"
											value={`${i + 1}`}
										>
											{stars}
										</ModernRadioButton>
									);
								}
								return modernRadioButtons;
							})()}
						</ModernRadioButtonGroup>
					</InputSection>
					<InputSection className="input-section task-notes">
						<Label className="task-notes__label" htmlFor="taskNotes">
							Notes
						</Label>
						<Textarea
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
						<Input
							className="input--little task-amount__input "
							id="taskAmount"
							name="task_amount"
							placeholder="\n"
							autoSize
						/>
					</InputSection>
				</Form>
				<MessageContainer>
					<>
						<ModalInfoButton />

						<Modal>
							<Paragraph>
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
				</MessageContainer>
			</div>
		</>
	);
}

export default App;
