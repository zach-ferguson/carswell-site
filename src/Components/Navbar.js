import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import SmoothList from 'react-smooth-list';
import '../css/Navbar.css'
import { Slide } from '@mui/material';

export default function Navbar() {
  const [mounted] = useState(true)

  return (
    <Slide direction="down" in={mounted} mountOnEnter unmountOnExit timeout={1000}>
      <Box sx={{ 
        flexGrow: 1, 
        ml: 'auto',
        }}>
        <AppBar position="static" sx={{ height: '100px' }}>
          <Toolbar sx={{ flexGrow: 1, display: 'flex', width: '100%'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '300px', ml: '10%' }}>
              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 1,
                    '&:hover': {
                      cursor: 'default'
                    }
                   }}
                  
                >
                  <MusicNoteIcon sx={{ 
                    fontSize: 32,
                  }}/>
              </IconButton>
              <Typography variant="h6" component="div" 
                sx={{ 
                  flexGrow: 1 , 
                  fontFamily: 'Nunito Sans',
                  fontSize: 26,
                  color: '#cfd8dc',
                  '&:hover': {
                    cursor: 'default',
                  }
                  }}>
                Carswell Music 
              </Typography>
            </Box>
            <Box sx={{ ml: 'auto', mr: '10%' }}>
              {
              <SmoothList className='smoothlist' childClassName='smoothlistChild' duration={600} delay={100}>
                <Box sx={{ mr: 2, width: '100%', ml: 'auto', }}> 
                  <a target='_blank' rel="noreferrer" href="mailto:carswelllouisville@gmail.com">
                    <IconButton sx={{ 
                      transition: '.4s',
                      '&:hover':{
                        boxShadow: '0 2px 15px 0px gray',
                        transition: '.4s'
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
                        transition: '.4s'
                      }
                     }}>
                      <TwitterIcon sx={{ color: '#00ACEE', width: '32px', height: '32px'}}/>
                    </IconButton>
                  </a>
                </Box>
                <Box sx={{ mr: 2 }}>
                  <a target='_blank' rel="noreferrer" href={'http://tinyurl.com/96f6y3vf'}>
                    <IconButton sx={{ 
                      transition: '.4s',
                      '&:hover':{
                        boxShadow: '0 2px 15px 0 gray',
                        transition: '.4s'
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