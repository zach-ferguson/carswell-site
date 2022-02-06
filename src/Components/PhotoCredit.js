import { Typography } from '@mui/material'
import React from 'react'

const style = { 
    width: 'fit-content', 
    color: '#888888', 
    transform: 'rotate(5deg)',
    textDecoration: 'underline', 
    '&:hover': { opacity: '.5' },
    fontSize: {xs: '12px', md: ''},
    mt: {xs: '4rem', md: ''}
}

function PhotoCredit() {
    return (
        <a target="_blank" rel="noreferrer" href='https://www.instagram.com/treygriffin_/'>
            <Typography sx={ style }>
                Photos by Trey Griffin
            </Typography>
        </a>
    )
}

export default PhotoCredit
