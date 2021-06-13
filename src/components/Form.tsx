import React, {
	ChangeEvent,
	createContext,
	Dispatch,
	FormEvent,
	FormEventHandler,
	RefObject,
	SetStateAction,
	useContext,
	useReducer,
	useState,
} from 'react';
import '../styles/components/form.scss';

interface Props {
	action: string;
	children?: JSX.Element | JSX.Element[];
	className?: string;
	forwardedRef?: RefObject<HTMLFormElement>;
	isBlurOn?: boolean;
	onChangeCapture?: (event: FormEvent<HTMLFormElement>) => void;
	onSubmitHandler?: (event: FormEvent<HTMLFormElement>) => void;
}

interface ContextType {
	activeInputSections: Set<HTMLDivElement>;
	changeActiveInputSections:
		| Dispatch<SetStateAction<Set<HTMLDivElement>>>
		| undefined;
}
export const FormContext = createContext<ContextType>({
	activeInputSections: new Set(),
	changeActiveInputSections: undefined,
});

export function Form(props: Props): JSX.Element {
	const {
		action,
		children,
		className = '',
		isBlurOn = false,
		onChangeCapture,
		onSubmitHandler,
		forwardedRef,
	} = props;

	const [activeInputSections, changeActiveInputSections] = useState<
		Set<HTMLDivElement>
	>(new Set());

	const FormContextValue = {
		activeInputSections,
		changeActiveInputSections: isBlurOn ? changeActiveInputSections : undefined,
	};

	return (
		<form
			action={action}
			className={`form ${className}`}
			ref={forwardedRef}
			onChangeCapture={onChangeCapture}
			onSubmit={onSubmitHandler}
		>
			<FormContext.Provider value={FormContextValue}>
				{children}
			</FormContext.Provider>
		</form>
	);
}
