import React, {HTMLAttributes} from "react";
import './button.scss';

type IProps = HTMLAttributes<HTMLButtonElement>;

export const Button = ({className, ...rest}: IProps): JSX.Element => <button {...rest}
                                                                             className={`habitica-subtasks-helper-button ${className}`}
                                                                             type="button"/>;
