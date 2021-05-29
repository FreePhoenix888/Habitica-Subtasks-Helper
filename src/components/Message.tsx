import React, { useCallback, useState } from 'react';

type RenderButtonType = (
	setter: React.Dispatch<React.SetStateAction<boolean>>
) => JSX.Element;

export interface RenderMessageParameterType {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type RenderMessageType = {
	(parameter: RenderMessageParameterType): JSX.Element;
};

type Props = {
	renderButton: RenderButtonType;
	renderMessage: RenderMessageType;

	className?: string;
	buttonClassName?: string;
};
export function Message(props: Props) {
	const {
		renderButton,
		renderMessage,
		className = '',
		buttonClassName = '',
	} = props;
	const [isOpen, setIsOpen] = useState(false);

	const renderMessageParameter: RenderMessageParameterType = {
		isOpen,
		setIsOpen,
	};

	return (
		<div>
			{renderButton(setIsOpen)}
			{renderMessage(renderMessageParameter)}
		</div>
	);
}
