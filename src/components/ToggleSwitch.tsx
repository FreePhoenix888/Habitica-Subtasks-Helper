import React, { useState } from 'react';
import { Label } from './Label';
import '../styles/components/toggle-switch.scss';
import { setClassName } from '../helpers';
import { createPortal } from 'react-dom';

interface Props {
	children: JSX.Element;
	childrenParentSelector: string;
	sliderContent?: JSX.Element;
	inputClassName?: string;
	isCheckedByDefault?: boolean;
	labelClassName?: string;
	onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	sliderClassName?: string;
	text?: string;
}

export function ToggleSwitch(props: Props): JSX.Element {
	const {
		children,
		childrenParentSelector,
		sliderContent,
		labelClassName = '',
		sliderClassName = '',
		inputClassName = '',
		text = '',
		isCheckedByDefault = false,
	} = props;

	const [isChecked, changeIsChecked] = useState<boolean>(isCheckedByDefault);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		// Defaul behavior
		const target = event.target as HTMLInputElement;
		changeIsChecked(target.checked);

		// Custom behavior
		const { onChangeHandler } = props;

		if (onChangeHandler) {
			onChangeHandler(event);
		}
	}
	const modifiers = ['checked' as const];
	return (
		<>
			<Label
				className={setClassName(
					['toggle-switch'],
					[labelClassName],
					[isChecked],
					modifiers
				)}
				htmlFor="toggle-switch"
			>
				<div
					className={setClassName(
						['togle-switch-slider', 'togle-switch__slider'],
						[sliderClassName],
						[isChecked],
						modifiers
					)}
				>
					{sliderContent}
				</div>
				<div
					className={setClassName(
						['togle-switch-text', 'togle-switch__text'],
						[sliderClassName]
					)}
				>
					{text}
				</div>

				<input
					className={setClassName(
						['toggle-switch__input'],
						[inputClassName],
						[isChecked],
						modifiers
					)}
					id="toggle-switch"
					type="checkbox"
					onChange={handleChange}
				/>
			</Label>
			{createPortal(children, document.querySelector(childrenParentSelector)!)}
		</>
	);
}
