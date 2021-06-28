import React, {
	createContext,
	createRef,
	Dispatch,
	SetStateAction,
	useCallback,
	useContext,
	useEffect,
	useReducer,
	useRef,
	useState,
} from 'react';
import { Form } from './Form';
import '../styles/components/form.scss';

interface Props {
	action: string;
	children?: JSX.Element | JSX.Element[];
	className?: string;
	isBlurOn?: boolean;
}

export const FormDataContext = createContext<FormData>(undefined);

export function TaskForm(props: Props): JSX.Element {
	const [formData, setFormData] = useState<FormData>();

	const processDifficultyValue = useCallback((value) => {
		const difficulties = [0.1, 1, 1.5, 2];

		return difficulties[value - 1];
	}, []);

	return (
		<FormDataContext.Provider value={formData}>
			<Form {...props} onSubmitHandler={() => {}} />
		</FormDataContext.Provider>
	);
}
