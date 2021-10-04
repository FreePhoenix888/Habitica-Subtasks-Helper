import React, {HTMLProps} from 'react';
import {setClassName} from '../../helpers/setClassName';
import './radio.scss';

type IProps = HTMLProps<HTMLInputElement> & {
    labelClassName?: string;
}

export function Radio(props: IProps): JSX.Element {
    const {labelClassName = '', className = '', children, ...rest} = props;
    const {id, checked} = props;
    const classNameModifiers = {
        checked,
    };

    return (
        <label
            className={setClassName(`habitica-subtasks-helper-radio ${labelClassName}`, classNameModifiers)}
            htmlFor={id}
        >
            {children}
            <input
                className={setClassName(
                    `habitica-subtasks-helper-radio__input ${className}`,
                    classNameModifiers
                )}
                type="radio"
                {...rest}
            />
        </label>
    );
}
