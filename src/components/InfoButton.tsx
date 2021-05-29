import React from 'react';

type IsActiveContextType = {
	isActive: boolean;
	changeIsActive: (value: boolean) => void;
};
export const IsActiveContext = React.createContext<IsActiveContextType>({
	isActive: false,
	changeIsActive: (value) => {},
});

type Props = {
	className?: string;
	children: JSX.Element | JSX.Element[] | Element | Element[];
	paragraphClassName?: string;
	hidden?: boolean;
	htmlFor: string;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	onMouseOver?: (event: React.MouseEvent<HTMLElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
};

export function InfoButton(props: Props) {
	type IsActiveType = boolean;
	const [isActive, changeIsActive] = React.useState<IsActiveType>(false);
	const IsClickedContextValue = { isActive, changeIsActive };
	const {
		children,
		htmlFor,
		className = '',
		paragraphClassName = '',
		hidden = false,
		onClick = () => {},
		onMouseOver = () => {},
		onFocus = () => {},
		onKeyDown = () => {},
	} = props;

	function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
		changeIsActive(true);
	}

	return (
		<>
			<button
				className={`div info ${className}`}
				onClick={handleClick}
				onMouseOver={onMouseOver}
				onFocus={onFocus}
				onKeyDown={onKeyDown}
				hidden={hidden}
				type="button"
				data-for={htmlFor}
			>
				?
			</button>
			<IsActiveContext.Provider value={IsClickedContextValue}>
				{children}
			</IsActiveContext.Provider>
		</>
	);
}
