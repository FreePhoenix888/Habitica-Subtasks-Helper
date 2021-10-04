import React, {FC, HTMLProps} from "react";
import './paragraph.scss';

type IProps = HTMLProps<HTMLParagraphElement>;

export const Paragraph: FC<IProps> = ({className = '', ...rest}) => <p
    className={`habitica-subtasks-helper-paragraph ${className}`} {...rest} />