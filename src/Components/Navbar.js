import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import SmoothList from 'react-smooth-list';
import '../css/Navbar.css'
import { CardMedia, Slide } from '@mui/material';
import logo from '../images/logo.png'



export default function Navbar() {
  const [mounted] = useState(true)

  return (
    <Slide direction="down" in={mounted} mountOnEnter unmountOnExit timeout={1000}>
      <Box sx={{ 
        flexGrow: 1, 
        ml: 'auto',
        }}>
        <AppBar position="static" sx={{ height: '150px' }}>
          <Toolbar sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', width: '100%'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '300px', ml: {xs: '0' , sm: '10%'}}}>
              <Box
                sx={{ 
                  mr: 1,
                  '&:hover': {
                    cursor: 'default'
                  }
                  }}>
                  <CardMedia
                    image={logo}
                    title={'logo'}
                    component="img"
                    sx={{
                      maxWidth: '150px',
                    }}
                    />
              </Box>
            </Box>
            <Box sx={{ ml: {xs: 0, sm: 'auto'}, mr: {xs: '10%', sm: '10%'}}}>
              {
              <SmoothList className='smoothlist' childClassName='smoothlistChild' duration={600} delay={100}>
                <Box sx={{ mr: 2, width: '100%', ml: 'auto', }}> 
                  <a target='_blank' rel="noreferrer" href="mailto:carswelllouisville@gmail.com">
                    <IconButton sx={{ 
                      transition: '.4s',
                      '&:hover':{
                        boxShadow: '0 2px 15px 0px gray',
                        transition: '.2s'
                      }
                     }}>
                      <EmailIcon sx={{ color: '#FFFFFF', fontSize: '32px',
                      }} />
                    </IconButton>
                  </a>
                </Box>
                <Box sx={{ mr: 2 }}>
                  <a target='_blank' rel="noreferrer" href={'https://twitter.com/kmartjohnmayer'}>
                    <IconButton sx={{ 
                      transition: '.4s',
                      '&:hover':{
                        boxShadow: '0 2px 15px 0 gray',
                        transition: '.2s'
                      }
                     }}>
                      <TwitterIcon sx={{ color: '#00ACEE', width: '32px', height: '32px'}}/>
                    </IconButton>
                  </a>
                </Box>
                <Box sx={{ mr: 2 }}>
                  <a target='_blank' rel="noreferrer" href={'https://open.spotify.com/playlist/7whoqO8hn717qz31qJ61mz?si=njq9I5V5TYuBiCs3XWc-kg&nd=1'}>
                    <IconButton sx={{ 
                      transition: '.4s',
                      '&:hover':{
                        boxShadow: '0 2px 15px 0 gray',
                        transition: '.2s'
                      }
                     }}>
                      <img className='icon' alt={'spotify_icon'} src={process.env.PUBLIC_URL + '/spotify_icon.png'} />
                    </IconButton>
                  </a>
                </Box>
              </SmoothList>
              }
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          className='gradient-background'
          sx={{
            mt: 0,
            height: '1px',
          }}
          />      
        </Box>
    </Slide>
  );
}