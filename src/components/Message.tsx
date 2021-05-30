import React, { useState, createContext } from 'react';

export const MessageContext = createContext<MessageContextType>({
	isOpen: false,
	setIsOpen: () => {},
});

interface MessageContextType {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
	children: JSX.Element | JSX.Element[] | Element | Element[];
	className?: string;
}
export function Message(props: Props) {
	const { children, className = '' } = props;
	const [isOpen, setIsOpen] = useState(false);

	const renderMessageContextValue: MessageContextType = {
		isOpen,
		setIsOpen,
	};

	return (
		<div>
			<MessageContext.Provider value={renderMessageContextValue}>
				{children}
			</MessageContext.Provider>
		</div>
	);
}
