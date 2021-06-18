import React, { FocusEventHandler } from 'react';
import '../styles/components/label.scss';

interface Props {
	children?: string | Element | Element[] | JSX.Element | JSX.Element[];
	className?: string;
	htmlFor: string;
	onBlurHandler?: FocusEventHandler;
	onFocusHandler?: FocusEventHandler;
}

export function Label(props: Props): JSX.Element {
	const {
		htmlFor,
		children,
		className = '',
		onFocusHandler,
		onBlurHandler,
	} = props;

	return (
		<label
			className={`label ${className}`}
			htmlFor={htmlFor}
			onBlur={onBlurHandler}
			onFocus={onFocusHandler}
		>
			{children}
		</label>
	);
}
