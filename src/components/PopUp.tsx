import React from 'react';

type Props = {
	className?: string;
	children: string | Element | Element[] | JSX.Element | JSX.Element[];
};
export function PopUp(props: Props) {
	const { className, children } = props;
	return <div className={`popup ${className}`}>{children}</div>;
}

