import React, { Fragment, MutableRefObject, useRef } from 'react';
// import { useSpring, animated } from 'react-spring';
import {
	Span,
	Paragraph,
	Anchor,
	Form,
	InputSection,
	Label,
	Input,
	Textarea,
	ModernRadioButton,
	ModernRadioButtonGroup,
	Button,
	InfoButton,
	ModalInfoButton,
	MessageContainer,
	MessageContainerContext,
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
											className="svg star-SVG radio-button-container__svg radio-button-container__star-svg"
										/>
									);
								}

								modernRadioButtons.push(
									<ModernRadioButton
										htmlFor={`taskDifficulty${i + 1}`}
										name="task_difficulty"
										containerClassName="radio-button-container--little task-difficulty__modern-radio-button-container-container"
										radioButtonClassName="task-difficulty-modern-radio-button-container__input"
										labelClassName="task-difficulty-modern-radio-button-container__label"
										labelContentClassName="task-difficulty-modern-radio-button-container-label__content"
										id={`taskDifficulty${i + 1}`}
										value={`${i + 1}`}
									>
										{stars}
									</ModernRadioButton>
								);
							}
							// End: Difficulty Section Radio Buttons
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae
							provident quidem impedit aperiam alias rem neque. Ad cumque
							laboriosam est! Sint saepe inventore, quo nam recusandae ratione
							deleniti tempora.
						</Paragraph>
					</Modal>
				</>
			</MessageContainer>
		</div>
	);
}

export default App;
