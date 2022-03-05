import React from 'react';

import { CSSTransition } from 'react-transition-group';
import { IoClose } from 'react-icons/io5';

import './Drawer.css';

interface DrawerProps {
    isClosed?: boolean,

    onClose?: () => void
}

export const Drawer :React.FC<DrawerProps> = (props) => {

    const {isClosed, children} = props;

    // if not defined just set empty function
    const onClose = props.onClose
        ? props.onClose : () => {} ;

    return (
        <CSSTransition 
            in={!isClosed} 
            timeout={300} 
            className="Drawer" 
            unmountOnExit>
            <div>

                <div className='content'>
                    <IoClose onClick={onClose} id='drawer-x'/>

                    {children}

                </div>

            </div>
        </CSSTransition>
    )
}