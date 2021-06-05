import React, { useState } from 'react';
import { Input } from './Input';
import { Label } from './Label';
import '../styles/componentsStyles/toggle-switch.scss';
import { ReactComponent as SVG } from '../media/images/lens_blur_icon.svg';

interface Props {
	className?: string;
	isCheckedByDefault?: boolean;
}

export function ToggleSwitch(props: Props): JSX.Element {
	const { className, isCheckedByDefault = false } = props;

	const [isChecked, changeIsChecked] = useState<boolean>(isCheckedByDefault);

	return (
		<Label htmlFor="toggle-switch-blur" className="toggle-switch-blur">
			<div className="togle-switch-slider">
				<SVG />
			</div>
			<Input
				className="toggle-switch-blur__input"
				type="checkbox"
				name="blur"
				id="toggle-switch-blur"
			/>
		</Label>
	);
}
