import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';
import '../css/fab.css';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 540,
  bgcolor: '#cfd8dc',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '25px'
};

export default function EmailModal(props) {
    const [emailError] = useState(false);
    const [nameError] = useState(false);


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={() => {props.setOpen(false)}}
        onBackdropClick={() => {props.setOpen(false)}}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
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
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', my: 'auto' }}>
                <TextField
                    error={nameError}
                    id="name-field"
                    label="Name"
                    required
                    sx={{ marginTop: '25px', width: '400px' }}
                    />
                <TextField
                    error={emailError}
                    id="email-field"
                    label="Email"
                    required
                    sx={{ marginTop: '25px', width: '400px' }}
                />
                <TextField
                    multiline
                    rows={10}
                    error={emailError}
                    id="message-field"
                    sx={{ marginTop: '25px', width: '400px', height: '600px'}}
                    placeholder='Message'
                  />
                  <Button disableRipple={true} className='send-button'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '50%',
                      borderRadius: '25px',
                      bgcolor: 'gray',
                      marginTop: 'auto',
                      fontSize: '24px',
                      textTransform: 'none',
                      fontWeight: 600,
                      border: '1px solid teal',
                      }}> 
                      Send
                      <SendIcon sx={{
                        ml: '1rem',
                      }}/>
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}