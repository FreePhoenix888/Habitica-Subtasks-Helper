import React from 'react';
import { GithubIconAnchor } from './GithubIconAnchor';
import { BlurIconButton } from './BlurIconButton';

interface Props {
	className?: string;
}

export function Header(props: Props): JSX.Element {
	const { className = '' } = props;

	return (
		<div className={`header ${className}`}>
			<BlurIconButton />
			<GithubIconAnchor />
		</div>
	);
}
