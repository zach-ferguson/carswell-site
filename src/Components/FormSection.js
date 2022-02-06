import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import EmailForm from './EmailForm';
import '../css/Navbar.css'

function FormSection() {
  return (
    <Box sx={{ width: '100%', height: {xs: '900px', md: '800px'}, display: 'flex', flexDirection: 'column', }}>
      <Box className='gradient-background' sx={{ height: '1px', width: '100%'}}/>      
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', mt: '6rem' }}>
        <Typography sx={{ color: 'white', fontSize: {xs: '32px', md: '48px'} , margin: 'auto', width: 'fit-content', textAlign: 'center', mb: {xs: '3rem', md: 'auto'}}}>
            Let's talk about your project.
        </Typography>
        <Box sx={{ background: 'white', width: {xs: '100%', md: '450px'}, height:'600px', borderRadius: '12px', mx: 'auto', my: 'auto', ml: {xs: '', md: '3rem',} }}>
            <Box sx={{ my: '2rem', height: '100%',  }}>
                <EmailForm />
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default FormSection;
