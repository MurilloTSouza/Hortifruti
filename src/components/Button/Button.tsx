import React, { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';

import './Button.css';

interface ButtonProps {
    icon?: IconType, 
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<ButtonProps> = (props) => {
    
    const {icon, onClick, children} = props;

    const Icon = icon
        ? React.createElement(icon)
        : null;

    return (
        <button onClick={onClick} className='Button'>
            <span className='g_ellipsis-text'>{children}</span>
            {Icon}
        </button>
    )
}

