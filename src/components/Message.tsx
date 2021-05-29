import React, { useCallback, useState } from 'react';

export interface RenderMessageParameterType {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
	className?: string;
	buttonClassName?: string;
}
export function Message(props: Props) {
	const { className = '', buttonClassName = '' } = props;
	const [isOpen, setIsOpen] = useState(false);

	const renderMessageParameter: RenderMessageParameterType = {
		isOpen,
		setIsOpen,
	};

	return <div></div>;
}
