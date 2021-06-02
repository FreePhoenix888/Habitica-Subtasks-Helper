import React, { createContext, useState } from 'react';

interface Props {
	action: string;
	children?: JSX.Element | JSX.Element[];
	className?: string;
}

interface FormContextType {
	activeInputSectionClassName: string;
	changeActiveInputSectionClassName: React.Dispatch<
		React.SetStateAction<string>
	>;
}

export const FormContext = createContext<FormContextType>({
	activeInputSectionClassName: '',
	changeActiveInputSectionClassName: () => {},
});

export function Form(props: Props): JSX.Element {
	const { action, children, className = '' } = props;

	const [activeInputSectionClassName, changeActiveInputSectionClassName] =
		useState<string>('');
	const FormContextValue = {
		activeInputSectionClassName,
		changeActiveInputSectionClassName,
	};

	return (
		<form action={action} className={`form ${className}`}>
			<FormContext.Provider value={FormContextValue}>
				{children}
			</FormContext.Provider>
		</form>
	);
}
