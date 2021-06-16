import React, { ChangeEvent, createContext, useState } from 'react';
import '../styles/components/modernRadioGroup.scss';

interface CheckedRadioContextType {
	checkedRadioValue: string;
	setCheckedRadioValue:
		| ((event: ChangeEvent<HTMLInputElement>) => void)
		| undefined;
}

export const CheckedRadioValueContext = createContext<CheckedRadioContextType>({
	checkedRadioValue: '',
	setCheckedRadioValue: undefined,
});

interface Props {
	children: JSX.Element | JSX.Element[];
	className?: string;
	defaultCheckedValue?: string;
	name: string;
	onChangeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const NameContext = createContext<string>('');
export function ModernRadioGroup(props: Props): JSX.Element {
	const { name, children, className = '', defaultCheckedValue = '' } = props;
	const [checkedRadioValue, setCheckedRadioValue] =
		useState<string>(defaultCheckedValue);

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const { target } = event;
		const { value } = target;
		// Default behavior
		setCheckedRadioValue(value);

		// Custom behavior
		const { onChangeHandler } = props;
		if (onChangeHandler) {
			onChangeHandler(event);
		}
	}

	const CheckedInputContextValue: CheckedRadioContextType = {
		checkedRadioValue,
		setCheckedRadioValue: handleChange,
	};

	return (
		<div className={`modern-radio-group ${className}`}>
			<NameContext.Provider value={name}>
				<CheckedRadioValueContext.Provider value={CheckedInputContextValue}>
					{children}
				</CheckedRadioValueContext.Provider>
			</NameContext.Provider>
		</div>
	);
}
