import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import useHover from '../Hooks/useHover';
import { Typography } from '@mui/material';

export default function ContactFab() {
    const [hoverRef, isHovered] = useHover();

  return (
    <Box 
      sx={{ 
        position: 'sticky',
        ml: '80%',
        mb: '40%',
        zIndex: 100,
     }}>
      <Fab variant={'extended'} autoCapitalize={false}
        sx={{
            border: '1px solid #673ab7',
            bgcolor: '#FFFFFF',
            boxShadow: '0 4px 8px 0 #FFFFFF, 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}>
        <ContactMailIcon sx={{ mr: 1 }}/>
        <Typography sx={{ fontFamily: 'Lato', fontWeight: 600}}>
            Contact Chris
        </Typography>
      </Fab>
    </Box>
  );
}