import React from 'react';
import { GithubIcon } from './GithubIcon';
import { Button } from './Button';

interface Props {
	buttonClassName?: string;
	iconClassName?: string;
	onClickHandler?: (event: React.MouseEvent) => void;
}

export function BlurIconButton(props: Props): JSX.Element {
	const {
		buttonClassName = '',
		iconClassName = '',
		onClickHandler = () => {},
	} = props;

	return (
		<Button
		className={`anchor ${buttonClassName}`}
		onClickHandler={onClickHandler}
		>
			<GithubIcon className={`${iconClassName}`} />
		</Button>
	);
}
