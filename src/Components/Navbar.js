import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SmoothList from 'react-smooth-list';
import '../css/Navbar.css'
import { CardMedia, Slide } from '@mui/material';
import logo from '../images/logo.png'
import spotifyLogo from '../images/icons8-spotify-48.png'
import youtubeLogo from '../images/icons8-youtube-48.png'
import twitterLogo from '../images/icons8-twitter-squared-48.png'
import instagramLogo from '../images/icons8-instagram-48.png'

const toolbarStyle = {
  flexGrow: 1,
  display: 'flex', 
  flexDirection: {xs: 'column', md:'row'}, 
  width: '100%', 
  alignItems: 'center', 
  justifyContent: 'space-around',
}

const iconBoxStyle = {
  mx: '1rem',
  width: {xs: '42px', md: '64px'}, 
  height: {xs: '42px', md: '64px'}, 
  mt: {xs: '-1rem', md: ''}
}

const iconButtonStyle = {
  width: '100%',
  height: '100%',
  transition: '.1s',
  '&:hover':{
    opacity: '.5',
    transition: '.1s'
  },
}

const iconStyle = {
  height: '100%',
  width: '100%',
}

export default function Navbar() {
  const [mounted] = useState(true)

  return (
    <Slide direction="down" in={mounted} mountOnEnter unmountOnExit timeout={1000}>
      <Box sx={{ flexGrow: 1,  ml: 'auto'}}>
        <AppBar position="static" sx={{ height: '200px' }}>
          <Toolbar sx={ toolbarStyle } disableGutters={true}>
              <Box sx={{ 
                  '&:hover': {
                    cursor: 'default'
                  }}}>
                  <CardMedia image={logo} title={'logo'} component="img"
                    sx={{
                      mt: '-20px',
                      maxWidth: '200px',
                    }}/>
              </Box>
            <Box sx={{ mt: '-15px' }}>
              {
              <SmoothList className='smoothlist' childClassName='smoothlistChild' duration={600} delay={100}>
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
                      <img className='icon' alt={'spotify-icon'} src={ spotifyLogo }  style={ iconStyle }/>
                    </IconButton>
                  </a>
                </Box>
              </SmoothList>
              }
            </Box>
          </Toolbar>
        </AppBar>
        <Box className='gradient-background' sx={{ mt: 0, height: '1px',}} />      
        </Box>
    </Slide>
  );
}