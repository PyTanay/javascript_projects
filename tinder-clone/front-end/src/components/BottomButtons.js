import React from 'react'
import '../css/BottomButtons.css'
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';



function BottomButtons() {
    return (
        <div className='bottomButtons'>
            <IconButton>
                <ReplayIcon fontSize='large' className='bottom__repeat' />
            </IconButton>
            <IconButton>
                <CloseIcon fontSize='large' className='bottom__close' />
            </IconButton>
            <IconButton>
                <StarRateIcon fontSize='large' className='bottom__star' />
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize='large' className='bottom__fav' />
            </IconButton>
            <IconButton>
                <FlashOnIcon fontSize='large' className='bottom__lightning' />
            </IconButton>
        </div>
    )
}

export default BottomButtons
