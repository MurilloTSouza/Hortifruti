import React from 'react';

import './NavbarItem.css';

interface NavbarItemProps {
    active?: boolean
}

export const NavbarItem :React.FC<NavbarItemProps> = (props) => {
    const {active} = props;
    const {children} = props;

    return (
        <a className={'NavbarItem' + (active? ' active': '')}>
            {children}
        </a>
    )
}