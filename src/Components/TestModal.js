import React, { useState, useRef, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';
import SendIcon from '@mui/icons-material/Send';
import { Fab, TextField, Typography, Slide } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import CustomSnackbar from './CustomSnackbar'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import * as EmailValidator from 'email-validator';


import '../css/fab.css';

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
  const [emailValue, setEmailValue] = useState();
  const [nameValue, setNameValue] = useState();
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const form = useRef();
  const [loadingSend, setLoadingSend] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailure, setOpenFailure] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true)
    }, 1000);
  },[])

  const sendEmail = () => {
    if(!EmailValidator.validate(emailValue)){
      setEmailError(true);
    }
    if(!nameValue){
      setNameError(true);
    }
    if(nameValue && EmailValidator.validate(emailValue)){
      setLoadingSend(true);
      emailjs.sendForm('service_fprqmnf', 'template_rd5xp9s', form.current, process.env.REACT_APP_EMAIL_JS_ID)
        .then((result) => {
          console.log(result.text);
          if(result.status === 200){
            setLoadingSend(false)
            successMessage();
          }
        }, (error) => {
          console.log(error.text);
          failMessage();
      });
    }
  };

  const successMessage = () => {
    setOpenSuccess(true)
  }

  const failMessage = () => {
    setOpenFailure(true)
  }

  return (
    <div>
      {/*<Button onClick={handleOpen}>Open modal</Button>*/}
      <Slide direction="up" in={mounted} mountOnEnter unmountOnExit timeout={800}>
        <Box 
            sx={{ 
            ml: { xs: '50%', sm:'60%'},
            mb: '100px',
            zIndex: 900,
        }}>
            <Fab className='fab' variant={'extended'} autoCapitalize={false} disableRipple={true} onClick={handleOpen}
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
                <ContactMailIcon sx={{ mr: 1, color: 'black'}}/>
                <Typography sx={{ fontFamily: 'Lato', fontWeight: 600, textTransform: 'none', color: 'black'}}>
                    Contact Chris
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
              <form ref={form}>
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', my: 'auto' }}>
                  <TextField
                      error={nameError}
                      id="user_name"
                      label="Name"
                      required
                      type="text"
                      name="user_name"
                      sx={{ marginTop: '10px', width: {xs: '300px', sm: '400px'},  }}
                      variant='outlined'
                      value={nameValue}
                      onChange={(e) => {setNameValue(e.target.value); setNameError(false);}}
                      />
                  <TextField
                      error={emailError}
                      id="user_email"
                      label="Email"
                      required
                      type="email" 
                      name="user_email"
                      sx={{ marginTop: '25px', width: {xs: '300px', sm: '400px'}}}
                      variant='outlined'
                      value={emailValue}
                      onChange={(e) => {setEmailValue(e.target.value); setEmailError(false);}}
                  />
                  <TextField
                      multiline
                      rows={10}
                      id="message-field"
                      type="text" 
                      name="message" 
                      sx={{ marginTop: '25px', width: {xs: '300px', sm: '400px'}, height: {xs: '100%', sm: '300px'}}}
                      placeholder='Message'
                      variant='outlined'
                    />
                  <Button disableRipple={true} className='send-button' onClick={() => {sendEmail()}}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '300px',
                      height: '54px',
                      borderRadius: '25px',
                      bgcolor: 'gray',
                      marginTop: {xs: '20px', sm: 'auto'},
                      fontSize: '24px',
                      textTransform: 'none',
                      fontWeight: 600,
                      transition: '.3s',
                      '&:hover': {
                        width: '300px',
                        backgroundColor: '#aaaaaa',
                        transition: '.3s',
                      },
                      '&:active':{
                        width: '300px',
                        backgroundColor: '#ffaaaa',
                        transition: '0.1s'
                      },
                      }}> 
                      {!loadingSend?
                      <>
                        Send
                        <SendIcon sx={{
                          ml: '1rem',
                        }}/>
                      </>
                      :
                      <CircularProgress />
                      }
                  </Button>
                </Box>
              </form>
            </Box>
            <CustomSnackbar open={openSuccess} setOpen={setOpenSuccess} message={"Sent successfully!"}/>
            <CustomSnackbar open={openFailure} setOpen={setOpenFailure} message={"Oops! Something went wrong. Please try again and if the problem persists, contact rootbeer.service@gmail.com"}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}