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

interface StateType {
	eventType: string;
	target: EventTarget;
}
interface ActionType {
	eventType?: string;
	target?: EventTarget;
	type: string;
}

interface ContextType {
	activeInputSections: StateType[];
	changeActiveInputSections: Dispatch<SetStateAction<ActionType>> | undefined;
}
export const FormContext = createContext<ContextType>(null);

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

	const [activeInputSections, changeActiveInputSections] = useReducer(
		(state: StateType[], action: ActionType) => {
			switch (action.type) {
				case 'reset':
					return [];
				case '+':
					return [
						...state,
						{ eventType: action.eventType, target: action.target },
					];
				case '-':
					return state.filter(
						(element) => action.eventType !== element.eventType
					);
				default:
					throw new Error('No such action type.');
			}
		},
		[],
		() => []
	);

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
