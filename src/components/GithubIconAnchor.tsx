import React from 'react';
import { GithubIcon } from './GithubIcon';
import { Anchor } from './Anchor';

interface Props {
	href?: string;
	anchorClassName?: string;
	iconClassName?: string;
}

export function GithubIconAnchor(props: Props): JSX.Element {
	const {
		href = 'https://github.com/FreePhoenix888',
		anchorClassName = '',
		iconClassName = '',
	} = props;

	return (
		<Anchor href={href} className={`anchor ${anchorClassName}`}>
			<GithubIcon className={`${iconClassName}`} />
		</Anchor>
	);
}
