export {};

/* import React, {
	createRef,
	useCallback,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import {toast} from "react-toastify";
import { Form } from './Form/Form';
import './Form/form.scss';


interface Props {
	action: string;
	children?: JSX.Element | JSX.Element[];
	className?: string;
	isBlurOn?: boolean
}

export function TaskForm(props: Props): JSX.Element {
	const formRef = createRef<HTMLFormElement>();
	const [formData, setFormData] = useState<FormData>();
	const getHeaders = useCallback(
		() => ({
			'Content-Type': 'application/json',
			'x-client': '59322894-0bd9-45f1-af35-4ceffcd76fac-HabiticaSubtasksEditor',
			'x-api-user': formData.get('user_id') as string,
			'x-api-key': formData.get('API_token') as string,
		}),
		[formData]
	);
	const getSubtasks = useCallback(
		(subtasks: string, separator: string) =>
		{
			if(!separator){
				return [subtasks];
			}
			return subtasks.split(new RegExp(separator)).map((subtask) => subtask.trim())
		},
		[]
	);
	const createSubtask = useCallback(
		(taskId: string, subtask: string) =>
			new Promise((resolve, reject) => {
				fetch(`https://habitica.com/api/v3/tasks/${taskId}/checklist`, {
					headers: getHeaders(),
					method: 'POST',
					body: JSON.stringify({
						text: subtask,
					}),
				})
					.then((responseData) => {
						if (!responseData.ok) reject(responseData.statusText);
						resolve(responseData.json());
					})
					.catch((error) => {
						reject(error);
					});
			}),
		[getHeaders]
	);

	const createSubtasks = useCallback(
		(taskId: string) => {
			const subtasks = getSubtasks(
				formData.get('subtasks') as string,
				formData.get('separator') as string
			);
			const fetchPromises: Promise<unknown>[] = [];
			subtasks.forEach((subtask) => {
				fetchPromises.push(createSubtask(taskId, subtask));
			});
			return fetchPromises;
		},
		[createSubtask, formData, getSubtasks]
	);

	const createTask = useCallback(
		() =>
			new Promise((resolve, reject) => {
				fetch('https://habitica.com/api/v3/tasks/user', {
					headers: getHeaders(),
					method: 'POST',
					body: JSON.stringify({
						text: formData.get('title'),
						type: formData.get('type'),
						notes: formData.get('notes'),
					}),
				})
					.then((response) => response.json())
					.then(
						(
							responseData: Response & {
								data: { id: string };
								message: string;
								success: boolean;
							}
						) => {
							if (!responseData.success) {
								reject(responseData);
							}
							const taskId = responseData.data.id;
							Promise.all(createSubtasks(taskId)).catch((error) => {reject(error)});
							resolve(responseData);
						}
					)
					.catch((error) => {
						reject(error);
					});
			}),
		[createSubtasks, formData, getHeaders]
	);

	const isFirstUseEffect = useRef(true);
	useLayoutEffect(() => {
		if (!isFirstUseEffect.current) {
			let amount = Number(formData.get('amount'));
			if (amount > 30) {
				amount = 30;
			}
			const fetchPromises = [];
			for (let i = 0; i < amount; i++) {
				const fetchPromise = createTask();
				fetchPromises.push(fetchPromise);
			}

			Promise.all(fetchPromises)
				.then(() => {
					toast(<b>Task is added.</b>, {type: 'success'});
				})
				.catch((error: Error) => {
					toast(<><b>Task is not added.</b> Reason: {error.message}</>, {type: 'error'})
				});
		}
		if (isFirstUseEffect.current) isFirstUseEffect.current = false;
	}, [createTask, formData]);

	return (
		<Form
			{...props}
			forwardedRef={formRef}
			onSubmitHandler={(event) => {
				event.preventDefault();
				setFormData(new FormData(formRef.current));
			}}
		/>
	);
} */
