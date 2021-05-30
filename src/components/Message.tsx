import React, { useCallback, useState } from 'react';

const MessageContext = React.createContext<MessageContextType>(
	{} as MessageContextType
);

interface MessageContextType {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
	className?: string;
	buttonClassName?: string;
}
export function Message(props: Props) {
	const { className = '' } = props;
	const [isOpen, setIsOpen] = useState(false);

	const renderMessageContextValue: MessageContextType = {
		isOpen,
		setIsOpen,
	};

	return (
		<div>
			<MessageContext.Provider
				value={renderMessageContextValue}
			></MessageContext.Provider>
		</div>
	);
}
