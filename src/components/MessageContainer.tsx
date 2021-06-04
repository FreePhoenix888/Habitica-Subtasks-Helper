import React, { useState, createContext } from 'react';

export const MessageContainerContext = createContext<ContextType>({
	isOpen: false,
	setIsOpen: () => {},
});

interface ContextType {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
	children: JSX.Element | JSX.Element[] | Element | Element[];
}
export function MessageContainer(props: Props): JSX.Element {
	const { children } = props;
	const [isOpen, setIsOpen] = useState(false);

	const messageContainerContextValue: ContextType = {
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
