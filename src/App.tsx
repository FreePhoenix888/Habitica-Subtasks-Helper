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
				inputClassName="difficulty-modern-radio__input"
				key={i}
				className="difficulty-modern-radio difficulty__modern-radio"
				name={name}
				value={`${i + 1}`}
			>
				<>{stars}</>
			</ModernRadio>
		);
	}

	return <>{modernRadioButtons}</>;
}

function TaskTypeRadios() {
	const checkedRadioValue = useContext(CheckedRadioValueContext);

	const name = useContext(ModernRadioGroupNameContext);

	return (
		<>
			<ModernRadio
				className="type-radio type__radio"
				id="todo"
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
				className="type-radio type__radio"
				id="daily"
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
				className="type-radio type__radio"
				id="habit"
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
					className="form"
					isBlurOn={isToggleSwitchBlurChecked}
				>
					<InputSection className="title">
						<Label className="title__label" htmlFor="title">
							Title
						</Label>
						<InputPreservingValue
							className="title__input"
							id="title"
							name="title"
							placeholder="The Venus Project Conception."
						/>
					</InputSection>

					<InputSection className="subtasks">
						<Label className="subtasks__label" htmlFor="subtasks">
							Subtasks
						</Label>
						<TextareaPreservingValue
							className="textarea subtasks__textarea"
							id="subtasks"
							name="subtasks"
							placeholder={`What is the Venus Project?
								Aims, Proposals.
								FAQ.
								Free e-Books.
								Recommended books.`}
							wrap="soft"
						/>
					</InputSection>

					<InputSection className="separator">
						<div className="label-section label__section">
							<Label className="separator__label" htmlFor="separator">
								<Span>Separator</Span>
							</Label>
							<ModalButtonInfo
								className="separator__modal"
								setIsOpen={setIsSeparatorModalOpen}
							/>
						</div>

						<InputPreservingValue
							className="input--little separator__input "
							id="separator"
							name="separator"
							placeholder="\n"
							autoSize
						/>
					</InputSection>

					<InputSection className="tags">
						<Label className="tags__label" htmlFor="tags">
							Tags
						</Label>
						<InputPreservingValue
							className="tags__input "
							id="tags"
							name="tags"
							placeholder="Self-Development, Psychology"
						/>
					</InputSection>

					<InputSection className="notes">
						<Label className="notes__label" htmlFor="notes">
							Notes
						</Label>
						<TextareaPreservingValue
							className="textarea notes__textarea"
							id="notes"
							name="notes"
							placeholder="Read it without any prejudices as any new ideas."
							wrap="soft"
						/>
					</InputSection>
					<InputSection className="difficulty">
						<Label htmlFor="difficulty1">Difficulty</Label>
						<ModernRadioGroupPreservingValue
							className="difficulty__modern-radio-group"
							name="difficulty"
						>
							<TaskDifficultyRadios />
						</ModernRadioGroupPreservingValue>
					</InputSection>
					<InputSection className="type">
						<Label htmlFor="todo">Type</Label>
						<ModernRadioGroupPreservingValue
							className="type__modern-radio-group type-modery-radio-group"
							name="type"
						>
							<TaskTypeRadios />
						</ModernRadioGroupPreservingValue>
					</InputSection>
					<InputSection className="amount">
						<Label className="amount__label" htmlFor="separator">
							<Span>Amount</Span>
						</Label>
						<InputPreservingValue
							className="input--little amount__input "
							id="amount"
							name="amount"
							placeholder="1"
							autoSize
						/>
					</InputSection>
					<InputSection className="submit">
						<ButtonSubmit className="submit__button-submit">
							Create
						</ButtonSubmit>
					</InputSection>
				</TaskForm>
			</div>
			<Modal
				className="separator__modal"
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
