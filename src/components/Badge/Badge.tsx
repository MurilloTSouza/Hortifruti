import React from 'react';

import './Badge.css';

interface BadgeProps {
}

export const Badge :React.FC<BadgeProps> = (props) => {
    const {children} = props;
    
    return (
        <span className='Badge'>
            {children}
        </span>
    );
}