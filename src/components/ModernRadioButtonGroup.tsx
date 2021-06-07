import React, { createContext, useState } from 'react';

type CheckedInputChangeEventType =
	| React.ChangeEvent<HTMLInputElement>
	| undefined;

interface CheckedInputContextType {
	handleChange: (value: CheckedInputChangeEventType) => void;
	checkedInputChangeEvent: CheckedInputChangeEventType;
}

export const CheckedInputContext = React.createContext<
	Partial<CheckedInputContextType>
>({});

interface Props {
	name: string;
	children: JSX.Element | JSX.Element[];
	groupClassName?: string;
}

export const NameContext = createContext<string>('');
export function ModernRadioButtonGroup(props: Props): JSX.Element {
	const { children, groupClassName = '', name } = props;
	const [checkedInputChangeEvent, changeCheckedInputChangeEvent] =
		useState<CheckedInputChangeEventType>(undefined);

	function handleChange(value: CheckedInputChangeEventType) {
		changeCheckedInputChangeEvent(value);
	}

	const CheckedInputContextValue = {
		checkedInputChangeEvent,
		handleChange,
	};

	return (
		<div className={`modern-radio-button-group ${groupClassName}`}>
			<NameContext.Provider value={name}>
				<CheckedInputContext.Provider value={CheckedInputContextValue}>
					{children}
				</CheckedInputContext.Provider>
			</NameContext.Provider>
		</div>
	);
}
