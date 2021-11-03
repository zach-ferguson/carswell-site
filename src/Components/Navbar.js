import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../css/Navbar.css'

export default function Navbar() {
  return (
    <Box sx={{ 
      flexGrow: 1, 
      ml: 'auto',
      }}>
      <AppBar position="static">
        <Toolbar sx={{ flexGrow: 1, display: 'flex', }}>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MusicNoteIcon sx={{ 
              fontSize: 26,
            }}/>
          </IconButton>
          <div>
            <Typography variant="h6" component="div" 
              sx={{ 
                flexGrow: 1 , 
                fontFamily: 'Lato',
                fontSize: 26
                }}>
              Carswell Music
            </Typography>
          </div>
          <Box sx={{ justifySelf: 'flex-end' }}>
            <a target='_blank' rel="noreferrer" href={'https://twitter.com/kmartjohnmayer'}>
              <IconButton>
                <TwitterIcon sx={{ color: '#00ACEE', width: '30px', height: '30px'}}/>
              </IconButton>
            </a>
            <a target='_blank' rel="noreferrer" href={'http://tinyurl.com/96f6y3vf'}>
              <IconButton>
                <img className='icon' src={process.env.PUBLIC_URL + '/spotify_icon.png'} />
              </IconButton>
            </a>
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
  );
}