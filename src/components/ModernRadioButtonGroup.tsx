import React, { useState } from 'react';

declare function handleChange(value: CheckedValueType): void;
type CheckedValueContextType = {
	checkedValue: CheckedValueType;
	handleChange: typeof handleChange;
};
export const CheckedValueContext = React.createContext<CheckedValueContextType>(
	{ checkedValue: '', handleChange: () => {} }
);

type Props = {
	children: JSX.Element | JSX.Element[];
	groupClassName?: string;
	checkedByDefault?: number | string;
	before?: JSX.Element | JSX.Element[] | undefined;
	after?: JSX.Element | JSX.Element[] | undefined;
};
export type CheckedValueType = number | string;

export function ModernRadioButtonGroup(props: Props) {
	const {
		children,
		groupClassName = '',
		checkedByDefault = '',
		before,
		after,
	} = props;
	const [checkedValue, changeChecked] = useState<CheckedValueType>('');

	function handleChange(value: CheckedValueType) {
		changeChecked(value);
	}

	return (
		<div className={`modern-radio-button-group ${groupClassName}`}>
			<CheckedValueContext.Provider value={{ checkedValue, handleChange }}>
				{children}
			</CheckedValueContext.Provider>
		</div>
	);
}
