import React, {
	ChangeEvent,
	createContext,
	Dispatch,
	SetStateAction,
	useState,
} from 'react';

interface CheckedRadioContextType {
	checkedRadioValue: string;
	setCheckedRadioValue:
		| ((event: ChangeEvent<HTMLInputElement>) => void)
		| undefined;
}

export const CheckedRadioContext = createContext<CheckedRadioContextType>({
	checkedRadioValue: '',
	setCheckedRadioValue: undefined,
});

interface Props {
	children: JSX.Element | JSX.Element[];
	defaultCheckedValue?: string;
	groupClassName?: string;
	name: string;
	onChangeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const NameContext = createContext<string>('');
export function ModernRadioButtonGroup(props: Props): JSX.Element {
	const {
		name,
		children,
		groupClassName = '',
		defaultCheckedValue = '',
	} = props;
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
		<div className={`modern-radio-button-group ${groupClassName}`}>
			<NameContext.Provider value={name}>
				<CheckedRadioContext.Provider value={CheckedInputContextValue}>
					{children}
				</CheckedRadioContext.Provider>
			</NameContext.Provider>
		</div>
	);
}
