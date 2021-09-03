import React, {forwardRef, HTMLProps} from 'react';
import './textarea.scss';

type IProps = HTMLProps<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, IProps>(({className = '', ...rest}: IProps, ref): JSX.Element => <textarea
    className={`habitica-subtasks-helper-textarea ${className}`} {...rest} ref={ref}/>)
TextArea.displayName = "HabiticaSubtasksHelperTextArea"

