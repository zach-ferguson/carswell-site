import { Box } from '@mui/system'
import React from 'react'
import { alpha } from '@mui/material/styles';


function Home() {
    return (
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
            mr: 'auto',
            ml: 'auto',
          }}>
          <Box 
            component="img"
            src={process.env.PUBLIC_URL + '/samplepic2.jpg'}
              sx={{
                minWidth: '100%',
                overflowY: 'none',
                alignSelf: 'center',
                mx: 'auto',
              }} 
          />
        </Box>
    )
}

export default Home
