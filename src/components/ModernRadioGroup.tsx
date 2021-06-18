import React, {
	ChangeEvent,
	ChangeEventHandler,
	createContext,
	FormEventHandler,
	useState,
} from 'react';
import '../styles/components/modernRadioGroup.scss';

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
	const { className = '', name, children, defaultCheckedValue = '' } = props;

	const [checkedValue, setCheckedValue] = useState<string>(defaultCheckedValue);
	return (
		<div
			className={`modern-radio-group ${className}`}
			onChangeCapture={(event) => {
				// Default behavior
				const target = event.target as HTMLInputElement;
				setCheckedValue(target.value);

				// Custom behavior
				const { onChangeHandler } = props;
				if (onChangeHandler) onChangeHandler(event);
			}}
		>
			<NameContext.Provider value={name}>
				<CheckedValueContext.Provider value={checkedValue}>
					{children}
				</CheckedValueContext.Provider>
			</NameContext.Provider>
		</div>
	);
}

export {
	CheckedValueContext as CheckedRadioValueContext,
	NameContext as ModernRadioGroupNameContext,
};
