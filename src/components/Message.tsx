import React, { Children, useState } from 'react';

export let MessageContext: React.Context<MessageContextType>;

interface MessageContextType {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
	children: JSX.Element | JSX.Element[] | Element | Element[];
	className?: string;
	buttonClassName?: string;
}
export function Message(props: Props) {
	const { children, className = '' } = props;
	const [isOpen, setIsOpen] = useState(false);

	const renderMessageContextValue: MessageContextType = {
		isOpen,
		setIsOpen,
	};

	MessageContext = React.createContext<MessageContextType>(
		renderMessageContextValue
	);

	return (
		<div>
			<MessageContext.Provider value={renderMessageContextValue}>
				{children}
			</MessageContext.Provider>
		</div>
	);
}
