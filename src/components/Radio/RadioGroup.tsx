import React, {ComponentProps, HTMLProps, useCallback} from 'react';
import './radioGroup.scss';
import {Radio} from "./Radio";

type IRadioProps = ComponentProps<typeof Radio>;
type IRadioData = Pick<IRadioProps, 'children' | 'value' | 'id'>;

interface IProps extends HTMLProps<HTMLDivElement> {
    className?: string;
    defaultCheckedValue?: IProps["value"];
    name: string;
    onChange: HTMLProps<HTMLInputElement>['onChange'];
    radiosData: IRadioData[];
}

export function RadioGroup({radiosData, name, className = '', value, onChange, ...rest}: IProps): JSX.Element {
    const renderRadios = useCallback(() => radiosData.map(radioData => <Radio checked={value === radioData.value}
                                                                              name={name} {...radioData}
                                                                              key={radioData.id}
                                                                              onChange={onChange}/>), [radiosData, value, name, onChange])
    return (
        <div
            className={`habitica-subtasks-helper-radio-group ${className}`}
            {...rest}
        >
            {renderRadios()}
        </div>
    );
}
