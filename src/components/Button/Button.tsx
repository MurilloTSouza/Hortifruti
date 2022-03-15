import React, { MouseEventHandler } from 'react';

import './Button.css';

interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<ButtonProps> = (props) => {
    
    const {onClick, children} = props;

    return (
        <button onClick={onClick} className='Button g_ellipsis-text'>
            {children}
        </button>
    )
}

