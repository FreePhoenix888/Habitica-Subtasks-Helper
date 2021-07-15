import React, { useState } from 'react';
import { Toast } from './Toast';

interface Props {}

export function ToastsStore(props: Props): JSX.Element {
	const [toasts, setToasts] = useState({
		type: ToastsStore.Type.SUCCESS,
		title: 'Success!',
		text: 'You are a good developer.',
	});
	return <>{toasts.map(toast => <Toast ...toast />)}</>;
}

ToastsStore.Type = Toast.Type;
ToastsStore.Position = Toast.Position;
