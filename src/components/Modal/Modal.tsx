import React, { useRef } from 'react';

import { CSSTransition } from 'react-transition-group';
import { IoClose } from 'react-icons/io5';

import './Modal.css';

interface ModalProps {
    open?: boolean,

    onClose?: () => void
}

export const Modal :React.FC<ModalProps> = (props) => {

    const {open, children} = props;

    const backgroundRef = useRef(null);

    // if not defined just set empty function
    const onClose = props.onClose
        ? props.onClose : () => {} ;

    // if click in background div, close Modal
    const handleBackgroundClick = 
        (event: React.MouseEvent<HTMLDivElement>) => {
        if(event.target === backgroundRef.current){
            onClose();
        }
    }

    return (
        <CSSTransition 
            in={open} 
            timeout={300} 
            className="CSSTransition"
            unmountOnExit><div>

            <div className="Modal transition_fade" ref={backgroundRef} onClick={handleBackgroundClick} >

                <div className="content transition_slideup">
                    <IoClose onClick={onClose} id='modal-x'/>

                    {children}

                </div>
            </div>

        </div></CSSTransition>
    )
}