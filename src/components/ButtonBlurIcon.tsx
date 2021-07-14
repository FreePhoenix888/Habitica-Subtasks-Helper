import React from 'react';
import { IconGithub } from './icons/IconGithub';
import { Button } from './Button';

interface Props {
	buttonClassName?: string;
	iconClassName?: string;
	onClickHandler?: (event: React.MouseEvent) => void;
}

export function ButtonBlurIcon(props: Props): JSX.Element {
	const {
		buttonClassName = '',
		iconClassName = '',
		onClickHandler = () => {},
	} = props;

	return (
		<Button
		className={`${buttonClassName}`}
		onClickHandler={onClickHandler}
		>
			<IconGithub className={`${iconClassName}`} />
		</Button>
	);
}
