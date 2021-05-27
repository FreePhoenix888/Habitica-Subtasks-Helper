import React, { Fragment } from 'react';
// import { useSpring, animated } from 'react-spring';
import { Label, Input, Textarea, ModernRadioButton } from './components';
import { ReactComponent as StarSVG } from './media/images/star.svg';
import './styles/App.scss';

const difficultySection: JSX.Element[] = [];

for (let i = 0; i < 4; i++) {
	const stars: JSX.Element[] = [];
	for (let j = 1; j < i+2; j++) {
		stars.push(
			<StarSVG key={`${i}:${j}`} className="svg star-SVG radio-button-container__svg radio-button-container__star-svg" />
		);
	}

	difficultySection.push(
		<ModernRadioButton
			before={
				<Label htmlFor={`taskDifficulty${i+1}`} className="task-difficulty__label">
					{stars}
				</Label>
			}
			name="task_difficulty"
			containerClassName="radio-button-container--little task-difficulty__radio-button-container"
			radioButtonClassName="task-difficulty__input"
			id={`taskDifficulty${i+1}`}
			value={`${i+1}`}
		/>
	);
}

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
					className="input--little task-separator__input "
					id="taskSeparator"
					autoSize
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
					className="task-tags__input "
					id="taskTags"
				/>
			</div>
			<div className="task-difficulty">{difficultySection}</div>
		</>
	);
	return <div className="container">{elementsInsideContainer}</div>;
}

export default App;
