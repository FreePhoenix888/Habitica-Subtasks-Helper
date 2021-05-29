import React, { Fragment } from 'react';
// import { useSpring, animated } from 'react-spring';
import {
	Label,
	Input,
	Textarea,
	ModernRadioButton,
	ModernRadioButtonGroup,
	InfoButton,
	Message,
	RenderMessageParameterType,
	Modal,
	Paragraph,
} from './components';
import { ReactComponent as StarSVG } from './media/images/star.svg';
import './styles/App.scss';

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
					className="task-difficulty__label"
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

function App(): JSX.Element {
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

			<div>
				<Message
					renderMessage={({ isOpen, setIsOpen }) => {
						const modalContainerOnClick = (
							event: React.MouseEvent<HTMLElement>
						) => {
							const target = event.target as Element;
							if (target.className.includes('modal-container')) {
								setIsOpen(false);
							}
						};
						const modalContainerOnKeyDown = (
							event: React.KeyboardEvent<HTMLElement>
						) => {
							setIsOpen(false);
						};
						if (isOpen) {
							return (
								<Modal
									containerOnClick={modalContainerOnClick}
									containerOnKeyDown={modalContainerOnKeyDown}
								>
									<Paragraph>Hello my dear friend</Paragraph>
								</Modal>
							);
						}
						return <Paragraph> </Paragraph>;
					}}
					renderButton={(setIsOpen) => (
						<InfoButton
							onClick={(event) => {
								setIsOpen(true);
							}}
						/>
					)}
				/>
			</div>
		</div>
	);
}

export default App;
