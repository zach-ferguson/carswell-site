import React, { useState, useRef, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Fab, Typography, Slide } from '@mui/material';
import '../css/fab.css';
import EmailForm from './EmailForm';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: 300, sm: 400},
    height: {xs: 500, sm: 540},
    bgcolor: '#cfd8dc',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '25px'
  };

export default function TestModal() {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = useState(false);
  const [hideFab, setHideFab] = useState(false);
  const handleOpen = () => {
    setOpen(true); 
    setHideFab(true);
  }
  const handleClose = () => {
    setOpen(false); 
    setHideFab(false);
  }
  useEffect(() => {
    setTimeout(() => {
      setMounted(true)
    }, 1000);
  },[])

  return (
    <div>
      <Slide direction="up" in={mounted} mountOnEnter unmountOnExit timeout={800}>
        <Box 
            sx={{ zIndex: 900 }}>
            <Fab className='fab' variant={'extended'} autoCapitalize={false} disableRipple={true} onClick={handleOpen} size='large'
                sx={{
                    display: hideFab? 'none' : '',
                    width: '250px',
                    bgcolor: 'black',
                    border: '1px solid black',
                    transition: '.8s',
                    '&:hover': {
                        border: '1px solid red',
                        transition: '.8s',
                        color: '#ffffff',
                        width: '300px', 
                    }
                }}>
                <Typography sx={{ fontFamily: 'Lato', fontWeight: 700, textTransform: 'none', color: 'black', fontSize: '18px'}}>
                    CONTACT CHRIS
                </Typography>
            </Fab>
        </Box>
      </Slide>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <Box sx={modalStyle}>
            <Box
              component="form"
              noValidate
              autoComplete="on"
              sx={{
                height: '100%',
                my: 'auto',
              }}
              >
              <EmailForm modal={true}/>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}