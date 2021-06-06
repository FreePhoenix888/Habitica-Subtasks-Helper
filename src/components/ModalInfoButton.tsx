import React, { useContext } from 'react';
import { MessageContainerContext } from './MessageContainer';
import { ButtonInfo } from './ButtonInfo';

type Props = {
	className?: string;
	hidden?: boolean;
};

export function ModalInfoButton(props: Props): JSX.Element {
	const { setIsOpen } = useContext(MessageContainerContext);

	function onClickHandler() {
		setIsOpen(true);
	}

	return <ButtonInfo onClickHandler={onClickHandler} {...props} />;
}
