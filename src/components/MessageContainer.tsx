import React, { useState, createContext } from 'react';

export const MessageContainerContext = createContext<MessageContainerContextType>({
	isOpen: false,
	setIsOpen: () => {},
});

interface MessageContainerContextType {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
	children: JSX.Element | JSX.Element[] | Element | Element[];
}
export function MessageContainer(props: Props) {
	const { children } = props;
	const [isOpen, setIsOpen] = useState(false);

	const messageContainerContextValue: MessageContainerContextType = {
		isOpen,
		setIsOpen,
	};

	return (
		<div className="message-container">
			<MessageContainerContext.Provider value={messageContainerContextValue}>
				{children}
			</MessageContainerContext.Provider>
		</div>
	);
}
