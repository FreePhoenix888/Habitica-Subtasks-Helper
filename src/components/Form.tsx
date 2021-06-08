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
	activeInputSections: EventTarget[];
	changeActiveInputSections:
		| Dispatch<SetStateAction<EventTarget[]>>
		| undefined;
}

export const FormContext = createContext<FormContextType>({
	activeInputSections: [] as EventTarget[],
	changeActiveInputSections: undefined,
});

export function Form(props: Props): JSX.Element {
	const { action, children, className = '', isBlurOn = false } = props;

	const [activeInputSections, changeActiveInputSections] = useState<
		EventTarget[]
	>([]);

	const FormContextValue = {
		activeInputSections,
		changeActiveInputSections: isBlurOn ? changeActiveInputSections : undefined,
	};

	return (
		<form action={action} className={`form ${className}`}>
			<FormContext.Provider value={FormContextValue}>
				{children}
			</FormContext.Provider>
		</form>
	);
}
