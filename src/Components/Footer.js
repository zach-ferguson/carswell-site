import { Box } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import '../css/Navbar.css'
import spotifyLogo from '../images/icons8-spotify-48.webp'
import youtubeLogo from '../images/icons8-youtube-48.webp'
import twitterLogo from '../images/icons8-twitter-squared-48.webp'
import instagramLogo from '../images/icons8-instagram-48.webp'
import '../css/Navbar.css'


const iconBoxStyle = {
    mx: '1rem',
    maxHeight: '32px', 
}
  
const iconButtonStyle = {
transition: '.1s',
'&:hover':{
    opacity: '.5',
    transition: '.1s'
    },
}

const iconStyle = { 
    width: '32px'
}
  

function Footer() {
  return (
      <Box sx={{ width: '100%', height: '100px', background: 'black', display: 'flex', flexDirection: 'column'}}>
        <Box className='gradient-background' sx={{ mt: 0, height: '1px'}} />      
        <Box sx={{ width: '100%', display: 'flex', height: '100%' }}>
            <Box sx={{ mr: '2rem', ml: 'auto', display: 'flex', mt: '1.5rem' }}>
                <Box sx={ iconBoxStyle }>
                    <a target='_blank' rel="noreferrer" href={'https://twitter.com/kmartjohnmayer'}>
                    <IconButton sx={ iconButtonStyle }>
                        <img className='icon' alt={'twitter-logo'} src={ twitterLogo }  style={ iconStyle }/>
                    </IconButton>
                    </a>
                </Box>
                <Box sx={ iconBoxStyle }> 
                    <a target='_blank' rel="noreferrer" href="https://www.youtube.com/c/ChrisCarswell/featured">
                    <IconButton sx={ iconButtonStyle }>
                        <img className='icon' alt='yt-icon' src={ youtubeLogo } style={ iconStyle }/>
                    </IconButton>
                    </a>
                </Box>
                <Box sx={ iconBoxStyle }>
                    <a target='_blank' rel="noreferrer" href={'https://www.instagram.com/carswellmusic/'}>
                    <IconButton sx={ iconButtonStyle }>
                        <img className='icon' alt={'instagram-icon'} src={ instagramLogo }  style={ iconStyle }/>
                    </IconButton>
                    </a>
                </Box>
                <Box sx={ iconBoxStyle }>
                    <a target='_blank' rel="noreferrer" href={'https://open.spotify.com/playlist/7whoqO8hn717qz31qJ61mz?si=njq9I5V5TYuBiCs3XWc-kg&nd=1'}>
                    <IconButton sx={ iconButtonStyle }>
                        <img className='icon' alt={'spotify-icon'} src={ spotifyLogo } style={ iconStyle }/>
                    </IconButton>
                    </a>
                </Box>
            </Box>
        </Box>
      </Box>
  )
}

export default Footer;
