import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from 'react';
import '../styles/components/form.scss';

interface Props {
	action: string;
	children?: JSX.Element | JSX.Element[];
	className?: string;
	isBlurOn?: boolean;
}

interface FormContextType {
	activeInputSectionClassName: string;
	changeActiveInputSectionClassName:
		| Dispatch<SetStateAction<string>>
		| undefined;
}

export const FormContext = createContext<FormContextType>({
	activeInputSectionClassName: '',
	changeActiveInputSectionClassName: undefined,
});

export function Form(props: Props): JSX.Element {
	const { action, children, className = '', isBlurOn = false } = props;

	const [activeInputSectionClassName, changeActiveInputSectionClassName] =
		useState<string>('');

	const FormContextValue = {
		activeInputSectionClassName,
		changeActiveInputSectionClassName: isBlurOn
			? changeActiveInputSectionClassName
			: undefined,
	};

	return (
		<form action={action} className={`form ${className}`}>
			<FormContext.Provider value={FormContextValue}>
				{children}
			</FormContext.Provider>
		</form>
	);
}
