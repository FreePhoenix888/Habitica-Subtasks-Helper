import React, {
	ChangeEvent,
	createRef,
	useCallback,
	useContext,
	useMemo,
	useRef,
	useState,
} from 'react';
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
	ModernRadioGroupNameContext,
	CheckedRadioValueContext,
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
import { ReactComponent as StarSVG } from './media/images/icons/star.svg';
import './styles/App.scss';

function TaskDifficultyRadios() {
	const modernRadioButtons: JSX.Element[] = [];

	const checkedRadioValue = useContext(CheckedRadioValueContext);

	const name = useContext(ModernRadioGroupNameContext);

	const addContent = useCallback(() => {
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
					isChecked={Number(checkedRadioValue) === i + 1}
					id={`taskDifficulty${i + 1}`}
					inputClassName="task-difficulty-modern-radio__input"
					key={i}
					className="task-difficulty-modern-radio task-difficulty__modern-radio"
					name={name}
					value={`${i + 1}`}
				>
					<>{stars}</>
				</ModernRadio>
			);
		}
	}, [checkedRadioValue]);
	addContent();

	return (
		<ModernRadioGroupPreservingValue name="difficulty">
			<>{modernRadioButtons}</>
		</ModernRadioGroupPreservingValue>
	);
}

function TaskTypeRadios() {
	const checkedRadioValue = useContext(CheckedRadioValueContext);

	const name = useContext(ModernRadioGroupNameContext);

	return (
		<>
			<ModernRadio
				id="todo"
				// setCheckedRadioValue={setCheckedRadioValue}
				isChecked={checkedRadioValue === 'todo'}
				name={name}
				value="todo"
			>
				<>
					<IconCheckMark />
					<Span>To-do</Span>
				</>
			</ModernRadio>
			<ModernRadio
				id="daily"
				// setCheckedRadioValue={setCheckedRadioValue}
				isChecked={checkedRadioValue === 'daily'}
				name={name}
				value="daily"
			>
				<>
					<IconCheckMark />
					<Span>Daily</Span>
				</>
			</ModernRadio>
			<ModernRadio
				id="habit"
				// setCheckedRadioValue={setCheckedRadioValue}
				isChecked={checkedRadioValue === 'habit'}
				name={name}
				value="habit"
			>
				<>
					<IconCheckMark />
					<Span>Habit</Span>
				</>
			</ModernRadio>
		</>
	);
}

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
					isChecked={isToggleSwitchBlurChecked}
					labelClassName="header__toggle-switch header__toggle-switch-blur"
					name="input_sections_blur"
					onChangeHandler={(event) => {
						const { target } = event;
						const { checked } = target;
						setIsToggleSwitchBlurChecked(checked);
						setlLocalStorageToggleSwitchChecked(checked);
					}}
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

					<InputSection className="task-notes">
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
							className="task-difficulty__modern-radio-group"
							name="difficulty"
						>
							<TaskDifficultyRadios />
						</ModernRadioGroupPreservingValue>
					</InputSection>
					<InputSection className="task-type">
						<Label htmlFor="todo">Type</Label>
						<ModernRadioGroupPreservingValue
							className="task-type__modern-radio-group task-type-modery-radio-group"
							name="type"
						>
							<TaskTypeRadios />
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
						<ButtonSubmit className="task-submit__button-submit">
							Create
						</ButtonSubmit>
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
