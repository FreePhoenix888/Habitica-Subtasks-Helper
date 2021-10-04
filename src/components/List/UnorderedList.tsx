import React, {FC, HTMLProps} from "react";

type IProps = HTMLProps<HTMLUListElement>;

export const UnorderedList: FC<IProps> = ({className = '', ...rest}) => <ul
    className={`habitica-subtasks-helper-unordered-list ${className}`} {...rest} />