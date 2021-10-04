import React, {FC} from "react";

interface IProps {
    children: JSX.Element | string;
}

export const InputErrorMessage: FC<IProps> = ({children}) => <div
    className="habitica-subtasks-helper-form-section__invalid-input-error habitica-subtasks-helper-form-section-invalid-input-error">
    <span
        className="triangle-up habitica-subtasks-helper-form-section-invalid-input-error__triangle-up"/><span>{children}</span>
</div>