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
	setSubmitResult?: Dispatch<SetStateAction<number>>;
}

export function TaskForm(props: Props): JSX.Element {
	const { setSubmitResult } = props;
	const formRef = createRef<HTMLFormElement>();

	const getSubtasks = useCallback(
		(subtasks: string, separator: string) =>
			subtasks.split(new RegExp(separator)).map((subtask) => subtask.trim()),
		[]
	);

	return (
		<Form
			{...props}
			forwardedRef={formRef}
			onSubmitHandler={(event) => {
				event.preventDefault();
				const formData = new FormData(formRef.current);
				const headers = {
					'Content-Type': 'application/json',
					'x-client':
						'59322894-0bd9-45f1-af35-4ceffcd76fac-HabiticaSubtasksEditor',
					'x-api-user': formData.get('user_id') as string,
					'x-api-key': formData.get('API_token') as string,
				};
				let amount = Number(formData.get('amount'));
				if (amount > 30) {
					amount = 30;
				}
				const fetchPromises = [];
				for (let i = 0; i < amount; i++) {
					const fetchPromise = new Promise((resolve, reject) => {
						fetch('https://habitica.com/api/v3/tasks/user', {
							headers,
							method: 'POST',
							body: JSON.stringify({
								text: formData.get('title'),
								type: formData.get('type'),
								notes: formData.get('notes'),
							}),
						})
							.then((response) => response.json())
							.then((responseData: Response & { success: boolean }) => {
								if (responseData.success) {
									resolve(responseData);
								} else {
									reject(responseData.statusText);
								}
							})
							.catch((error) => {
								reject(error);
							});
					});
					fetchPromises.push(fetchPromise);
				}

				Promise.all(fetchPromises)
					.then(() => {
						setSubmitResult(0);
					})
					.catch((error) => {
						setSubmitResult(1);
						console.log(error);
					});
			}}
		/>
	);
}
