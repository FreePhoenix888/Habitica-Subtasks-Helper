import React, {
	ChangeEvent,
	createRef,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import { CheckedRadioContext, NameContext } from './ModernRadioGroup';
import { Label } from './Label';
import { Radio } from './Radio';
import { setClassName } from '../helpers';
import '../styles/components/modernRadio.scss';

interface Props {
	children: JSX.Element | JSX.Element[] | string;
	htmlFor: string;
	id?: string;
	inputClassName?: string;
	labelClassName?: string;
	radioButtonClassName?: string;
	value: string;
}

export function ModernRadio(props: Props): JSX.Element {
	const {
		children,
		radioButtonClassName = '',
		labelClassName = '',
		inputClassName = '',
		htmlFor,
		id = '',
		value,
	} = props;
	// Every radio should know when another is selected
	const { checkedRadioValue, setCheckedRadioValue } =
		useContext(CheckedRadioContext);

	const radioRef = createRef<HTMLInputElement>();

	const [isChecked, setIsState] = useState<boolean>();

	useEffect(() => {
		setIsState(radioRef.current.checked);
	}, [checkedRadioValue]);

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		if (setCheckedRadioValue) {
			setCheckedRadioValue(event);
		}
	}

	// Name
	const name = useContext(NameContext);

	const classNameModifiers = {
		checked: isChecked,
	};
	return (
		<div
			className={setClassName(
				'modern-radio',
				radioButtonClassName,
				classNameModifiers
			)}
		>
			<Label
				className={setClassName(
					'modern-radio__label',
					labelClassName,
					classNameModifiers
				)}
				htmlFor={htmlFor}
			>
				{children}
			</Label>
			<Radio
				forwardedRef={radioRef}
				className={setClassName(
					'modern-radio__input',
					inputClassName,
					classNameModifiers
				)}
				id={id}
				name={name}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
}
