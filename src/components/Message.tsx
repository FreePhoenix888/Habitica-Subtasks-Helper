import React, { Children, useState } from 'react';

const MessageContext = React.createContext<MessageContextType>({
	isOpen: false,
	setIsOpen: () => {},
} as MessageContextType);

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

	return (
		<div>
			<MessageContext.Provider value={renderMessageContextValue}>
				{children}
			</MessageContext.Provider>
		</div>
	);
}
