import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';
import SendIcon from '@mui/icons-material/Send';
import { TextField, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import CustomSnackbar from './CustomSnackbar'
import * as EmailValidator from 'email-validator';

function EmailForm(props) {
    const [emailValue, setEmailValue] = useState();
    const [nameValue, setNameValue] = useState();
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const form = useRef();
    const [loadingSend, setLoadingSend] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFailure, setOpenFailure] = useState(false);
  
    
    const sendEmail = () => {
        if(!EmailValidator.validate(emailValue)){
        setEmailError(true);
        }
        if(!nameValue){
        setNameError(true);
        }
        if(nameValue && EmailValidator.validate(emailValue)){
        setLoadingSend(true);
        /*
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
        */
        console.log('sent')
        successMessage();
        }
    };

    const successMessage = () => {
        setOpenSuccess(true)
    }

    const failMessage = () => {
        setOpenFailure(true)
    }

  return (
    <>
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
                        backgroundColor: '#aaaaff',
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
        <CustomSnackbar open={openSuccess} setOpen={setOpenSuccess} message={"Sent successfully!"} modal={props.modal}/>
        <CustomSnackbar open={openFailure} setOpen={setOpenFailure} message={"Oops! Something went wrong. Please try again and if the problem persists, contact rootbeer.service@gmail.com"} modal={props.modal}/>
    </>
  )
}

export default EmailForm;
