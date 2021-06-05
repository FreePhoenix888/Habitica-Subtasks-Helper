import React from 'react';
import { GithubIcon } from './GithubIcon';
import { Button } from './Button';

interface Props {
	onClickHandler?: (event: React.MouseEvent) => void;
	buttonClassName?: string;
	iconClassName?: string;
}

export function BlurIconButton(props: Props): JSX.Element {
	const {
		buttonClassName = '',
		iconClassName = '',
		onClickHandler = () => {},
	} = props;

	return (
		<Button
			onClickHandler={onClickHandler}
			className={`anchor ${buttonClassName}`}
		>
			<GithubIcon className={`${iconClassName}`} />
		</Button>
	);
}
