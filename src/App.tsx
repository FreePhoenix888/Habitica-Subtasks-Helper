import React, { Fragment, useContext, useRef } from 'react';
// import { useSpring, animated } from 'react-spring';
import {
	Paragraph,
	Anchor,
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
} from './components';
import { ReactComponent as StarSVG } from './media/images/star.svg';
import './styles/App.scss';

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
						<>
							<Label htmlFor="taskAmount" className="task-separator__label">
								<Paragraph>Separator</Paragraph>
								<MessageContainer>
									<MessageContainerContext.Consumer>
										{({ isOpen, setIsOpen }) => {
											function infoButtonOnClick(
												event: React.MouseEvent<HTMLElement>
											) {
												setIsOpen(true);
												ModalContainer.lockBodyOverflow();
											}

											function modalContainerOnClick(
												event: React.MouseEvent<HTMLElement>
											) {
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
													event.key === 'ArrowRight' ||
													event.key === 'ArrowDown' ||
													event.key === 'ArrowLeft'
												) {
													return;
												}
												const target = event.target as HTMLElement;

												if (target.className.includes('modal-container')) {
													setIsOpen(false);
												}
											}

											function modalContainerOnUseEffectHandler() {
												ModalContainer.lockBodyOverflow();
											}

											const modalOnAfterUseEffectHandler =
												ModalContainer.unlockBodyOverflow;

											return (
												<>
													<InfoButton onClickHandler={infoButtonOnClick} />
													<ModalContainer
														isOpen={isOpen}
														onClickHandler={modalContainerOnClick}
														onKeyDownHandler={modalContainerOnKeyDown}
													>
														<Modal
															onUseEffectHandler={
																modalContainerOnUseEffectHandler
															}
															onAfterUseEffectHandler={
																modalOnAfterUseEffectHandler
															}
														>
															<Paragraph>
																{`You can use any symbols or regular expression to break your subtasks into parts.

												Example:
												Brush teeth, Take a bath, Training, Learning with comma separator will lead to this result:
												🞄Brush teeth
												🞄Take a bath
												🞄Training
												🞄Learning`}
															</Paragraph>
														</Modal>
													</ModalContainer>
												</>
											);
										}}
									</MessageContainerContext.Consumer>
								</MessageContainer>
							</Label>
						</>
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
									containerClassName="radio-button-container--little task-difficulty__radio-button-container"
									radioButtonClassName="task-difficulty__input"
									labelClassName="task-difficulty__label"
									labelContentClassName="task-difficulty-label__content"
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
			<div className="task-amount">

				<Input
					before={
						<>
							<Label htmlFor="taskSeparator" className="task-amount__label">
								<Paragraph>Amount</Paragraph>
								<MessageContainer>
									<MessageContainerContext.Consumer>
										{({ isOpen, setIsOpen }) => {
											function infoButtonOnClick(
												event: React.MouseEvent<HTMLElement>
											) {
												setIsOpen(true);
												ModalContainer.lockBodyOverflow();
											}

											function modalContainerOnClick(
												event: React.MouseEvent<HTMLElement>
											) {
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
													event.key === 'ArrowRight' ||
													event.key === 'ArrowDown' ||
													event.key === 'ArrowLeft'
												) {
													return;
												}
												const target = event.target as HTMLElement;

												if (target.className.includes('modal-container')) {
													setIsOpen(false);
												}
											}

											function modalContainerOnUseEffectHandler() {
												ModalContainer.focusContainer();
											}
											return (
												<>
													<InfoButton onClickHandler={infoButtonOnClick} />
													<ModalContainer
														isOpen={isOpen}
														onClickHandler={modalContainerOnClick}

													>
														<Modal >
															<Paragraph>
																You can create a lot of tasks with the same
																name.
															</Paragraph>
														</Modal>
													</ModalContainer>
												</>
											);
										}}
									</MessageContainerContext.Consumer>
								</MessageContainer>
							</Label>
						</>
					}
					name="task_amount"
					placeholder="\n"
					className="input--little task-amount__input "
					id="taskAmount"
					autoSize
				/>
			</div>
		</div>
	);
}

export default App;
