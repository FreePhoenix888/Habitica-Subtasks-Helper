import React, { useState } from 'react';

declare function handleChange(value: CheckedInputType): void;
type CheckedInputContextType = {
	checkedInput: CheckedInputType;
	handleChange: typeof handleChange;
};
export const CheckedInputContext = React.createContext<CheckedInputContextType>(
	{ checkedInput: undefined, handleChange: () => {} }
);

type Props = {
	children: JSX.Element | JSX.Element[];
	groupClassName?: string;
	checkedByDefault?: number | string;
	before?: JSX.Element | JSX.Element[] | undefined;
	after?: JSX.Element | JSX.Element[] | undefined;
};
export type CheckedInputType =
	| Element
	| JSX.Element
	| React.ChangeEvent<HTMLInputElement>
	| undefined;

export function ModernRadioButtonGroup(props: Props) {
	const {
		children,
		groupClassName = '',
		checkedByDefault = '',
		before,
		after,
	} = props;
	const [checkedValue, changeChecked] = useState<CheckedInputType>(undefined);

	function handleChange(value: CheckedInputType) {
		changeChecked(value);
	}

	return (
		<div className={`modern-radio-button-group ${groupClassName}`}>
			<CheckedInputContext.Provider value={{ checkedInput: checkedValue, handleChange }}>
				{children}
			</CheckedInputContext.Provider>
		</div>
	);
}
