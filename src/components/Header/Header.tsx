import React, {FC, HTMLProps} from 'react';
import {ToastContainer} from "react-toastify";
import {Anchor} from "../Anchor/Anchor";
import {ReactComponent as GithubIcon} from '../../media/images/icons/github.svg'
import './header.scss';


type IProps = HTMLProps<HTMLDivElement>;

export const Header: FC = ({children, className = '', ...rest}: IProps) =>
    <>
        <div className={`header ${className}`} {...rest}>
            <Anchor href="https://github.com/FreePhoenix888/Habitica-Subtasks-Helper" rel="noopener noreferrer"
                    target="_blank"><GithubIcon/></Anchor>
            {children}
        </div>
        <ToastContainer/>
    </>;
