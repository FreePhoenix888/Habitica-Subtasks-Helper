import React, {HTMLProps} from 'react';
import './form.scss';

type IProps = HTMLProps<HTMLFormElement>;

export const Form = ({className, ...rest}: IProps): JSX.Element => <form
    className={`habitica-subtasks-helper-form ${className}`} {...rest} />