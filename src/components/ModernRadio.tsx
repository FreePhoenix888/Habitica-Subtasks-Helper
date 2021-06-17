import React from 'react';
import { Label } from './Label';
import { Radio } from './Radio';

interface Props {
	children?: JSX.Element;
	containerClassName?: string;
	defaultChecked?: boolean;
	id: string;
	inputClassName?: string;
	isChecked?: boolean;
	labelClassName?: string;
	name: string;
	value: string;
}

export function ModernRadio(props: Props) {
	const {
		id,
		containerClassName,
		labelClassName,
		inputClassName,
		children,
		...rest
	} = props;
	return (
		<div className={`modern-radio ${containerClassName}`}>
			<Label className={`modern-radio__label ${labelClassName}`} htmlFor={id}>
				{children}
				<Radio className={`modern-radio__input ${inputClassName}`} {...rest} />
			</Label>
		</div>
	);
}
