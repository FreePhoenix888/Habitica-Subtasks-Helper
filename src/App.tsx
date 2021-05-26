import React, { Fragment } from 'react';
// import { useSpring, animated } from 'react-spring';
import { Label, Input, Textarea, ModernRadioButton } from './components';
import {ReactComponent as StarSVG} from './media/images/star.svg'
import './styles/App.scss';

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
			<div className="task-difficulty">
				<ModernRadioButton
					before={
						<Label htmlFor="taskDifficulty" className="task-difficulty__label">
							<StarSVG/>
						</Label>
					}
					name="task_difficulty"
					className="task-difficulty__input"
					id="taskDifficulty"
					value="1"
				/>
			</div>
		</>
	);
	return <div className="container">{elementsInsideContainer}</div>;
}

export default App;