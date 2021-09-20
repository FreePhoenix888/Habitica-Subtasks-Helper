import React, {forwardRef, HTMLProps} from 'react';
import './input.scss';
import {setClassName} from "../../helpers";

interface IProps extends HTMLProps<HTMLInputElement> {
    classNameModifiers?: Record<string, boolean>;
}

export const Input = forwardRef<HTMLInputElement, IProps>(({
                                                       className = '',
                                                       classNameModifiers,
                                                       ...rest
                                                   }: IProps, ref): JSX.Element => <input
    className={setClassName(`habitica-subtasks-helper-input ${className}`, classNameModifiers)}
    ref={ref}
    {...rest} />)
Input.displayName = 'HabiticaSubtasksHelperInput'