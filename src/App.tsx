import React, { Fragment, useContext, useRef } from 'react';
// import { useSpring, animated } from 'react-spring';
import {
	Span,
	Paragraph,
	Anchor,
	Form,
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
			<Form action="#" className="task-form">
				<div className="input-section task-title">
					<Label htmlFor="taskTitle" className="task-title__label">
						Title
					</Label>
					<Input
						name="task_title"
						placeholder="The Venus Project Conception."
						className="task-title__input"
						id="taskTitle"
					/>
				</div>
				<div className="input-section task-subtasks">
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
				</div>
				<div className="input-section task-separator">
					<Input
						before={
							<>
								<Label htmlFor="taskAmount" className="task-separator__label">
									<Span>Separator</Span>
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
				<div className="input-section task-tags">
					<Label htmlFor="taskTags" className="task-tags__label">
						Tags
					</Label>
					<Input
						name="task_tags"
						placeholder="Self-Development, Psychology"
						className="task-tags__input "
						id="taskTags"
					/>
				</div>
				<div className="input-section task-difficulty">
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
				</div>
				<div className="input-section task-notes">
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
				<div className="input-section task-amount">
					<Label htmlFor="taskSeparator" className="task-amount__label">
						<Span>Amount</Span>
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
												<Modal>
													<Paragraph>
														You can create a lot of tasks with the same name.
													</Paragraph>
												</Modal>
											</ModalContainer>
										</>
									);
								}}
							</MessageContainerContext.Consumer>
						</MessageContainer>
					</Label>
					<Input
						name="task_amount"
						placeholder="\n"
						className="input--little task-amount__input "
						id="taskAmount"
						autoSize
					/>
				</div>
			</Form>
		</div>
	);
}

export default App;
