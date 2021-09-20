import React, {createRef, useEffect} from "react";
import './modal.scss';

export type IModalContent = JSX.Element | string;

interface IProps {
    api?: { add: (modalData: IModalContent) => string; remove: (id: string) => void; };
    children?: JSX.Element | string;
    id?: string;
}

const Modal = ({children, id, api}: IProps): JSX.Element => {
    const modalBackgroundRef = createRef<HTMLDivElement>();
    useEffect(() => {
        modalBackgroundRef.current.focus();
    })

    return <div className="habitica-subtasks-helper-modal-container" ref={modalBackgroundRef} role="button"
                tabIndex={-1}
                onClick={(event) => {
                    const {target} = event;
                    if (!(target instanceof Element)) return;
                    if (!(target.classList.contains('habitica-subtasks-helper-modal__close-button') || target.classList.contains('habitica-subtasks-helper-modal-container'))) return;
                    api.remove(id);
                }
                }
                onKeyDown={(event) => {
                    const isAllowedKey = event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.code === "Tab" || event.code === "F7";
                    if (!isAllowedKey) {
                        api.remove(id);
                    }
                    if (event.code === "Tab") event.preventDefault();
                }}
    >
        <div className="habitica-subtasks-helper-modal">
            <div className="habitica-subtasks-helper-modal__content">{children}</div>
            <button className="habitica-subtasks-helper-modal__close-button" tabIndex={-1} type="button"
            >Press any key or click outside to close.
            </button>
        </div>
    </div>
}

export {Modal};
export type IModal = IProps;
