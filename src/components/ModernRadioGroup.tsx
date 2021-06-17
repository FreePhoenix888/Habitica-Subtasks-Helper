import React, {
	ChangeEvent,
	ChangeEventHandler,
	createContext,
	FormEventHandler,
	useState,
} from 'react';

const CheckedValueContext = createContext('');
const NameContext = createContext<string>('');

interface Props {
	children: JSX.Element;
	className?: string;
	defaultCheckedValue?: string;
	name: string;
	onChangeHandler: FormEventHandler<HTMLDivElement>;
}

export function ModernRadioGroup(props: Props): JSX.Element {
	const { className, name, children, defaultCheckedValue = '' } = props;

	const [checkedValue, setCheckedValue] = useState<string>(defaultCheckedValue);
	return (
		<div
			className={className}
			onChangeCapture={(event) => {
				// Default behavior
				const target = event.target as HTMLInputElement;
				setCheckedValue(target.value);

				// Custom behavior
				const { onChangeHandler } = props;
				if (onChangeHandler) onChangeHandler(event);
			}}
		>
			<CheckedValueContext.Provider value={checkedValue}>
				{children}
			</CheckedValueContext.Provider>
		</div>
	);
}

export {
	CheckedValueContext as CheckedRadioValueContext,
	NameContext as ModernRadioGroupNameContext,
};
