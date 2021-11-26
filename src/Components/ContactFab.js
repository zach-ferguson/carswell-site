import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import useHover from '../Hooks/useHover';
import { Slide, Typography } from '@mui/material';
import '../css/fab.css';
import EmailModal from './EmailModal';

export default function ContactFab() {
    const [hoverRef, isHovered] = useHover();
    const [mounted, setMounted] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    useEffect(() => {
      setTimeout(() => {
        setMounted(true)
      }, 1000);
    },[])

  return (
    <Slide direction="up" in={mounted} mountOnEnter unmountOnExit timeout={800}>
      <Box 
        sx={{ 
          ml: '60%',
          mb: '40%',
          zIndex: 900,
      }}>
        <Fab className='fab' variant={'extended'} autoCapitalize={false} disableRipple={true} onClick={() => {handleOpen()}}
          sx={{
              width: '250px',
              bgcolor: 'black',
              border: '1px solid black',
              '&:hover': {
                border: '1px solid black',
                transition: '.8s',
                color: '#ffffff'
                
            }
          }}>
          <ContactMailIcon sx={{ mr: 1, color: 'black'}}/>
          <Typography sx={{ fontFamily: 'Lato', fontWeight: 600, textTransform: 'none', color: 'black'}}>
            Contact Chris
          </Typography>
          <EmailModal open={openModal} setOpen={setOpenModal} handleOpen={handleOpen} handleClose={handleClose}/>
        </Fab>
      </Box>
    </Slide>
  );
}