import React, {HTMLProps} from "react";
import {setClassName} from "../../helpers";

type IProps = Omit<HTMLProps<HTMLButtonElement>, 'type'>;

export const SubmitButton = (props: IProps): JSX.Element => {
    const {className, ...rest} = props;
    return <button className={setClassName(`habitica-subtasks-helper-button ${className}`)} type="submit" {...rest}/>
}