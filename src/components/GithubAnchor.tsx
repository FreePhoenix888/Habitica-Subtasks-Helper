import React from 'react';
import { IconGithub } from './icons/IconGithub';
import { Anchor } from './Anchor';
import '../styles/components/iconGithubAnchor.scss';

interface Props {
	anchorClassName?: string;
	href?: string;
	iconClassName?: string;
}

export function GithubAnchor(props: Props): JSX.Element {
	const {
		href = 'https://github.com/FreePhoenix888',
		anchorClassName = '',
		iconClassName = '',
	} = props;

	return (
		<Anchor
			className={`anchor anchor-icon anchor-github ${anchorClassName}`}
			href={href}
		>
			<IconGithub
				className={`anchor__icon anchor-github__icon ${iconClassName}`}
			/>
		</Anchor>
	);
}
