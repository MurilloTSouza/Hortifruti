import React, { useRef } from 'react';

import { CSSTransition } from 'react-transition-group';
import { IoClose } from 'react-icons/io5';

import './Drawer.css';

interface DrawerProps {
    closed?: boolean,

    onClose?: () => void
}

export const Drawer :React.FC<DrawerProps> = (props) => {

    const {closed, children} = props;

    const backgroundRef = useRef(null);

    // if not defined just set empty function
    const onClose = props.onClose
        ? props.onClose : () => {} ;

    // if click in background div, close Drawer
    const handleBackgroundClick = 
        (event: React.MouseEvent<HTMLDivElement>) => {
        if(event.target === backgroundRef.current){
            onClose();
        }
    }

    return (
        <CSSTransition 
            in={!closed} 
            timeout={300} 
            className="Drawer"
            unmountOnExit>
            <div ref={backgroundRef} onClick={handleBackgroundClick} >

                <div className='content'>
                    <IoClose onClick={onClose} id='drawer-x'/>

                    {children}

                </div>

            </div>
        </CSSTransition>
    )
}