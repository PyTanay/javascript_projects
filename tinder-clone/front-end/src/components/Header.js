import React from 'react'
import '../css/Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';


function Header() {
    return (
        <div className='header'>
            <IconButton>
            <PersonIcon fontSize='large' className='header__icon' />
            </IconButton>
            <img className='header__logo' alt='tinder_logo' src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-768x432.png' />
            <IconButton>
                <ChatIcon fontSize='large' className='header__icon' />
            </IconButton>
        </div>
    )
}

export default Header
