import React, {HTMLProps} from "react";
import './anchor.scss';

type IProps = HTMLProps<HTMLAnchorElement>;

export const Anchor = ({className = '', children, ...rest}: IProps): JSX.Element => <a
    className={`habitica-subtasks-helper-anchor ${className}`} {...rest}>{children}</a>;