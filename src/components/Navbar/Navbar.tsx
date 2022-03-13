import React, { useState } from 'react';

import { CSSTransition } from 'react-transition-group';
import { MdOutlineMenu } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

import './Navbar.css';

interface NavbarProps {

}

export const Navbar :React.FC<NavbarProps> = (props) => {
    
    const {children} = props;
    
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuIconClick = () => {
        setShowMenu(!showMenu);
    }

    const isMobile = useMediaQuery({
        query: '(max-width: 480px)'
    })

    const menuIcon = 
        <MdOutlineMenu 
            className='menu-icon' 
            onClick={handleMenuIconClick}/>;
    
    return (
        <div className='Navbar'>
            
            <div className='bar g_light-shadow'>
                { isMobile ? menuIcon : null }
                { !isMobile? children : null }
            </div>

            <CSSTransition in={isMobile && showMenu}
                timeout={300} 
                className='dropdown CSSTransition'
                unmountOnExit><div>

                <div className='dropdown-list g_light-shadow transition_fade transition_slidedown'>
                    {children}
                </div>

            </div></CSSTransition>
        </div>
    );
}