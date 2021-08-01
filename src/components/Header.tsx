import React from 'react';
import {ToastContainer} from "react-toastify";
import { GithubAnchor } from './GithubAnchor';
import '../styles/components/header.scss';


interface Props {
	children?: JSX.Element | JSX.Element[];
	className?: string;
}

export function Header(props: Props): JSX.Element {
	const { children, className = '' } = props;

	return (
		<div className={`header ${className}`}>
			<ToastContainer/>
			<GithubAnchor anchorClassName="header__anchor-github" />
			{children}
		</div>
	);
}
