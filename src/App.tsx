import React, { Fragment, useContext, useRef } from 'react';
// import { useSpring, animated } from 'react-spring';
import {
	Label,
	Input,
	Textarea,
	ModernRadioButton,
	ModernRadioButtonGroup,
	InfoButton,
	MessageContainer,
	MessageContainerContext,
	ModalContainer,
	Modal,
	Paragraph,
} from './components';
import { ReactComponent as StarSVG } from './media/images/star.svg';
import './styles/App.scss';

function App(): JSX.Element {
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
				before={
					<Label
						htmlFor={`taskDifficulty${i + 1}`}
						className="task-difficulty__label modern-radio-button-container__label"
					>
						{stars}
					</Label>
				}
				name="task_difficulty"
				containerClassName="radio-button-container--little task-difficulty__radio-button-container"
				radioButtonClassName="task-difficulty__input"
				id={`taskDifficulty${i + 1}`}
				value={`${i + 1}`}
			/>
		);
	}
	// End: Difficulty Section Radio Buttons

	// Separator Info Button

	const message = (
		<MessageContainer>
			<MessageContainerContext.Consumer>
				{({ isOpen, setIsOpen }) => {
					function infoButtonOnClick(event: React.MouseEvent<HTMLElement>) {
						setIsOpen(true);
						ModalContainer.switchBodyOverflow();
					}

					function modalContainerOnClick(event: React.MouseEvent<HTMLElement>) {
						const target = event.target as HTMLElement;
						if (target.className.includes('modal-container')) {
							setIsOpen(false);
						}
					}
					function modalContainerOnKeyDown(
						event: React.KeyboardEvent<HTMLElement>
					) {
						if (
							event.ctrlKey ||
							event.metaKey ||
							event.shiftKey ||
							event.key === 'ArrowUp' ||
							'ArrowRight' ||
							'ArrowDown' ||
							'ArrowLeft'
						) {
							return;
						}
						const target = event.target as HTMLElement;
						if (target.className.includes('modal-container')) {
							setIsOpen(false);
						}
					}
					return (
						<>
							<InfoButton onClick={infoButtonOnClick} />
							<ModalContainer
								isOpen={isOpen}
								onClick={modalContainerOnClick}
								onKeyDown={modalContainerOnKeyDown}
							>
								<Modal>
									<Paragraph>
										{`You can use any symbol/symbols to break your text into parts.

Example:
Brush teeth, Take a bath, Training, Learning with comma separator will lead to this result:
🞄Brush teeth
🞄Take a bath
🞄Training
🞄Learning

Cheatsheet`}
									</Paragraph>
								</Modal>
							</ModalContainer>
						</>
					);
				}}
			</MessageContainerContext.Consumer>
		</MessageContainer>
	);

	// End: Separator Info Button

	return (
		<div className="container">
			<h1>Habitica Subtasks Helper</h1>
			<div className="task-title">
				<Input
					before={
						<Label htmlFor="taskTitle" className="task-title__label">
							Title
						</Label>
					}
					name="task_title"
					placeholder="The Venus Project Conception."
					className="task-title__input"
					id="taskTitle"
				/>
			</div>
			<div className="task-subtasks">
				<Textarea
					className="textarea task-subtasks__textarea"
					id="taskSubtasks"
					name="task_subtasks"
					placeholder={
						'What is the Venus Project?\nAims, Proposals.\nFAQ.\nFree e-Books.\nRecommended books.'
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
						<Label htmlFor="taskSeparator" className="task-separator__label">
							Separator
						</Label>
					}
					name="task_separator"
					placeholder="\n"
					className="input--little task-separator__input "
					id="taskSeparator"
					autoSize
				/>
			</div>
			<div className="task-tags">
				<Input
					before={
						<Label htmlFor="taskTags" className="task-tags__label">
							Tags
						</Label>
					}
					name="task_tags"
					placeholder="Self-Development, Psychology"
					className="task-tags__input "
					id="taskTags"
				/>
			</div>
			<div className="task-difficulty">
				<Label htmlFor="taskDifficulty1">Difficulty</Label>
				<ModernRadioButtonGroup groupClassName="task-difficulty__modern-radio-button-group">
					{modernRadioButtons}
				</ModernRadioButtonGroup>
			</div>
			<div className="task-notes">
				<Textarea
					className="textarea task-notes__textarea"
					id="taskNotes"
					name="task_notes"
					placeholder="Read it without any prejudices as any new ideas."
					before={
						<Label className="task-notes__label" htmlFor="taskNotes">
							Notes
						</Label>
					}
					wrap="soft"
				/>
			</div>

			<div>{message}</div>
		</div>
	);
}

export default App;
