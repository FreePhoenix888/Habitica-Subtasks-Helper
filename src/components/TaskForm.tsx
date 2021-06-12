import React, {
	createContext,
	createRef,
	Dispatch,
	SetStateAction,
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

	const formRef = createRef<HTMLFormElement>();

	useEffect(() => {
		setFormData(new FormData(formRef.current));
	}, []);
	return (
		<FormDataContext.Provider value={formData}>
			<Form
				{...props}
				forwardedRef={formRef}
				onChangeCapture={() => {
					setFormData(new FormData(formRef.current));
				}}
			/>
		</FormDataContext.Provider>
	);
}
