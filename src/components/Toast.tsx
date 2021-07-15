import React, { useState, useEffect, FC, useCallback } from 'react';
import { Button } from './Button';
import { IconCheck, IconInfo, IconWarning, IconError } from '../iconComponents';
import { setClassName, uuidv4 } from '../helpers';
import '../styles/components/toast.scss';

enum Type {
	ERROR = 'error',
	INFO = 'info',
	SUCCESS = 'success',
	WARNING = 'warning',
}

enum Position {
	BOTTOM_LEFT = 'bottom-left',
	BOTTOM_RIGHT = 'bottom-right',
	TOP_LEFT = 'top-left',
	TOP_RIGHT = 'top-right',
}

interface Props {
	className?: string;
	position: Position;
	text: string;
	title: string;
	type: Type;
}

export function Toast(props: Props): JSX.Element {
	const { type, title, text, position = 2, className = '' } = props;
	const addIcon = useCallback((type: Type) => {
		switch (type) {
			case Type.SUCCESS:
				return <IconCheck className="toast__icon" />;
			case Type.INFO:
				return <IconInfo className="toast__icon" />;
			case Type.WARNING:
				return <IconWarning className="toast__icon" />;
			case Type.ERROR:
				return <IconError className="toast__icon" />;
			default:
				throw new Error('No such notification type.');
		}
	}, []);
	return (
		<div className={`toast-container ${className}`}>
			<div
				className={setClassName(`toast-container__toast toast`, {
					[type]: true,
					[position]: true,
				})}
			>
				{addIcon(type)}
				<p className="toast__title">{title}</p>
				<p className="toast__message">{text}</p>
			</div>
		</div>
	);
}

Toast.Type = Type;
Toast.Position = Position;
