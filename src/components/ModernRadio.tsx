import React, {
	ChangeEvent,
	createRef,
	Dispatch,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Label } from './Label';
import { Radio } from './Radio';
import { setClassName } from '../helpers';
import '../styles/components/modernRadio.scss';

interface Props {
	children: JSX.Element | JSX.Element[] | string;
	htmlFor: string;
	id?: string;
	inputClassName?: string;
	isChecked: boolean;
	labelClassName?: string;
	name: string;
	radioButtonClassName?: string;
	setCheckedRadioValue: Dispatch<ChangeEvent<HTMLInputElement>>;
	value: string;
}

export function ModernRadio(props: Props): JSX.Element {
	const {
		children,
		radioButtonClassName = '',
		labelClassName = '',
		inputClassName = '',
		htmlFor,
		id = '',
		value,
		isChecked,
		setCheckedRadioValue,
		name = '',
	} = props;

	const radioRef = createRef<HTMLInputElement>();

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		if (setCheckedRadioValue) {
			setCheckedRadioValue(event);
		}
	}

	const classNameModifiers = {
		checked: isChecked,
	};
	return (
		<div
			className={setClassName(
				'modern-radio',
				radioButtonClassName,
				classNameModifiers
			)}
		>
			<Label
				className={setClassName(
					'modern-radio__label',
					labelClassName,
					classNameModifiers
				)}
				htmlFor={htmlFor}
			>
				{children}
			</Label>
			<Radio
				className={setClassName(
					'modern-radio__input',
					inputClassName,
					classNameModifiers
				)}
				forwardedRef={radioRef}
				id={id}
				name={name}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
}
