import React, { Dispatch, SetStateAction, useContext } from 'react';
import { ButtonInfo } from './ButtonInfo';

interface Props {
	className?: string;
	hidden?: boolean;
	onClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
	onFocusHandler?: (event: React.FocusEvent<HTMLElement>) => void;
	onKeyDownHandler?: (event: React.KeyboardEvent<HTMLElement>) => void;
	onMouseOverHandler?: (event: React.MouseEvent<HTMLElement>) => void;
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export function ModalButtonInfo(props: Props): JSX.Element {
	const { setIsOpen } = props;

	function handleClick(event) {
		// Default behavior
		setIsOpen(true);

		// Custom behavior
		const { onClickHandler } = props;
		if (onClickHandler) {
			onClickHandler(event);
		}
	}

	return <ButtonInfo {...props} onClickHandler={handleClick} />;
}
