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
	ToggleSwitchBlur,
	Toast,
} from './components';
import { IconCheck } from './iconComponents';
import { IconWarning } from './components/icons/IconWarning';
import { useLocalStorage } from './helpers';
import { ReactComponent as StarSVG } from './media/images/icons/star.svg';
import './styles/App.scss';

function TaskPriorityRadios() {
	const modernRadioButtons: JSX.Element[] = [];

	const checkedRadioValue = useContext(CheckedRadioValueContext);

	const name = useContext(ModernRadioGroupNameContext);

	return (
		<>
			<ModernRadio
				isChecked={Number(checkedRadioValue) === 0.1}
				id="priority0.1"
				inputClassName="priority-modern-radio__input"
				className="priority-modern-radio priority__modern-radio"
				name={name}
				value="0.1"
			>
				<>
					<StarSVG className="svg star-SVG modern-radio__svg modern-radio__star-svg" />
				</>
			</ModernRadio>
			<ModernRadio
				isChecked={Number(checkedRadioValue) === 1}
				id="priority1"
				inputClassName="priority-modern-radio__input"
				className="priority-modern-radio priority__modern-radio"
				name={name}
				value="1"
			>
				<>
					<StarSVG className="svg star-SVG modern-radio__svg modern-radio__star-svg" />
					<StarSVG className="svg star-SVG modern-radio__svg modern-radio__star-svg" />
				</>
			</ModernRadio>
			<ModernRadio
				isChecked={Number(checkedRadioValue) === 1.5}
				id="priority1.5"
				inputClassName="priority-modern-radio__input"
				className="priority-modern-radio priority__modern-radio"
				name={name}
				value="1.5"
			>
				<>
					<StarSVG className="svg star-SVG modern-radio__svg modern-radio__star-svg" />
					<StarSVG className="svg star-SVG modern-radio__svg modern-radio__star-svg" />
					<StarSVG className="svg star-SVG modern-radio__svg modern-radio__star-svg" />
				</>
			</ModernRadio>
			<ModernRadio
				isChecked={Number(checkedRadioValue) === 2}
				id="priority2"
				inputClassName="priority-modern-radio__input"
				className="priority-modern-radio priority__modern-radio"
				name={name}
				value="2"
			>
				<>
					<StarSVG className="svg star-SVG modern-radio__svg modern-radio__star-svg" />
					<StarSVG className="svg star-SVG modern-radio__svg modern-radio__star-svg" />
					<StarSVG className="svg star-SVG modern-radio__svg modern-radio__star-svg" />
					<StarSVG className="svg star-SVG modern-radio__svg modern-radio__star-svg" />
				</>
			</ModernRadio>
		</>
	);
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
					<IconCheck />
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
					<IconCheck />
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
					<IconCheck />
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

	const [submitResult, setSubmitResult] = useState<number>(-1);

	return (
		<>
			<Toast type={Toast.Type.SUCCESS} position={Toast.Position.BOTTOM_LEFT} title="Success!" text="Task is added." />
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
					setSubmitResult={setSubmitResult}
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
						<div className="label-section">
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
					<InputSection className="priority">
						<Label htmlFor="priority1">Difficulty</Label>
						<ModernRadioGroupPreservingValue
							className="priority__modern-radio-group"
							name="priority"
						>
							<TaskPriorityRadios />
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
					<InputSection>
						<Label htmlFor="userId">
							<Span>User ID</Span>
						</Label>
						<InputPreservingValue name="user_id" id="userId" />
					</InputSection>
					<InputSection>
						<Label htmlFor="APIToken">
							<Span>API Token:</Span>
						</Label>
						<InputPreservingValue name="API_token" id="APIToken" />
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
