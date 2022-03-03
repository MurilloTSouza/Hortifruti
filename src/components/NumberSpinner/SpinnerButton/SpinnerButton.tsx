import React from 'react';

import './SpinnerButton.css';

interface SpinnerButtonProps {
    disabled?: boolean,

    onClick?: () => void
}

export const SpinnerButton :React.FC<SpinnerButtonProps> = (props) => {
    
    const {disabled, onClick} = props;
    const {children} = props;

    var className = 'SpinnerButton';
    if (disabled) className += ' disabled';

    const handleClick = () => {
        if(!disabled && onClick) onClick();
    }

    return (
        <span onClick={handleClick} className={className}>
            {children}
        </span>
    )
}