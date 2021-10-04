import React, {FC, useEffect, useState} from "react";
import {IModal, IModalContent, Modal} from "./Modal";
import {uuidv4} from "../../helpers";
import {getScrollbarWidth} from "../../helpers/getScrollBarWidth";
import './modal.scss';


export interface IModalsStorageApi {
    add: (modalData: IModalContent) => string;
    remove: (id: string) => void;
}

export const modalsStorageApi: IModalsStorageApi = {
    add: null,
    remove: null
}

export const ModalsStorage: FC = () => {
    const [modalsData, setModalsData] = useState<Omit<IModal, 'api'>[]>([]);
    useEffect(() => {
        const bodyStyle = document.body.style;
        if (modalsData.length !== 0) {
            const bodyPaddingRight = bodyStyle.paddingRight === "" ? 0 : parseInt(bodyStyle.paddingRight, 10);
            bodyStyle.paddingRight = `${bodyPaddingRight + getScrollbarWidth()}px`;
            bodyStyle.overflow = 'hidden';
        } else {
            bodyStyle.paddingRight = ``;
            bodyStyle.overflow = '';
        }
    })
    const add = (modalContent: IModalContent) => {
        const id = uuidv4();
        setModalsData((prevState => [...prevState, {children: modalContent, id}]));
        return id;
    }
    const remove = (id) => {
        setModalsData(prevState => prevState.filter(modalData => modalData.id !== id))
    }
    modalsStorageApi.add = add;
    modalsStorageApi.remove = remove;
    return <>{modalsData.map(modalData => <Modal api={modalsStorageApi} id={modalData.id}
                                                 key={modalData.id}>{modalData.children}</Modal>)}</>
}
