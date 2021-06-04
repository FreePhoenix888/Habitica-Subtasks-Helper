import React, { useState } from 'react';

type CheckedInputContextType = {
	inputChangeEvent: InputChangeEventType;
	handleChange: (value: InputChangeEventType) => void;
};
export const CheckedInputContext = React.createContext<CheckedInputContextType>(
	{ inputChangeEvent: undefined, handleChange: () => {} }
);

interface Props {
	children: JSX.Element | JSX.Element[];
	groupClassName?: string;
}

type InputChangeEventType = React.ChangeEvent<HTMLInputElement> | undefined;

export function ModernRadioButtonGroup(props: Props): JSX.Element {
	const { children, groupClassName = '' } = props;
	const [inputChangeEvent, changeInputChangeEvent] =
		useState<InputChangeEventType>(undefined);

	function handleChange(value: InputChangeEventType) {
		changeInputChangeEvent(value);
	}

	const CheckedInputContextValue = {
		inputChangeEvent,
		handleChange,
	};

	return (
		<div className={`modern-radio-button-group ${groupClassName}`}>
			<CheckedInputContext.Provider value={CheckedInputContextValue}>
				{children}
			</CheckedInputContext.Provider>
		</div>
	);
}
