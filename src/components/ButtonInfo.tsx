import React from 'react';
import '../styles/components/buttonInfo.scss';

interface Props {
	className?: string;
	hidden?: boolean;
	onClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
	onFocusHandler?: (event: React.FocusEvent<HTMLElement>) => void;
	onKeyDownHandler?: (event: React.KeyboardEvent<HTMLElement>) => void;
	onMouseOverHandler?: (event: React.MouseEvent<HTMLElement>) => void;
}

export function ButtonInfo(props: Props): JSX.Element {
	const {
		className = '',
		hidden = false,
		onClickHandler,
		onFocusHandler,
		onKeyDownHandler,
		onMouseOverHandler,
	} = props;

	return (
		<>
			<button
				className={`button button-info ${className}`}
				hidden={hidden}
				type="button"
				onClick={onClickHandler}
				onFocus={onFocusHandler}
				onKeyDown={onKeyDownHandler}
				onMouseOver={onMouseOverHandler}
			>
				?
			</button>
		</>
	);
}
