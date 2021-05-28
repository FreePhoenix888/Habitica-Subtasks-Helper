import React from 'react';
type IsClickedContextType = {
	isActive: boolean;
	changeIsActive: (value: boolean) => void;
};
const IsClickedContext = React.createContext<IsClickedContextType>({
	isActive: false,
	changeIsActive: (value) => {},
});

type Props = {
	className?: string;
	children: JSX.Element | JSX.Element[] | Element | Element[];
	paragraphClassName?: string;
	hidden?: boolean;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	onMouseOver?: (event: React.MouseEvent<HTMLElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
};

export function InfoButton(props: Props) {
	type isActiveType = boolean;
	let [isActive, changeIsActive] = React.useState<isActiveType>(false);
	const IsClickedContextValue = { isActive, changeIsActive };
	const {
		className = '',
		children,
		paragraphClassName = '',
		hidden = false,
		onClick = () => {},
		onMouseOver = () => {},
		onFocus = () => {},
		onKeyDown = () => {},
	} = props;

	return (
		<>
			<button
				className={`div info ${className}`}
				onClick={onClick}
				onMouseOver={onMouseOver}
				onFocus={onFocus}
				onKeyDown={onKeyDown}
				hidden={hidden}
				type="button"
			>
				?
			</button>
			<IsClickedContext.Provider value={IsClickedContextValue}>
				{children}
			</IsClickedContext.Provider>
		</>
	);
}
