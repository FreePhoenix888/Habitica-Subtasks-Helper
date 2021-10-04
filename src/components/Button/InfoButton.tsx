import React, {ComponentProps, FC} from "react";
import {Button} from "./Button";

type IProps = ComponentProps<typeof Button>;

export const InfoButton: FC<IProps> = ({className, ...rest}) => <Button
    className={`habitica-subtasks-helper-info-button ${className}`} {...rest}>?</Button>