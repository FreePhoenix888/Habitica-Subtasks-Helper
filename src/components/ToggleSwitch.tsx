import React, { useState } from 'react';
import { Input } from './Input';
import { Label } from './Label';
import '../styles/componentsStyles/toggle-switch.scss';
import { ReactComponent as SVG } from '../media/images/lens_blur_icon.svg';

interface Props {
	className?: string;
	isCheckedByDefault?: boolean;
	onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ToggleSwitch(props: Props): JSX.Element {
	const { className, isCheckedByDefault = false } = props;

	const [isChecked, changeIsChecked] = useState<boolean>(isCheckedByDefault);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		// Defaul behavior
		const target = event.target as HTMLInputElement;
		changeIsChecked(target.checked);

		// Custom behavior
		const { onChangeHandler } = props;

		if (onChangeHandler) {
			onChangeHandler(event);
		}
	}

	return (
		<Label htmlFor="toggle-switch-blur" className="toggle-switch-blur">
			<div className="togle-switch-slider">
				<SVG />
			</div>
			<input
				className="toggle-switch-blur__input"
				type="checkbox"
				name="blur"
				id="toggle-switch-blur"
				onChange={handleChange}
			/>
		</Label>
	);
}
