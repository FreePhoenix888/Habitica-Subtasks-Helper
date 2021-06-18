import React, { useState } from 'react';
import { Label } from './Label';
import { Radio } from './Radio';
import { setClassName } from '../helpers/setClassName';
import '../styles/components/modernRadio.scss';

interface Props {
	children?: JSX.Element;
	className?: string;
	containerClassName?: string;
	defaultChecked?: boolean;
	id: string;
	inputClassName?: string;
	isChecked?: boolean;
	name: string;
	value: string;
}

export function ModernRadio(props: Props) {
	const { className, inputClassName, children, ...rest } = props;
	const { id, isChecked } = props;

	const [isFocused, setIsFocused] = useState(false);

	return (
		<Label
			onFocusHandler={() => {
				setIsFocused(true);
			}}
			onBlurHandler={() => {
				setIsFocused(false);
			}}
			className={setClassName('modern-radio', className, {
				focus: isFocused,
				checked: isChecked,
			})}
			htmlFor={id}
		>
			{children}
			<Radio
				className={setClassName('modern-radio__input', inputClassName, {
					focus: isFocused,
					checked: isChecked,
				})}
				{...rest}
			/>
		</Label>
	);
}
