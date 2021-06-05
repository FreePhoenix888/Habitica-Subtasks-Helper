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
} from './components';
import { ReactComponent as StarSVG } from './media/images/star.svg';
import './styles/App.scss';

function App(): JSX.Element {
	return (
		<div className="container">
			<h1>Habitica Subtasks Helper</h1>
			<Form action="#" className="task-form">
				<InputSection className="task-title">
					<Label htmlFor="taskTitle" className="task-title__label">
						Title
					</Label>
					<Input
						name="task_title"
						placeholder="The Venus Project Conception."
						className="task-title__input"
						id="taskTitle"
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
					<Label htmlFor="taskSeparator" className="task-separator__label">
						<Span>Separator</Span>
					</Label>

					<Input
						name="task_separator"
						placeholder="\n"
						className="input--little task-separator__input "
						id="taskSeparator"
						autoSize
					/>
				</InputSection>

				<InputSection className="task-tags">
					<Label htmlFor="taskTags" className="task-tags__label">
						Tags
					</Label>
					<Input
						name="task_tags"
						placeholder="Self-Development, Psychology"
						className="task-tags__input "
						id="taskTags"
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
											key={`${i}:${j}`}
											className="svg star-SVG modern-radio-button__svg modern-radio-button__star-svg"
										/>
									);
								}

								modernRadioButtons.push(
									<ModernRadioButton
										htmlFor={`taskDifficulty${i + 1}`}
										name="task_difficulty"
										containerClassName="radio-button-container--little task-difficulty__modern-radio-button-container"
										radioButtonClassName="task-difficulty-modern-radio-button__input"
										labelClassName="task-difficulty-modern-radio-button__label"
										id={`taskDifficulty${i + 1}`}
										value={`${i + 1}`}
										key={i}
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
					<Label htmlFor="taskSeparator" className="task-amount__label">
						<Span>Amount</Span>
					</Label>
					<Input
						name="task_amount"
						placeholder="\n"
						className="input--little task-amount__input "
						id="taskAmount"
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
	);
}

export default App;
