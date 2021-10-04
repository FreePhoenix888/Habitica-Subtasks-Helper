import React, {FC, HTMLProps} from "react";
import './code.scss';

type IProps = HTMLProps<HTMLSpanElement>;

export const Code: FC<IProps> = ({className = '', ...rest}: IProps) => <code
    className={`habitica-subtasks-helper-code ${className}`} {...rest} />