import React, { useState, createContext } from 'react';
import '../styles/components/messageContainer.scss';

export const Context = createContext<ContextType>({
	isOpen: false,
	setIsOpen: () => {},
});

interface ContextType {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
	children?: JSX.Element | JSX.Element[] | Element | Element[];
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
			<Context.Provider value={messageContainerContextValue}>
				{children}
			</Context.Provider>
		</div>
	);
}