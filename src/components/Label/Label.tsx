import React, {FC, HTMLProps} from "react";
import './label.scss';

type IProps = HTMLProps<HTMLLabelElement>;

export const Label: FC<IProps> = ({className = '', ...rest}) => <label
    className={`habitica-subtasks-helper-label ${className}`} {...rest} />